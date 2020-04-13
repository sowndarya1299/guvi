const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  count = 0;
  for(var i=1;i<=data;i++)
      {
    for(var j=i+1;j<=data;j++)
    {
      if(parseInt(i)!=parseInt(j))
      {
        count = count+1;
      }
    }
  }
     
	console.log(count)
});
