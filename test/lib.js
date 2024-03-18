const fs = require('fs')
const { spawn } = require('child_process')
const path = require('path')
const { ch } = require('./lang')

function mkdirp(path) {
    const arrpath = path.split('/')
    const parentpath = arrpath.slice(0, -1).join('/')
    if (!fs.existsSync(parentpath)) {
        mkdirp(parentpath)
    }
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
    }
}

function compileProgram(lang, level, config) {
    const { name, compile } = lang
    const { compiler, args, outputDir } = compile
    return new Promise((resolve, reject) => {
        mkdirp(outputDir(level))
        const start = Date.now()
        const process = spawn(compiler, args(level))
        if (config?.displayCompilationProgress) {
            console.log(`| ${ch(level)} COMPILING \t| ${name}`)
        }
        process.stderr.on('data', (err) => {
            reject(err.toString())
        })
        process.on('close', (_) => {
            const end = Date.now()
            const compileTime = end - start
            resolve({ name, level, compileTime })
            if (config?.displayCompilationProgress) {
                console.log(`| ${ch(level)} COMPILED. \t| ${name}`)
            }
        })
    })
}

function executeProgram(lang, level, config) {
    const { name, compile, run } = lang
    const cmd = run ? run.cmd : compile.outputDir(level) + 'main'
    const args = run ? run.args(level) : []
    return new Promise((resolve, reject) => {
        let cwd = process.cwd()
        if (run?.cwd) {
            cwd = path.resolve(cwd, run.cwd(level))
        }
        const start = Date.now()
        const program = spawn(cmd, args, { cwd })
        if (config?.displayExecutionProgress) {
            console.log(`| ${ch(level)} EXECUTING \t| ${name}`)
        }
        program.stdout.on('data', (data) => {
            const end = Date.now()
            const timeEllapsed = end - start
            const parsed = /\"?(-?\d+)\"?\s?/.exec(data.toString())
            const result = parsed[1]
            resolve({ name, level, result, timeEllapsed })
            if (config?.displayExecutionProgress) {
                console.log(`| ${ch(level)} COMPLETED \t| ${name}`)
            }
        })
        program.stderr.on('data', (err) => {
            reject(err.toString())
        })
    })
}

module.exports = {
    compileProgram,
    executeProgram
}
