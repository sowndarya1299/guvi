const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var z=[];
  var count=0;
  z=data.split("");
  for(var i=0;i<=z.length;i++)
    for(var j=i+1;j<z.length;j++)
        if(z[i]==z[j])
          count=count+1;
if(count>0)       
  console.log("yes");
else
  console.log("no");      
});
