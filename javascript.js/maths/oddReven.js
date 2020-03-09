const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var z=[];
  z=data.split(" ");
  var a=z[0];
  var b=z[1];
  var sum=0;
  sum=parseInt(a)+parseInt(b);
  if(parseInt(sum)%2==0)
     console.log("even");
  else
  	 console.log("odd")
  
});
