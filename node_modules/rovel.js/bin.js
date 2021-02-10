#!/usr/bin/env node
const rovel = require("./index.js");
const pkg = require("./package.json");
let cli = rovel.cli;
const prog = cli('rovel');
prog.version(pkg.betabuild || pkg.version);
prog.command('exec <code>').describe('Execute nodejs code in terminal. rovel.js predefined as "rovel".').example('exec "console.log(\"hello\")"').action((code)=>{
	eval(code);
});

prog.command('http <file>').describe('A simple http server to serve html files directly from the terminal.').example('http index.html').example('http index.html 8080').action((file)=>{
	var fs = require('fs'),
    http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream(file).pipe(res)
});
server.listen(process.argv[4] || 3000);
console.warn(`HTTP-Server listening on ${process.argv[4] || 3000}`);
});

prog.command('https <file>').describe('A simple https server to serve html files directly from the terminal.').example('https index.html').example('https index.html 8080').action((file)=>{
        var fs = require('fs'),
    https = require('https');
const server = https.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream(file).pipe(res)
});
server.listen(process.argv[4] || 3000);
console.warn(`HTTPS-Server listening on ${process.argv[4] || 3000}`);
});

prog.parse(process.argv);
