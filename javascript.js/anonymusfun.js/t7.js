//remove duplicate from an array using IIFE function
var a = [1,2,3,45,5,95,1,2,76,9,10,5];

(function() {
    var output = [];
    count = 0;
    for (var i = a.length - 1; i >= 1; i--) {
        for (var k = i - 1; k >= 0; k--) {
            if (a[i] == a[k]) {
                break;
            } else if (k == 0) {
                output[count] = a[i];
                count += 1;
            }
        }
        output[count] = a[0];
    }
    for (i = output.length - 1; i >= 0; i--) {
        console.log(output[i]);
    }

})();

//remove duplicate from an array using anonymous function
var b = function(an) {
    var output = [];
    count = 0;
    for (var i = a.length - 1; i >= 1; i--) {
        for (var k = i - 1; k >= 0; k--) {
            if (arr[i] == a[k]) {
                break;
            } else if (k == 0) {
                output[count] = a[i];
                count += 1;
            }
        }
        output[count] = a[0];
    }
    for (i = output.length - 1; i >= 0; i--) {
        console.log(output[i]);
    }
}
b(a);
