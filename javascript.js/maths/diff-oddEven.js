const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
 var z=[];
 z=data.split(" ");
 var a=z[0];
 var b=z[1]; 
 var diff = a - b
 if(parseInt(diff)%2 == 0)
   console.log("even");
 else
   console.log("odd");
});
