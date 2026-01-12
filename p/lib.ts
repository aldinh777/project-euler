import { existsSync, mkdirSync } from "fs";
import { spawn } from "child_process";
import { resolve as _resolve } from "path";
import { ch } from "./lang";
import type { CombinedLanguage } from "./lang";

function mkdirp(path: string) {
  const arrpath = path.split("/");
  const parentpath = arrpath.slice(0, -1).join("/");
  if (!existsSync(parentpath)) {
    mkdirp(parentpath);
  }
  if (!existsSync(path)) {
    mkdirSync(path);
  }
}

export type CompileResult = {
  name: string;
  level: number;
  compileTime: number;
};

export type ProgramResult = {
  name: string;
  level: number;
  result: string;
  timeEllapsed: number;
};

export type ExecutionConfig = {
  lang?: string[];
  level?: number[];
  parallelExecution?: boolean;
  parseOutput?: boolean;
  displayAnswer?: boolean;
  displayOutput?: boolean;
  compareAnswer?: boolean;
  timeEllapsed?: boolean;
  displayExecutionProgress?: boolean;
  displayCompilationProgress?: boolean;
};

export function compileProgram(
  lang: CombinedLanguage,
  level: number,
  config?:
    | {
        lang?: string[];
        level?: number[];
        parallelExecution?: boolean;
        parseOutput?: boolean;
        displayAnswer?: boolean;
        displayOutput?: boolean;
        compareAnswer?: boolean;
        timeEllapsed?: boolean;
        displayExecutionProgress?: boolean;
        displayCompilationProgress: any;
      }
    | undefined,
) {
  const { name, compile } = lang;
  const { compiler, args, outputDir } = compile;
  return new Promise<CompileResult>((resolve, reject) => {
    mkdirp(outputDir(level.toString()));
    const start = Date.now();
    const process = spawn(compiler, args(level.toString()));
    if (config?.displayCompilationProgress) {
      console.log(`| ${ch(level)} COMPILING \t| ${name}`);
    }
    process.stderr.on("data", (err) => {
      reject(err.toString());
    });
    process.on("close", (_) => {
      const end = Date.now();
      const compileTime = end - start;
      resolve({ name, level, compileTime });
      if (config?.displayCompilationProgress) {
        console.log(`| ${ch(level)} COMPILED. \t| ${name}`);
      }
    });
  });
}

export function executeProgram(
  lang: CombinedLanguage,
  level: number,
  config?: {
    lang?: string[];
    level?: number[];
    parallelExecution?: boolean;
    parseOutput?: boolean;
    displayAnswer?: boolean;
    displayOutput?: boolean;
    compareAnswer?: boolean;
    timeEllapsed?: boolean;
    displayExecutionProgress?: any;
    displayCompilationProgress?: boolean;
  },
) {
  const { name, compile, run } = lang;
  const cmd = run ? run.cmd : compile.outputDir(level.toString()) + "main";
  const args = run ? run.args(level.toString()) : [];
  return new Promise<ProgramResult>((resolve, reject) => {
    let cwd = process.cwd();
    if (run?.cwd) {
      cwd = _resolve(cwd, run.cwd(level.toString()));
    }
    const start = Date.now();
    const program = spawn(cmd, args, { cwd });
    if (config?.displayExecutionProgress) {
      console.log(`| ${ch(level)} EXECUTING \t| ${name}`);
    }
    program.stdout.on("data", (data) => {
      const end = Date.now();
      const timeEllapsed = end - start;
      const parsed = /\"?(-?\d+)\"?\s?/.exec(data.toString())!;
      const result = parsed[1]!;
      resolve({ name, level, result, timeEllapsed });
      if (config?.displayExecutionProgress) {
        console.log(`| ${ch(level)} COMPLETED \t| ${name}`);
      }
    });
    program.stderr.on("data", (err) => {
      reject(err.toString());
    });
  });
}
