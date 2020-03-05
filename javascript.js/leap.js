const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  if(parseInt(data)%4==0 || parseInt(data)%400==0 && parseInt(data)%100!=0)
	console.log("Y");
  else
    console.log("N");
});
