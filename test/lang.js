function partialch(num) {
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

function ch(num) {
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

module.exports = {
  ch,
  partialch,
  languages: {
    // Interpreted Language
    py: {
      name: "Python3",
      run: {
        cmd: "python",
        args: (level) => [`./${ch(level)}/main.py`],
      },
    },
    rb: {
      name: "Ruby",
      run: {
        cmd: "ruby",
        args: (level) => [`./${ch(level)}/main.rb`],
      },
    },
    js: {
      name: "Javascript",
      run: {
        cmd: "node",
        args: (level) => [`./${ch(level)}/main.js`],
      },
    },
    js_bun: {
      name: "Javascript (Bun)",
      run: {
        cmd: "bun",
        args: (level) => [`./${ch(level)}/main.js`],
      },
    },
    php: {
      name: "PHP",
      run: {
        cmd: "php",
        args: (level) => [`./${ch(level)}/main.php`],
      },
    },
    r: {
      name: "R",
      run: {
        cmd: "Rscript",
        args: (level) => [`./${ch(level)}/main.r`],
      },
    },
    // Compiled Language
    hs: {
      name: "Haskell",
      compile: {
        compiler: "ghc",
        args: (level) => [
          `./${ch(level)}/main.hs`,
          "-o",
          `./build/haskell/${ch(level)}/main`,
          "-outputdir",
          `./build/haskell/${ch(level)}`,
        ],
        outputDir: (level) => `./build/haskell/${ch(level)}/`,
      },
    },
    rs: {
      name: "Rust",
      compile: {
        compiler: "rustc",
        args: (level) => [
          `./${ch(level)}/main.rs`,
          "-o",
          `./build/rust/${ch(level)}/main`,
        ],
        outputDir: (level) => `./build/rust/${ch(level)}/`,
      },
    },
    go: {
      name: "Go",
      compile: {
        compiler: "go",
        args: (level) => [
          "build",
          "-o",
          `./build/go/${ch(level)}/main`,
          `./${ch(level)}/main.go`,
        ],
        outputDir: (level) => `./build/go/${ch(level)}/`,
      },
    },
    java: {
      name: "Java",
      compile: {
        compiler: "javac",
        args: (level) => [
          "-d",
          `./build/java/${ch(level)}`,
          `./${ch(level)}/Main.java`,
        ],
        outputDir: (level) => `./build/java/${ch(level)}/`,
      },
      run: {
        cmd: "java",
        args: () => ["Main"],
        cwd: (level) => `./build/java/${ch(level)}`,
      },
    },
    // Uncompiled Executable
    go_run: {
      name: "Go (exec)",
      run: {
        cmd: "go",
        args: (level) => ["run", `./${ch(level)}/main.go`],
      },
    },
    java_run: {
      name: "Java (exec)",
      run: {
        cmd: "java",
        args: (level) => [`./${ch(level)}/Main.java`],
      },
    },
  },
};
