const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var N=parseInt(m[0]);
    var c=[];
    var d=[];
    for(var j=1;j<m.length;j++){
        var b=m[j].split("");
        for(var i=0;i<b.length;i++){
                if(b[i]==c[i]){
                    d.push(b[i]);
                }
        }
        if(j==1){
        c=b;}
        else{
            c=d;
        }
        d=[];
    }
    console.log(c.join(""));
});
