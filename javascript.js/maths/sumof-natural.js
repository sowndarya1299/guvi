const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var sum=0;
while(parseInt(data) > 0)
    sum=parseInt(sum)+parseInt(data);
    data=data-1;
console.log(sum)

});
