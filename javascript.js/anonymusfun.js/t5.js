//return all palindromes in an array using IIFE function
var a = ["mom", 75, 3, 587, 77, "malayalam", "mam", 'mad'];

(function() {
    for (var k = 0; k < a.length; k++) {
        str = a[k].toString();
        if (str.length == 1) {
            console.log(str);
        }
        if (str.length % 2 == 0) {
            var L = str.length / 2;
        } else {
            var L = Math.floor(str.length / 2);
        }
        for (var i = 0; i < L; i++) {
            if (str[i] != str[str.length - i - 1]) {
                break;
            } else if (i == L - 1) {
                console.log(str);
            }
        }
    }
})();

//return all palindromes in an array using anonymous function
var b = function(an) {
    for (var k = 0; k < a.length; k++) {
        str = a[k].toString();
        if (str.length == 1) {
            console.log(str);
        }
        if (str.length % 2 == 0) {
            var L = str.length / 2;
        } else {
            var L = Math.floor(str.length / 2);
        }
        for (var i = 0; i < L; i++) {
            if (str[i] != str[str.length - i - 1]) {
                break;
            } else if (i == L - 1) {
                console.log(str);
            }
        }
    }
}
b(a);
