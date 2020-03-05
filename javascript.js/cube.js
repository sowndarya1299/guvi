const readline = require('readline')
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  cube = data **3
	console.log(cube)
});
