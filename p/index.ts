import { copyFileSync } from "fs";
import expected_result from "./expected_result.json";
import { ch, languages, partialch, type CombinedLanguage } from "./lang";
import { compileProgram, executeProgram, type CompileResult } from "./lib";
import default_config from "../_default_config.json";

let config = default_config;
try {
  config = require("../_config.json");
} catch (err) {
  console.log("Fail to use _config.json, copying from _default_config.json");
  copyFileSync("./_default_config.json", "./_config.json");
}

const programming = config.lang
  .map((p) => languages[p] as CombinedLanguage)
  .filter((p) => p);
const hasCompiled = programming.some((p) => p.compile);

let compilation = Promise.resolve<CompileResult[][]>([]);

if (hasCompiled) {
  if (config.displayCompilationProgress) {
    console.log("== COMPILE PROGRAM ==");
  }
  compilation = Promise.all(
    programming
      .filter((p) => p.compile)
      .map((p) =>
        Promise.all(config.level.map((lv) => compileProgram(p, lv, config))),
      ),
  );
}

compilation
  .then(async (_) => {
    if (config.displayExecutionProgress) {
      console.log("== EXECUTING ==");
    }
    if (config.parallelExecution) {
      return Promise.all(
        programming.map((p) =>
          Promise.all(
            config.level.map((lv) => executeProgram(p, lv, config)),
          ).catch(console.error),
        ),
      );
    } else {
      const progResult = [];
      for (const prog of programming) {
        const lvResult = [];
        for (const lv of config.level) {
          lvResult.push(await executeProgram(prog, lv, config));
        }
        progResult.push(lvResult);
      }
      return progResult;
    }
  })
  .then((result) => {
    console.log("== RESULTS ==");
    for (const lang of result) {
      if (!lang) {
        continue;
      }
      console.log(`[[[ ${lang[0]!.name} ]]]`);
      for (const progresult of lang) {
        const { level, result, timeEllapsed } = progresult;
        const ch_index = partialch(level) as keyof typeof expected_result;
        const answer = expected_result[ch_index];
        const correct = result == answer ? "CORRECT" : "INCORRECT";
        let strout = `${ch(level)}`;
        if (config.compareAnswer) {
          strout += `\t| ${correct}`;
        }
        if (config.timeEllapsed) {
          strout += `\t| ${timeEllapsed}ms`;
        }
        if (config.displayAnswer || config.displayOutput) {
          strout += "    { ";
          if (config.displayAnswer) {
            strout += `ANSWER : ${answer}`;
          }
          if (config.displayAnswer && config.displayOutput) {
            strout += " | ";
          }
          if (config.displayOutput) {
            strout += `OUTPUT : ${result}`;
          }
          strout += " }";
        }
        console.log(strout);
      }
    }
  })
  .catch(console.error);
