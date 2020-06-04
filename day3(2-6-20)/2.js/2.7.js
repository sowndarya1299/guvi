var num=[1,2,3,3,5,7,6,6]
var dup=function(num){
    var res=[...new Set(num)];
    console.log(res);}
dup(num);
