// var a = 12;
// var b = 13;
// var c = 14;
// //全局作用域
//
// function f(a) {
//     /*
//     形参赋值
//     a = 12,
//     变量提升
//     var b
//     在私有作用域，私有变量
//         1。声明的变量（var/function)
//         2。形参也是私有变量
//         剩下的都不是自己的私有变量，都是基于作域链的机制向上查找
//      */
//     console.log(a,b,c);
//     var  b= a = c = 20;
//     console.log(a, b, c);
//
// }
//
// f(a)
// console.log(a, b, c);

var ary = [12,23];
function f(ary) {
    // ary 参数带进f()
    console.log(ary);
    ary[0] =100;
    ary = [100];
    ary[0] =0;
    console.log(ary);
}
f(ary);
console.log(ary);