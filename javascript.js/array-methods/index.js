const function1 = (a, callback) => {
  for(var i=0;i<a.length;i++){
    if(callback(a[i]))
      {
        return i
      }
  }
}
const indfun =(value)=>value==54
fun1([42,54,78,12,65], indfun) 

//output:1
