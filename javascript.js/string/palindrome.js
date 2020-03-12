
const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
var t=data;
a=[];
a=data.split("");
var m=a.reverse();
var n=m.join("");
if(t==n)
console.log("yes")
else
console.log("no")
})
