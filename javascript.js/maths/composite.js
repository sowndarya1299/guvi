const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
if(parseInt(data) > 1)
    for(var i=2;i<data.length;i++)
        if (data%i==0)
            console.log("yes");
        else
            console.log("no");
});
