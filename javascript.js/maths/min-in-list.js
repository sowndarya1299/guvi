const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var z=[];
  z=data.split(" ");
  console.log(Math.min.apply(null,z));
});
