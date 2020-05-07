const function1 = (a, callback) => {
  for(var i=0;i<a.length;i++){
    if(callback(a[i]))
      {
        return true
      }
  }
  return false
}
const somefun =(value)=>value%5==1
function1([6,21,56,71,96], somefun) 

