const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var hex = data.split("");
  var a=hex.reverse();
  var b=a.join("");
  console.log(b)
});
