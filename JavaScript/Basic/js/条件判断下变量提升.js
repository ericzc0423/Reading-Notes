/*
在当前作用域下，不管条件是否成立都要进行变量提升
带var还是只声明
带function的在老版本浏览器渲染机制下，声明+定义都处理，但是为了迎合ES6中的块级作用域，新版浏览器对于函数（在条件判断中的函数），不管条件是否成立，都只是先声明，没有定义，类似于var
 */

/*


console.log(a);
if(1==2){
    var a = 12
}
console.log(a);

*/

/*
变量提升
var a 在全局作用域声明的全局变量也相当于给window设lfhgb一个window.a=undefined
 */

/*
console.log(a)//undefined
if('a' in window) {
    var a = 100;
}
console.log(a); //100
*/

/*
变量提升： 无

 */


// f = function () {return true;} //window.f = ...(TRUE)
// g = function () {return false;} //window.d = ...(FALSE)
// ~function () {
//     /*
//     变量提升：
//     function g; // => g是私有变量
//      */
//   if (g() && [] == ![]){ //=> TypeErr: g is not a function(此时的g是undifined)
//       f = function () {return false;} //把全局中f修改， window.f = ...(false)
//       function g() {return true;}
//   }
// }();
// console.log(f())  //false
// console.log(g())  //false


if (1 === 1){
    f()
    function f() {
        console.log('OK');
    }
}
f()