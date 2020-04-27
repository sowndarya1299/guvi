const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var a=userInput[0].split("");
    var c=a.length;
    if(c>=2)
     console.log("Saturated");
    else
     console.log("Unsaturated");
});
