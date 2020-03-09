#minimum.js
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
  var a=n[0];
  z=n[1].split(" ");
  console.log(Math.min(z));
});
