#!/usr/bin/env node

const rovel = require("rovel.js");
const {$HOME, isWin} = require("./data.js");
const config = require($HOME+"/.rovelos.json");
console.log(rovel.text.red("Logging out..."));
setTimeout(function(){
	console.log(rovel.text.red.bold(`Bye ${config.username}`));
},2000);

