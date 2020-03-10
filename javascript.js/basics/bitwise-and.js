
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const n = [];
inp.on("line", (data) => {
n.push(data);
});
inp.on("close", () => {
  var a=n[0];
  var b=[];
  b=n.split(" ");
for(var i=1;i<b;i++)
	a = a & b[i];
console.log(a);
  });
