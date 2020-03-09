const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
var product = 1
while (data != 0)
        var dig=parseInt(data)%10;
        product = product*dig;
        data = data/10;
console.log(parseInt(product));
});
