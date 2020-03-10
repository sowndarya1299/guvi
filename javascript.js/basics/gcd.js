
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
 z = data.split();
 a = z[0];
 b = z[0];
while(i <= a and i <= b)
    if(a % i == 0 and b % i == 0)
        gcd = i
    i = i + 1
	console.log(gcd)

