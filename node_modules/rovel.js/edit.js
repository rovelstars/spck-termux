const child_process = require('child_process')
var editor = 'vim';

var child = child_process.spawn(editor, ['index.js'], {
    stdio: 'inherit'
});

child.on('exit', function(e, code) {
    console.log("finished");
});