const rovel = require("../../index.js");
const fs = require("fs");

function compile(file) {
    return new Promise(function(resolve, reject) {
        fs.readFile(file, 'utf8', function(err, data) {
            if(!file.endsWith(".rs")) {
                reject(`Can't compile ${file} because it is not an rovelscript file`)
            }
            if (err) reject(`× Couldn't compile ${file}\n\n${err}\n\nClosing Compiler. Please fix all issues before compiling it.`)
            else {
                resolve(data);
            }
        })
    })
}

module.exports = { compile };
