 
//return all prime numbers using IIFE function
var a = [2,3,4,5,6,7,11,33,45,27,23,13];

(function() {
    for (var i = 0; i < a.length; i++) {
        if (a[i] == 2) {
            console.log(2);
        }
        for (var k = 2; k < a[i]; k++) {
            if (k == a[i] - 1) {
                console.log(a[i]);
            } else if (a[i] % k == 0) {
                break;
            }
        }
    }
})();

//return all prime numbers using anonymous function
var b = function(an) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] == 2) {
            console.log(2);
        }
        for (var k = 2; k < a[i]; k++) {
            if (k == a[i] - 1) {
                console.log(a[i]);
            } else if (a[i] % k == 0) {
                break;
            }
        }
    }
}
b(a);
