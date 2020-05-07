const function1 = (a, callback) => {
  let b=[];
  for(var i=0;i<a.length;i++){
    b.push(callback(a[i]));
  }
  return b
}
const mapfun =(value)=>Math.sqrt(value);
fun1([2,4,9], mapfun) 

//output:[1.4142135623730951, 2, 3]
