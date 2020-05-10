const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const l=[]
inp.on("line",(data)=>{
  l.push(data);
});
inp.on("close",()=>{
  var a=l[0];
  var b=[];
  for(var i=1;i<l.length;i++){
      var c=l[i].split(" ")
      for(var j=0;j<c.length;j++){
          b.push(c[j])
      }
  }
  console.log(b.sort((a,b) => a-b).join(" "))
});
