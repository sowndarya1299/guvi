

const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
var a=[];
 a=data.split(" ");
 var p=a[0];
 var T=a[1];
 var r=a[2];
 var SI = (p*T*r)/100;
 console.log(SI.toFixed(2));
});
