import { languages, partialch, type CombinedLanguage } from "../lang";
import {
  compileProgram,
  executeProgram,
  type ExecutionConfig,
  type CompileResult,
  type ProgramResult,
} from "../lib";
import expected_result from "../expected_result.json";

function mainPage() {
  return Bun.file(__dirname + "/page.html").text();
}

async function executeGiven(
  lang: string[],
  level: number[],
  config?: ExecutionConfig,
) {
  const programming = lang
    .map((p) => languages[p] as CombinedLanguage)
    .filter((p) => p);
  const hasCompiled = programming.some((p) => Object.hasOwn(p, "compile"));
  let compilation = Promise.resolve<CompileResult[][]>([]);
  if (hasCompiled) {
    compilation = Promise.all(
      programming
        // @ts-ignore
        .filter((p) => p.compile)
        .map((p) =>
          Promise.all(level.map((lv) => compileProgram(p, lv))).catch((err) => {
            throw {
              type: "compile error",
              err,
            };
          }),
        ),
    );
  }
  return compilation
    .then(async (_) => {
      if (config?.parallelExecution) {
        return Promise.all(
          programming.map((p) =>
            Promise.all(level.map((lv) => executeProgram(p, lv, config))).catch(
              (err) => {
                throw {
                  type: "execution error",
                  err,
                };
              },
            ),
          ),
        );
      } else {
        const progResult: ProgramResult[][] = [];
        for (const prog of programming) {
          const lvResult: ProgramResult[] = [];
          for (const lv of level) {
            lvResult.push(await executeProgram(prog, lv, config));
          }
          progResult.push(lvResult);
        }
        return progResult;
      }
    })
    .then((result) => {
      return result.map((lang) => {
        return lang.map((progresult) => {
          const { name, level, result, timeEllapsed } = progresult;
          const ch_index = partialch(level) as keyof typeof expected_result;
          const answer = expected_result[ch_index];
          const correct = result == answer ? "CORRECT" : "INCORRECT";
          return {
            name,
            level,
            result,
            timeEllapsed: `${timeEllapsed}ms`,
            correct,
          };
        });
      });
    })
    .catch((err) => err);
}

Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    switch (url.pathname) {
      case "/":
        return new Response(await mainPage(), {
          headers: { "Content-Type": "text/html" },
        });
      case "/exec":
        const { lang, level } = (await req.json()) as {
          lang: string[];
          level: number[];
        };
        return new Response(JSON.stringify(await executeGiven(lang, level)), {
          headers: { "Content-Type": "application/json" },
        });
      default:
        return new Response("Not Found");
    }
  },
});
