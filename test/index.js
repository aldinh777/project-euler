const fs = require('fs');
const { spawn } = require('child_process');
const expected_result = require('./expected_result');
const { ch, languages, partialch } = require('./lang');
const default_config = require('../_default_config.json');

let config = default_config;
try {
    config = require('../test_config.json');
} catch (err) {
    console.log('Fail to use test_config.json, copying from _default_config.json');
    fs.copyFileSync('./_default_config.json', './test_config.json');
}

function executeProgram(lang, level) {
    const { name, compile, run } = lang;
    const cmd = compile ? compile.outputDir(level) + 'main' : run.cmd;
    const args = run ? run.args(level) : [];
    return new Promise((resolve, reject) => {
        const start = Date.now();
        const process = spawn(cmd, args);
        if (config.displayExecutionProgress) {
            console.log(`| ${ch(level)} EXECUTING \t| ${name}`);
        }
        process.stdout.on('data', data => {
            const end = Date.now();
            const timeEllapsed = end - start;
            const parsed = /\"?(\d+)\"?\s/.exec(data.toString());
            const result = config.parseOutput && parsed ? parsed[1] : data.toString();
            resolve({ name, level, result, timeEllapsed });
            if (config.displayExecutionProgress) {
                console.log(`| ${ch(level)} COMPLETED \t| ${name}`);
            }
            });
        process.stderr.on('data', err => {
            reject(err.toString());
        });
    })
}

function compileProgram(lang, level) {
    const { name, compile } = lang;
    const { compiler, args, outputDir } = compile;
    return new Promise((resolve, reject) => {
        mkdirp(outputDir(level));
        const start = Date.now();
        const process = spawn(compiler, args(level));
        console.log(`| ${ch(level)} COMPILING \t| ${name}`);
        process.stderr.on('data', err => {
            reject(err.toString());
        });
        process.on('close', _ => {
            const end = Date.now();
            const compileTime = end - start;
            resolve({ name, level, compileTime});
            if (config.displayCompilationProgress) {
                console.log(`| ${ch(level)} COMPLETED \t| ${name}`);
            }
        });
    });
}

function mkdirp(path) {
    const arrpath = path.split('/');
    const parentpath = arrpath.slice(0, -1).join('/');
    if (!fs.existsSync(parentpath)) {
        mkdirp(parentpath);
    }
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

const programming = config.lang.map(p => languages[p]).filter(p => p);
const hasCompiled = programming.some(p => p.compile);

let compilation = Promise.resolve();

if (hasCompiled) {
    if (config.displayCompilationProgress) {
        console.log('== COMPILE PROGRAM ==');
    }
    compilation = Promise.all(programming
        .filter(p => p.compile)
        .map(p => Promise.all(config.level.map(lv => compileProgram(p, lv))).catch(console.error))
    );
}

compilation
    .then(async _ => {
        if (config.displayExecutionProgress) {
            console.log('== EXECUTING ==');
        }
        if (config.parallelExecution) {
            return Promise.all(programming
                .map(p => Promise.all(config.level.map(lv => executeProgram(p, lv))).catch(console.error))
            );
        } else {
            const progResult = [];
            for (const prog of programming) {
                const lvResult = [];
                for (const lv of config.level) {
                    lvResult.push(await executeProgram(prog, lv));
                }
                progResult.push(lvResult);
            }
            return progResult;
        }
    })
    .then(result => {
        console.log('== RESULTS ==');
        for (const lang of result) {
            if (!lang) {
                continue;
            }
            console.log(`[[[ ${lang[0].name} ]]]`);
            for (const progresult of lang) {
                const { level, result, timeEllapsed } = progresult;
                const answer = expected_result[partialch(level)];
                const correct = result == answer ? 'CORRECT' : 'INCORRECT';
                let strout = `${ch(level)}`;
                if (config.compareAnswer) {
                    strout +=  `\t| ${correct}`;
                }
                if (config.timeEllapsed) {
                    strout +=  `\t| ${timeEllapsed}ms`;
                }
                if (config.displayAnswer || config.displayOutput) {
                    strout += '    { ';
                    if (config.displayAnswer) {
                        strout += `ANSWER : ${answer}`;
                    }
                    if (config.displayAnswer && config.displayOutput) {
                        strout += ' | ';
                    }
                    if (config.displayOutput) {
                        strout += `OUTPUT : ${result}`;
                    }
                    strout += ' }';
                }
                console.log(strout);
            }
        }
    })
    .catch(console.error);
