const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var a = data.split(" ");
  var t;
  t=a[0];
  a[0]=a[1];
  a[1]=t;
	console.log(a.join(' '))
});
