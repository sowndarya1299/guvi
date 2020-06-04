var num1=[1,2,4,87,66];var num2=[7,98,34,8,9];
var medianOfArray=function(num1,num2){
if(num1.length==num2.length){
var res=num1.concat(num2)
var first=res[res.length/2];
var second=res[res.length/2-1];
 var median=(first+second)/2
 console.log(parseInt(median));}}
medianOfArray(num1,num2)
