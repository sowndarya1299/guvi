const function1 = (a, callback) => {
  for(var i=0;i<a.length;i++){
    if(callback(a[i]))
      {
        return true
      }
  }
  return false
}
const somefun =(value)=>value%3==1
function1([2,3,5,8,12], somefun) 

