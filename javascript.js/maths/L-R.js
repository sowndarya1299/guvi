const readline = require('readline');


const inp = readline.createInterface({
  input: process.stdin
});
const a = [];
inp.on("line", (data) => {
a.push(data);
});
inp.on("close", () => {
  var n=a[0];
  var z=[];
  z=a[1].split(" ");
  var x=z[0];
  var y=z[1];
if((parseInt(n)>parseInt(x)) && (parseInt(n)<parseInt(y)))
	console.log("yes");
else
	console.log("no");
});
