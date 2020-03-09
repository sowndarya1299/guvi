
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var a=[];
  var x=a[0];
  var y=a[1];
  var z=a[2];
  var b =parseInt(x) * parseInt(y) * parseInt(z)
  var c = (2*parseInt(x)*parseInt(y))+(2*parseInt(x)*parseInt(z))+(2*parseInt(z)*parseInt(y))
  var d=[];
  d.push(b);
  d.push(c);
  console.log(d)
});
