const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var z=[];
  z=data.split(" ");
  var t=z[0];
      z[0]=z[1];
      z[1]=t;
       
  console.log(z.join(" "));
});
