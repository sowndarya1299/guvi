

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  	circumference = 2 * 3.14159 * data
  	console.log(circumference.toFixed(2));

});
