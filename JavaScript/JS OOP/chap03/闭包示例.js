// function f() {
//     var b = "b"
//     return function () {
//         return b;
//     }
// }
// var n = f()
// console.log(n());

// var n
// function f() {
//     var b = "b"
//     n = function () {
//         return b
//     }
//
// }
//
// console.log(f());
// console.log(n());
//
// function f(arg) {
//     var n = function () {
//         return arg
//     }
//     arg++
//     return n
// }
//
// var m = f(123)
// console.log(m());

// function f() {
//     var a = [];
//     var i;
//     for(i=0;i<3;i++){
//         a[i]=function() {
//             return i;
//
//         }
//     }
//     return a;
// }
//
// var a = f();
// console.log(a[0]());
// console.log(a[1]());

// var getValue(),setValue();
// (function () {
//     var secret = 0;
//     getValue = function () {
//         return secret;
//     };
//     setValue = function (v) {
//         secret = v;
//     }
//
// });
//
// console.log(getValue());;

function setup(x) {
    var i = 0
    return function () {
        return x[i++]
    }
}
var next = setup(['a','b','c'])
console.log(next());
console.log(next());
console.log(next());
console.log(next());