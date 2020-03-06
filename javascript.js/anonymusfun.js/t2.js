//convert all strings to title cap using IIFE function

var arr = ["p", "q", "s", "t", "u"];

(function() {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
})();


//convert all strings to title cap using anonymous function

var b = function(a) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
}
b(arr);
