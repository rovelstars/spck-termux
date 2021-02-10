#!/usr/bin/env node
const {cli, text, clear, execarg, execapp, $HOME} = require("../rjs/index.js");
const {exec} = require("shelljs");
const prog = cli('spck');
const os = require("os");
const fs = require("fs");
const $SPCK = os.homedir()+"/storage/shared/Android/data/io.spck/files";
prog.version('1.0.0');
prog.command("post").describe("Copy all the projects from termux to spck app.").action(()=>{
	exec("./post.sh");
});

prog.command("get").describe("Copy all the projects from spck app to termux.").action(()=>{
	exec("./get.sh");
});

prog.command("ls").describe("List all folders of spck app").action(()=>{
	fs.readdir($SPCK, function (err, files) {
    if (err) {
        return console.log('Unable to scan spck directory, is spck deleted or moved to SD card? ');
    }
		console.log(text.yellow("Spck Folder Contents:"));
    files.forEach(function (file) {
        console.log(text.green(file));
    });
});
});

prog.command("setup").describe("It checks the requirements and then installs spck on termux.").action(()=>{
	console.log(text.yellow('Starting setup...'));
	setTimeout(()=>{
		console.log(text.yellow("Checking Requirements..."));
	if(process.platform!="android"){
		console.log(text.red("The OS is not Android. Closing installation."));
		process.exit(0);
	}
		console.log(text.green("System is Android.\n"));
	}, 1000);
	setTimeout(()=>{
		console.log(text.yellow("Running Setup 1/3 - Checking Storage"));
		if(!fs.existsSync(os.homedir()+"/storage")){
			console.log(text.red("Termux has not setup storage. Please run \n\"termux-setup-storage\" and reply with a \"y\" to proceed installation. Termux may ask you are accessing files permission, please ACCEPT that dialog. And then again run this setup once you got the storage setup done."));
			process.exit(0);
		}
			console.log(text.green("Storage setup has been done.\n"));
	}, 3000);

	setTimeout(()=>{
		console.log(text.yellow("Running Setup 2/3 - Checking SPCK installation"));
		if(!fs.existsSync($SPCK)){
			console.log(text.red("Spck is not installed in the correct destination.\nPlease install SPCK editor (not pro version) and install in the internal storage, and not in SD card."));
			process.exit(0);
		}
			console.log(text.green("Spck is installed and successfully conntected."));
	}, 5000);
	
	setTimeout(()=>{
		console.log(text.yellow("Running Setup 3/3 - Installing required termux packages."));
		console.log(text.green("By that time, please go and install \"Termux:API\" from play store."));
		console.log(text.yellow("Download Starting in 3 secs."));
	}, 7000);
	setTimeout(()=>{
		console.log(text.yellow("Download Starting in 2 secs."));
	}, 8000);
	setTimeout(()=>{
		console.log(text.yellow("Download Starting in 1 sec."));
	}, 9000);
	setTimeout(()=>{
		//clear();
	}, 10000);
	setTimeout(()=>{
		console.log(text.green("Download Started!\nIf download is interrupted, please run \"spck setup\" again to reinstall packages. Don't worry, we will take care of installation, just go and install Termux:API from play store"));
	}, 10050);
	setTimeout(()=>{
		const tex = text.green("Installation finished!\nNow installing spck editor's lightweight OS. (2mb size)");
		const hmm = text.green('Setup Finished! Now type "spck -h" to list all our commands!');
		exec("chmod +x install.sh");
		exec("chmod +x get.sh");
		exec("chmod +x post.sh");
		exec("./install.sh");
	}, 11000);
});
		
prog.parse(process.argv);
