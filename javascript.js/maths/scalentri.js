#scalen triangle
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var z=[];
  z=data.split(" ");
  var a=z[0];
  var b=z[1];
  var c=z[2];
if((parseInt(a)!=parseInt(b)) && (parseInt(b)!=parseInt(c)) && (parseInt(a)!=parseInt(c)))
    console.log("yes")
else
    console.log("no")
});
