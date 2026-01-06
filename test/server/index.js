import { languages, partialch } from "../lang";
import { compileProgram, executeProgram } from "../lib";
const expected_result = require("../expected_result.json");

function mainPage() {
  return Bun.file(__dirname + "/page.html").text();
}

function executeGiven(lang, level, config) {
  const programming = lang.map((p) => languages[p]).filter((p) => p);
  const hasCompiled = programming.some((p) => p.compile);
  let compilation = Promise.resolve();
  if (hasCompiled) {
    compilation = Promise.all(
      programming
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
        const progResult = [];
        for (const prog of programming) {
          const lvResult = [];
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
          const answer = expected_result[partialch(level)];
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
        const { lang, level } = await req.json();
        return new Response(JSON.stringify(await executeGiven(lang, level)), {
          headers: { "Content-Type": "application/json" },
        });
      default:
        return new Response("Not Found");
    }
  },
});
