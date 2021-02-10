const {clear} = require("./rovelos/lib/clear.js");
const {text, npm} = require("./index.js");
const pkg = require("./package.json");
clear();

setTimeout(function(){console.log(text.yellow("\n\nThanks for using ")+text.red("rovel.js\n")+text.green("If you need any help or found a bug, please view our docs or make an issue in our git repo respectively.\n\n"))

npm.getdetails("rovel.js", beta);
function beta(data){
if (pkg.beta == true && pkg.betabuild > data['dist-tags'].latest) {
        console.log(text.green.bold(`Thanks for installing the beta update of ROVEL.JS! Please note that beta versions may not work properly, and features given in beta may be removed. So please use this beta for testing purposes. If you find any bugs with beta version, kindly let us know either in github issues or in our discord server!\nStable Release:${data["dist-tags"].latest}\nBeta Version: ${pkg.betabuild}\n\n`));
    }};
}, 1000);

