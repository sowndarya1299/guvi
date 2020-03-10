const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var z=[];
  z=data.split(" ");
  var N=z[0];
  var K=z[1];
  var n=N*K;
  var sum = 0;
  var a=2;
for(var i=1;i<=N.length;i++)
    var n1=Math.pow(parseInt(i),parseInt(a));
    if (parseInt(n1) === parseInt(n))
        sum=sum+1;
if(sum>0)
    console.log("no");
else
    console.log("yes");
});
