const child_process = require('child_process')

function execarg(app, args){
	args = args.split(" ");
var child = child_process.spawn(app, args, {
    stdio: 'inherit'
});

child.on('exit', function (e, code) {
});
}
function execapp(app){
	var child = child_process.spawn(app, {
	});
	child.on('exit', function (e, code) {
	});
}

module.exports ={execapp, execarg};
