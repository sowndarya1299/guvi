function prime(a,check)
{
    return check(a)
}
function checkCondition(a)
{
    var p=0
  if(a>1)
     {
     for(var i=2;i<=a;i++)
    {
  if(a%i==0   &&    a!=i)
 { p=1 }}
 if(p==0){ return "prime";       
 }
 else{
     return "not prime"
 }}}
var res=prime(3,checkCondition)
console.log(res);
