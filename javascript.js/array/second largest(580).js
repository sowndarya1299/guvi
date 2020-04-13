const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const m = [];
inp.on("line",(data) => {
m.push(data);
});
inp.on("close",() => {
    a=m[0];
    b=m[1].split(" ");
    c=b.sort();
    e=c.reverse();
    d=e.join("");
    console.log(d);
});
