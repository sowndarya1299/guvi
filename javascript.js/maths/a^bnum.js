#power of a number
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var z=[];
  z=data.split(" ");
  var a=z[0];
  var b=z[1];
  var c=Math.pow(parseInt(a),parseInt(b));
	console.log(c)
});
