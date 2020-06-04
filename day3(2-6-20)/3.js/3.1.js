//3.1. if the give number is even
function myfun(num,even){
    if(num%2 == 0){
        even()}}//even function is call back
    function myfun1(){
        console.log("hello");//callback function to print hello
    }myfun(8,myfun1);//function call
