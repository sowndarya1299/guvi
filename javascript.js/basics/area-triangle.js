const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  a = [];
  a=data.split(" ")
  var area = (parseInt(a[0]) * parseInt(a[1]))/2;
  console.log(area);
});
