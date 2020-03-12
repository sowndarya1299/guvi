const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var t=data;
  var a=[];
  a=data.split("");
  var b=a.reverse();
  var c=b.join('')
  console.log(c);
  if(t==c)
	console.log("yes");
  else
    console.log("no");
});
