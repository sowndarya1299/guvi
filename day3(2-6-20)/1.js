problem1
//Write a function called “addFive”.Given a number, “addFive” returns 5 added to that number.
Input:
     addFive(5);
     addFive(0);
     addFive(-5);
var num = 10;
function addFive(num) { 
num=num+5;
  console.log (num);
}
var result = addFive(num);


problem2
//Write a function called “getOpposite”.Given a number, return its opposite
Input:
     getOpposite(5);
     getOpposite(0);
     getOpposite(-5);
     getOpposite(“5a”);
     getOpposite(5.5);
Output:
     -5
      0
      5
      -1
     -1
var num = 5;
function getOpposite(num) {
 if(typeof(num)=="number"){
 return 5 * -1;
}
else{
return -1;
}}
var result = getOpposite(num)
console.log(result);


problem3
//Fill in your code that takes an number minutes and converts it to seconds.
//Examples
    toSeconds(5) ➞ 300
    toSeconds(3) ➞ 180
    toSeconds(2) ➞ 120
var min = 5;
function toSeconds(min) {
return min*60
}
var secs = toSeconds(min)
console.log(secs);



problem4
//Create a function that takes a string and returns it as an integer.
//Examples
     toInteger(“6”) ➞ 6
     toInteger(“1000”) ➞ 1000
     toInteger(“12”) ➞ 12
var mystr = "5";
function toInteger(mystr) {
return parseInt(mystr)
}
var myint = toInteger(mystr)
console.log(mystr);


problem5
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
//Examples
    nextNumber(0) ➞ 1
    nextNumber(9) ➞ 10
    nextNumber(-3) ➞ -2
var myint = 0;
function nextNumber(myint) {
return myint++;
}
var myNextint = nextNumber(myint)
console.log(myNextint);



problem6
//Create a function that takes an array and returns the first element.
//Examples
   getFirstElement([1, 2, 3]) ➞ 1
   getFirstElement([80, 5, 100]) ➞ 80
   getFirstElement([-500, 0, 50]) ➞ -500
var arr = [1, 2, 3];
function getFirstElement(arr) {
return arr[0]
}


problem7
//Convert Hours into Seconds
//Write a function that converts hours into seconds.
//Examples
    hourToSeconds(2) ➞ 7200
    hourToSeconds(10) ➞ 36000
    hourToSeconds(24) ➞ 86400
var arr = [1, 2, 3];
function hourToSeconds(arr) {
var newarr=arr.map(x => x * 60);
return newarr.join(",");
}
var data = hourToSeconds(arr)
console.log(data);


//problem8
//Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.
//Examples
    findPerimeter(6, 7) ➞ 26
    findPerimeter(20, 10) ➞ 60
    findPerimeter(2, 9) ➞ 22
function findPerimeter(num1,num2) {
return 2(num1+num2);
}
var peri = findPerimeter(6,7)
console.log(peri);



//problem9
//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
//Examples
     lessThan100(22, 15) ➞ true
     // 22 + 15 = 37
     lessThan100(83, 34) ➞ false
     // 83 + 34 = 117
function lessThan100(num1,num2) {
if((num1+num2)<100){
     return true}
else{
     return false
}
}
var res = lessThan100(22,15)
console.log(res);


//problem10
//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
//Examples
    remainder(1, 3) ➞ 1
    remainder(3, 4) ➞ 3
     remainder(-9, 45) ➞ -9
     remainder(5, 5) ➞ 0
function remainder(num1,num2) {
return num1%num2
}
var res = remainder(1,3)
console.log(res);


//problem11
//Old macdonald had a farm:
//MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
     turkey = 2 legs
     horse = 4 legs
     pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//Examples
     CountAnimals(2, 3, 5) ➞ 36
     CountAnimals(1, 2, 3) ➞ 22
     CountAnimals(5, 2, 8) ➞ 50
function CountAnimals(tur,horse,pigs) {
return (tur*2)+(horse*4)+(pigs*4)
}
var legs = CountAnimals(2,3,5)
console.log(legs);




//problem12
//Frames Per Second
//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
//Examples
     frames(1, 1) ➞ 60
     frames(10, 1) ➞ 600
     frames(10, 25) ➞ 15000
function frames(num1,num2) {
return (num1*60*num2)

}
var fps = frames(1,2)
console.log(fps);



//problem13
//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
//Examples
    divisibleByFive(5) ➞ true
    divisibleByFive(-55) ➞ true
    divisibleByFive(37) ➞ false
function divisibleByFive(num1) {
if(num1%5==0)
{
return true
}
else
{
     return false
}
}
var divisible = divisibleByFive(5)
console.log(divisible);


//problem14
//Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.
Input:
    isEven(12);
    isEven(0);
    isEven(11);
    isEven(“11h”);
Output:
    true
    true
    false
   -1
function isEven(num){
 if(typeof(num)=="number"){
  if(num%2===0){
       return true
  }
  else{
       return false
  }
  }
 else
 {
      return -1
 }
}
var even = isEven(5)
console.log(even);


//problem15
//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
Input:
    areBothOdd(1, 3);
    areBothOdd(1, 4);
    areBothOdd(2, 3);
    areBothOdd(0, 0);
Output:
    true
    flase
    flase
    flase
function areBothOdd(num1, num2){
 if(num1%2!==0 && num2%2!==0){
 return true
 }
 else
 {
      return false
 }
}
var odd=areBothOdd(1,3)
console.log(odd);



//problem16
//Write a function called “getFullName”.Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
Input:
    getFullName(“GUVI”, “GEEK”);
    getFullName(“GUVI”, );
    getFullName(, “GEEK”);
    getFullName(“”, “”);
Output:
    “GUVI GEEK”
    “GUVI”
    “GEEK”
     “”
function getFullName(firstName, lastName){
 return firstName+lastName
}
var name=getFullName("", "GEEK");
console.log(name);



//problem17
//Write a function called “getLengthOfWord”.Given a word, “getLengthOfWord” returns the length of the given word.
Input:
    getLengthOfWord(“GUVI”);
    getLengthOfWord(“”);
    getLengthOfWord();
    getLengthOfWord(9);
Output:
    4
    0
    -1
    -1
function getLengthOfWord(word1){
if(typeof(word1)=="String"){ return word1.length
 }
 else{
 return -1
 }
 }
 var res=getLengthOfWord(word1)
 console.log(res);



//problem18
//Write a function called “isSameLength”.Given two words, “isSameLength” returns whether the given words have the same length.
Input:
   isSameLength(“GUVI”, “GEEK”);
Output:
    true
function isSameLength(word1, word2){
 var str1=word1.length;
 var str2=word2.length;
 if(str1==str2){ return true
 }
 else {
 return false
 }
}
var result= isSameLength(word1, word2)
console.log(result);



//problem18
//Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2)
{
 var sum1=x1+x2;
 var sum2=y1+y2;
 return(sum1-sum2);
}
console.log(getDistance(100, 100, 400, 300));



//problem19
//Write a function called “getNthElement”.Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
Input:
  getNthElement([1, 3, 5], 1);
Output:
   3
function getNthElement(array,n){

for(i=0;i<array.length;i++)
 {
 if(array[i]==n)
 {
 console.log(array[n]);
 }
 
 else if(array.length==0)
 {
 console.log("undefined");
 }
}}



//problem20
//Write a function called “getLastElement”.Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
Input:
   getLastElement([1, 2, 3, 4]);
Output:
    4
function getLastElement(array){
 if(array.length===0){
 	return -1
 }
 else{
 	return array[array.length-1]
 }
}
 console.log(getLastElement([1, 2, 3, 4]));



//Problem21
//Write a function called “getProperty”.Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
//Input:getProperty(obj,’mykey’);var obj = { mykey: “value” };
//output:value;
var obj = {
 mykey: "value"
};
function getProperty(obj, key) {
      
      console.log(obj[key])
 
}
getProperty(obj,"mykey")



//problem22
//Write a function called “addProperty”.Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.
//var obj = {
//mykey: “value”,
//myProperty: true
//}
var obj = {
 mykey: "value"
};
function addProperty(obj, key){
     obj.key="hi";
     console.log(obj)
}
addProperty(obj,"my")



//problem23
//Write a function called “removeProperty”.Given an object and a key, “removeProperty” removes the given key from the given object.
//Input:removeProperty(obj, “name”);
var obj = {
 mykey: "value"
};
function removeProperty(obj, key){

         delete obj[key]
         console.log(obj)
}
removeProperty(obj,"mykey")


////Problem24
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    var p=0,n=0;
    var newarray=arr.map(function(a){
        if(a>=0){
            p+=1
        }
        else{
            n+=1
        }
    })
    arr=[];
    arr.push(p);
    arr.push(n);
    return arr;}
console.log(ar2(arr));


//Problem25
//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar)
{
    var p=[]
 var array=ar.map(function(a){
     if(a>0)
     {
         p.push(a);
     }
 })
 return p;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);



//Problem26
//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
//Input:powersOfTwo(0)
//n = 1 -> 2⁰, 2¹ -> [1,2]
function powersOfTwo(n){
  
 var a=[];
 for(var i=0;i<n;i++)
 {
    
     a.push(Math.pow(2,i))
 }
 return a;
}
console.log(powersOfTwo(2))




////Problem27
//Find the maximum number in an array of numbers
function findMax(ar)
{
   return Math.max(...ar);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);

//problem28
//Print the first 100 prime numbers
console.log(printPrimes(100));
var primes = [2];
//function to print prime numbers
function printPrimes(n)
{
for (var i=3;i<n;i+=2){
    var isPrime = true;
    for (var j = 0;j<primes.length;j++){
        if (i%primes[j]===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){primes.push(i)
        
    }
}
    return primes

}

//Problem29
//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   return s.split("").reverse().join("");
}



//Problem:30
//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 for(let el of ar2)
 {
 result.push(el);
 }
 return result;
}
console.log("max",max);

//Problem31
//Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

function sumCSV(s)
{   
    var sum=0;
    var n=s.toString().split(",")
    var arr=n.map(function(a){
       
        sum+=parseInt(a)
    })
    return sum;
  
}
