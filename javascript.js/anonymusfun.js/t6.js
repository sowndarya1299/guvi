//return 2 sorted arrays of 2 sorted arrays using IIFE function
var arr1 = [1, 2, 3, 6, 8, 9, 10,];
var arr2 = [2, 4, 6, 8, 9, 12, 14];

(function() {
    if (arr1.length % 2 == 0) {
        var len = arr1.length / 2;
        console.log("median of first array is " + arr1[len - 1] + " " + arr1[len]);
        console.log("median of second array is " + arr2[len - 1] + " " + arr2[len]);
    } else {
        var len = Math.floor(arr1.length / 2);
        console.log("median of first array is " + arr1[len]);
        console.log("median of second array is " + arr2[len]);
    }

})();

//return 2 sorted arrays of 2 sorted arrays using anonymous function
var b = function(an) {
    if (arr.length % 2 == 0) {
        var len = arr.length / 2;
        console.log("median of first array is " + arr1[len - 1] + " " + arr1[len]);
        console.log("median of second array is " + arr2[len - 1] + " " + arr2[len]);
    } else {
        var len = Math.floor(arr1.length / 2);
        console.log("median of first array is " + arr1[len]);
        console.log("median of second array is " + arr2[len]);
    }
}
b(arr1);
