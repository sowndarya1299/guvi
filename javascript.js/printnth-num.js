# print the nth number
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var sum=2;
  for(var i=4;i<8;i++)
  {
    sum=sum+i;
  }
  console.log(sum);
});
