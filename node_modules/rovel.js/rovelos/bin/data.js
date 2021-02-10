const $HOME = require('os').homedir();
var isWin = process.platform === "win32";
function $PWD() {
	return process.env.PWD;
}
module.exports={$HOME, isWin, $PWD};
