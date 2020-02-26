# sum of all numbers in array
var a =[1,2,3,4,5,6,7,8,9,10]
var sum=a.reduce(function(acc,cv,ind){
  return acc+cv;
});
console.log(sum)

# sum of odd numbers
var a = [1,2,3,4,5,6,7,8,9,10]
var sum =a.reduce(function(acc,cv,ind){
if(cv%!=0){
  return acc+cv;}
  return acc
});
console.log(sum)

#find method
const finditem=a.find((item)=>{
  return item.name==='India"})
console.log(finditem)

#filter method to print the capital less then 5
const cap=a.filter((item)=>{
  return(iten.capital).length<=5})
console.log(finditem)

#map function
const cap=a.map((item)=>{
  return(iten.name).toUpperCase()})
console.log(cap)
