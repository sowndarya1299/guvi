const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var octal = parseInt(data, 2).toString(8);
  console.log(octal)
});
