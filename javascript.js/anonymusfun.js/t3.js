//sum of all numbers using IIFE function

var a = [1,2,3,4,5,6,7,8,9];

(function() {
    sum = 0
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    console.log(sum);
})();

//sum of all numbers using anonymous function

var b = function(a) {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
b(arr);
