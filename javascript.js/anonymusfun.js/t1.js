//print all odd number using IIFE 
var a=[1,2,3,4,5,6,7,8,9];
(function(){
for(var i=0;i<a.length;i++){
if(a[i]%2 !=0){
console.log(a[i]);
}
}
})();
// print all odd number using anonymus fun
var odd=function(b){
for(var i=0;i<b.length;i++){
if(a[i]%2 !=0){
console.log(a[i]);
}
}
}
odd(a);
