const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var a =[]
  for(var i=1;i<=3;i++)
   a = data*i
   console.log(a)
});
