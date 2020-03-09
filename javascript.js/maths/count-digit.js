
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
    var c=0;
    while(parseInt(data)!=0)
    {
        var dig=data%10;
        data=data/10;
        c=c+1;
    }
	console.log(c)
});
