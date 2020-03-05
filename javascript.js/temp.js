const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
    fahrenheit = (data * 1.8) + 32
  console.log(fahrenheit.toFixed(2))
});
