const {execapp} = require("./execapp.js");
function clear(win){
    if(win){
const { exec } = require('child_process');
var yourscript = exec('cls',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
    }
    if(!win){
const { exec } = require('child_process');
var yourscript = exec('clear',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
    }
}

module.exports={clear};