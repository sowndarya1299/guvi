const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  if(data%4 == 0)
    console.log("YES");
  else
    console.log("NO");
});
