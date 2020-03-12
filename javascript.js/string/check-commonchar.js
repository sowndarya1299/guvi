const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var z=[];
  var count=0;
  z=data.split(" ");
  var a=[];
  a=z[0].split("");
  var b=[];
  b=z[1].split("");
  for(var i=0;i<=a.length;i++)
    for(j=0;j<=b.length;j++)
      if(a[i]==b[j])
        count++;
if(count>0)
  console.log("yes");
 else
    console.log("no");
});
