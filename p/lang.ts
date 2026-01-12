export function partialch(num: number) {
  const res = num.toString();
  switch (res.length) {
    case 1:
      return "00" + res;
    case 2:
      return "0" + res;
    default:
      return "" + res;
  }
}

export function ch(num: number) {
  const div = Math.ceil(num / 10).toString();
  let parent;
  switch (div.length) {
    case 1:
      parent = "0" + div;
      break;
    default:
      parent = div;
      break;
  }
  return parent + "/" + partialch(num);
}

export type InterpretedLanguage = {
  name: string;
  run: {
    cmd: string;
    args: (level: string) => string[];
    cwd?: (level: string) => string;
  };
};
export type CompiledLanguage = {
  name: string;
  compile: {
    compiler: string;
    args: (level: string) => string[];
    outputDir: (level: string) => string;
  };
};
export type Language = InterpretedLanguage | CompiledLanguage;
export type CombinedLanguage = CompiledLanguage & InterpretedLanguage;

export const languages: Record<string, Language> = {
  // Interpreted Language
  py: {
    name: "Python3",
    run: {
      cmd: "python",
      args: (level: any) => [`./${ch(level)}/main.py`],
    },
  },
  rb: {
    name: "Ruby",
    run: {
      cmd: "ruby",
      args: (level: any) => [`./${ch(level)}/main.rb`],
    },
  },
  js: {
    name: "Javascript",
    run: {
      cmd: "bun",
      args: (level: any) => [`./${ch(level)}/main.ts`],
    },
  },
  php: {
    name: "PHP",
    run: {
      cmd: "php",
      args: (level: any) => [`./${ch(level)}/main.php`],
    },
  },
  r: {
    name: "R",
    run: {
      cmd: "Rscript",
      args: (level: any) => [`./${ch(level)}/main.r`],
    },
  },
  // Compiled Language
  hs: {
    name: "Haskell",
    compile: {
      compiler: "ghc",
      args: (level: any) => [
        `./${ch(level)}/main.hs`,
        "-o",
        `./build/haskell/${ch(level)}/main`,
        "-outputdir",
        `./build/haskell/${ch(level)}`,
      ],
      outputDir: (level: any) => `./build/haskell/${ch(level)}/`,
    },
  },
  rs: {
    name: "Rust",
    compile: {
      compiler: "rustc",
      args: (level: any) => [
        `./${ch(level)}/main.rs`,
        "-o",
        `./build/rust/${ch(level)}/main`,
      ],
      outputDir: (level: any) => `./build/rust/${ch(level)}/`,
    },
  },
  go: {
    name: "Go",
    compile: {
      compiler: "go",
      args: (level: any) => [
        "build",
        "-o",
        `./build/go/${ch(level)}/main`,
        `./${ch(level)}/main.go`,
      ],
      outputDir: (level: any) => `./build/go/${ch(level)}/`,
    },
  },
  java: {
    name: "Java",
    compile: {
      compiler: "javac",
      args: (level: any) => [
        "-d",
        `./build/java/${ch(level)}`,
        `./${ch(level)}/Main.java`,
      ],
      outputDir: (level: any) => `./build/java/${ch(level)}/`,
    },
    run: {
      cmd: "java",
      args: () => ["Main"],
      cwd: (level: any) => `./build/java/${ch(level)}`,
    },
  },
  // Uncompiled Executable
  go_run: {
    name: "Go (exec)",
    run: {
      cmd: "go",
      args: (level: any) => ["run", `./${ch(level)}/main.go`],
    },
  },
  java_run: {
    name: "Java (exec)",
    run: {
      cmd: "java",
      args: (level: any) => [`./${ch(level)}/Main.java`],
    },
  },
};
