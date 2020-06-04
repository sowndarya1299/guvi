var str=["malayalam","mam","animal","madam"]
var palindrom
palindrom = function () {var palindromes=str.filter(function(z){
      var b=z.split('').reverse().join('') 
if(z==b){
          console.log(z)
      }}) 
};
palindrom()
