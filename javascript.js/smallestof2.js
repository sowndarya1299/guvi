const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
  var a = []
  a=userInput[0].split(" ")
  var fi = a[0],se=a[1]
  if(fi<se)
    console.log(fi);
  else
    console.log(se);
});
