function partialch(num) {
    const res = num.toString();
    switch (res.length) {
        case 1:
            return 'c-00' + res;
        case 2:
            return 'c-0' + res;
        default:
            return 'c-' + res;
    }
}

function ch(num) {
    const div = Math.ceil(num / 10).toString();
    let parent;
    switch (div.length) {
        case 1:
            parent = '0' + div + 'x10';
            break;
        default:
            parent = div + 'x10';
            break;
    }
    return parent + '/' + partialch(num);
}

module.exports = {
    ch,
    partialch,
    languages: {
        python: {
            name: 'Python3',
            run: {
                cmd: 'py',
                args: level => [`./${ch(level)}/main.py`],
            },
        },
        ruby: {
            name: 'Ruby',
            run: {
                cmd: 'ruby',
                args: level => [`./${ch(level)}/main.rb`],
            },
        },
        js: {
            name: 'Javascript',
            run: {
                cmd: 'node',
                args: level => [`./${ch(level)}/main.js`],
            },
        },
        php: {
            name: 'PHP',
            run: {
                cmd: 'php',
                args: level => [`./${ch(level)}/main.php`],
            },
        },
        r: {
            name: 'R',
            run: {
                cmd: 'Rscript',
                args: level => [`./${ch(level)}/main.r`],
            },
        },
        go: {
            name: 'Go',
            run: {
                cmd: 'go',
                args: level => ['run', `./${ch(level)}/main.go`],
            },
        },
        java: {
            name: 'Java',
            run: {
                cmd: 'java',
                args: level => [`./${ch(level)}/Main.java`],
            },
        },
        haskell: {
            name: 'Haskell',
            compile: {
                compiler: 'ghc',
                args: level => [`./${ch(level)}/main.hs`,
                    '-o', `./build/haskell/${ch(level)}/main`,
                    '-outputdir', `./build/haskell/${ch(level)}`],
                outputDir: level => `./build/haskell/${ch(level)}/`,
            },
        },
        rust: {
            name: 'Rust',
            compile: {
                compiler: 'rustc',
                args: level => [`./${ch(level)}/main.rs`,
                    '-o', `./build/rust/${ch(level)}/main.exe`],
                outputDir: level => `./build/rust/${ch(level)}/`,
            },
        },
    }
};
