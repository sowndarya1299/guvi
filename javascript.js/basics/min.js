const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const n = [];
inp.on("line", (data) => {
n.push(data);
});
inp.on("close", () => {
  var z=[];
  z=n[1].split(" ");
  var a = Math.min(z);
  console.log(a);
});
