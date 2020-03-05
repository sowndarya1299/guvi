
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (month) => {
if(month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12)
  	console.log("31");
if(month == 2)
	console.log("28");
if(month == 4 or month == 6 or month == 9 or month == 11)
	console.log("30");
});

elif(month > 12):
	print("Error",end="")  
