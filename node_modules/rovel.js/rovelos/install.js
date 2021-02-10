#!/usr/bin/env node

const {execapp, execarg} = require("./lib/execapp.js");
const rovel = require("../index.js");
const spin = require('./lib/spin/index.js');
const dotenv = require("../index.js").env;
const spinner = spin('Loading Packages').start();
const {$HOME, $PWD} = require("./bin/data.js");
const fs = require("fs");
__dirname = __dirname + "/";
if(process.argv[2]==undefined || process.argv.includes("--config")){
function loadconfig(num) {
	if(!fs.existsSync(`${$HOME}/.rosrc`)){
	fs.readFileSync(__dirname+"config.txt", "utf-8", (err, data) => {
fs.writeFile(`${$HOME}/.rosrc`, data, (err) => {
  if (err) console.log(err);
});
});
	}}
	if(fs.existsSync(`${$HOME}/.rosrc`)){
		let tex = rovel.text.red.bold("\nThe configuration File exists. Therefore, closing the installation.");
		spinner.text = tex;
		spinner.fail();
		process.exit(0);
}
setTimeout(() => {
	spinner.color = 'red';
	spinner.text = 'Loading Configuration';
	spinner.spinner = 'bounce'
	loadconfig()
}, 3000);
setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Saving Configuration';
	spinner.spinner = 'bounce'
}, 6000);
setTimeout(() => {
	spinner.text = "Saved Configuration!";
	spinner.succeed();
}, 9000);
}

setTimeout(() => {
	console.log(rovel.text.green.bold("\nCompleted installing Rovel OS successfully ✓\nPlease run \"rovelos-login\" to start Rovel OS.\nThanks from Rovel Team for installing Rovel OS!"));
}, 10000);

