#!/usr/bin/env node

const {compile} = require("./compile.js");
const rovel = require("../../index.js");
console.log(rovel.text.yellow.bold("Starting Compiling!"));

if(process.argv[2] == null || process.argv[2] == undefined){
	console.error(rovel.text.red.bold("No file given to compile it to javascript"));
	process.exit(0);
}
let files = process.argv.join(" ");
files = files.split("compile ");
files = files[1];
files = files.split(" ");
const fs = require("fs");
for(let file of files){
	var check = fs.statSync(file);
	if(check.isFile()){
		let rep = file.replace(".rs", ".js");
	//	rovel.rovelexec(`cp ${file} ${rep}`);
		compile(file).then(r=>{
			rovel.rovelexec("mkdir dist");
		fs.writeFile("./dist/"+rep, r, function(err){
			if(err){
				console.log(rovel.text.red.bold(err))
				process.exit(0);
			}
		})
		}).catch(e=>{
			if(e.includes("Won't compile")){
				return;
			}
			console.log(rovel.text.red.bold(e))
			process.exit(0);
		});

		console.log(rovel.text.green(`Compiling ${file} -> ${rep}`));
	}
	if(check.isDirectory()){
		const folder = file;
		fs.readdir(folder, (err, files) => {
			files.forEach(file => {
				let rep = file.replace(".rs", ".js");
			//	rovel.rovelexec(`mv ${file} ${rep}`);
				compile("./"+folder+"/"+file).then(r=>{
					rovel.rovelexec("mkdir "+folder+"/dist");
                fs.writeFile("./"+folder+"/dist/"+rep, r, function(err){
                 if(err){
                  console.log(rovel.text.red.bold(err))
			 process.exit(0);
                }
                })
                }).catch(e=>{
			if(e.includes("Won't compile")){
				return;
			}
			console.log(rovel.text.red.bold(e))
			process.exit(0);
		});
				console.log(rovel.text.yellow(`[folder: ${folder}]`)+rovel.text.green(`Compiling ${file} -> ${rep}`));
			})})}
}
