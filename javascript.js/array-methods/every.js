const function1 = (a, callback) => {
var count=0;
  for(var i=0;i<a.length;i++){
    if(callback(a[i]))
      {
        count+=1;
      }
  }
  if(count==a.length){
    return true
  }
  else
    {
      return false
    }
}
const mapfun =(value)=>value>0
function1([10,20,30,40,50,60], mapfun) 
//output:false
