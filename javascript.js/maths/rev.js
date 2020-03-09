const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var s=data.split("");
  var a=s.reverse();
  var b=a.join("");
  console.log(b)
});
