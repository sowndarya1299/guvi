const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const n = [];
inp.on("line", (data) => {
n.push(data);
});
inp.on("close", () => {
  var count = 0;
  var a=[];
  var b =[];
  a=n[0].split(" ");
  b=n[1].split(" ");
  for(var i=0;i<b.length;i++)
  {
    for(var j=i+1;j<b.length;j++)
    {
      if(parseInt(i)+parseInt(j)==parseInt(a[1]))
         {
         count=count+1;
         }
    }
  }
  if(count>0)
    console.log("yes");
  else
    console.log("no");
});
