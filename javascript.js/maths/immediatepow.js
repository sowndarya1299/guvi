const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var num=0;
  num=data*2;
  console.log(num)
});
