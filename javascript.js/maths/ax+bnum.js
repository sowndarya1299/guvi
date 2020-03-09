const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var z=[];
  z=data.split(" ");
  var a=z[0];
  var b=z[1];
  var x=z[2];
  var c=(parseInt(a)*parseInt(x))+parseInt(b);
  console.log(c)
});
