//4.1 odd numbers in a array
var number=[1,5,7,6,4,2,3,56]
var odd1
odd1 =()=> {var odd=number.filter(function(a){
      return a%2!==0
  })
console.log(odd)
};
odd1()


//4.2 convert all the strings to title caps in a string array
var string=["cat","dog","rat","elephant"]
var capital;
capital =  ()=> {
  var newarray=string.map(function(a){
      var first=a[0].toUpperCase()+a.slice(1);
      console.log(first);})};
capital()


//4.3. Sum of all numbers in an array 
var numbers=[3,2,54,64,6]
var sum
sum =  ()=>{var tot=numbers.reduce(function(a,b){
      return a+b  })
console.log(tot)};
sum()


//4.4. Return all the prime numbers in an array 
var numbers=[1,2,43,4,5,75,6];
var prime=()=>{
 var result=numbers.filter(function(a){
 var z=0;
 if(a>1){      
  for(var i=2;i<=a;i++){           
  if(a%i==0   &&    a!=i){              
   z=1}    
  }if(z==0)       
 { return a;        
 }}
 })
console.log(result); };
prime()


//4.5 Return all the palindromes in an array 
var str=["malayalam","madam","animal","mam"]
var palindrom
palindrom =  ()=> {var palindromes=str.filter(function(a){
      var b=a.split('').reverse().join('') if(a==b){
          console.log(a);} }) };
palindrom()
