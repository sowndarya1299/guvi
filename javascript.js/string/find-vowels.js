const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var a=[];
  var count=0;
  a=data.split("");
  for(var i=0;i<a.length;i++)
    if(a[i]=="a" || a[i]=="e" || a[i]=="i" || a[i]=="o" || a[i]=="u" || a[i]=="A" || a[i]=="E" || a[i]=="I" || a[i]=="O" || a[i]=="U")
        count=count+1;
if(count>0)
    console.log("yes");
else
     console.log("no");
});
