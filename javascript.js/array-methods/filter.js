const function1 = (a, callback) => {
  let b=[];
  for(var i=0;i<a.length;i++){
    if(callback(a[i]))
      {
        b.push(a[i]);
      }
  }
  return b
}
const filfun =(value)=>value%2==0
function1([1,2,3,4,5,6,7], filfun) 

//output:[2,4,6]
