const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
    var a=[];
    var sum=0;
    a=data.split("");
    for(var i=0;i<a.length;i++)
        sum=parseInt(sum)+parseInt(a[i]*a[i]);
    console.log(parseInt(sum));
});
