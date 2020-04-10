const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
	userInput.push(data);
});
inp.on("close", () => {
	var d=userInput[0].split(" ");
	var a=parseInt(d[0]),b=parseInt(d[1]);
    var c=0;
for(var i=a;i<=b;i++)
 {
if(i>1)
{
    var not=1;
      for(var j=2;j<=i;j++)
      {
        if(i%j==0 && j!=i)
           not=0
      }
      if(not==1)
     c=c+1
    }
}
console.log(c);
      
     });
