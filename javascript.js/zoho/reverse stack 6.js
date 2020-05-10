const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const n = [];
inp.on("line", (data) => {
n.push(data);
});
inp.on("close", () => {
	var str=n[0];
    console.log(str.split(/\s/).reverse().join(" "));
    
});


