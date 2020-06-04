//2.4. Return all the prime numbers in an arrayonymous function
var num=10;
var prime=function(num)//an
{
dot=[];
for(i=2;i<num;i++){var count=0;
for(j=1;j<=i;j++){
if(i%j==0){count=count+1;}}
if(count==2){
dot.push(i);}}
console.log(dot.join(" "));//it generates a prime number
}
prime(num);
