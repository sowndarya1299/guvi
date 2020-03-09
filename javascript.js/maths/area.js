#area
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var z=[];
  z=data.split(" ");
  var a=z[0];
  var b=z[1];
  var x=parseFloat(a)*parseFloat(b);
  console.log(x.toFixed(5));
});
