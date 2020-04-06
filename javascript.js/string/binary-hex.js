const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var hex = parseInt(data, 2).toString(16);
  console.log(hex)
});
