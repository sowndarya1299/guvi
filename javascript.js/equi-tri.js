const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  Area = (Math.sqrt(3)/ 4)*(data * data);
  console.log(Area.toFixed(2))
});
