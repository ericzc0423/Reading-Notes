/*
作意数求和，不管函数执行的时候，传递多少个实参值进来，都可以求和
形参有局性：我们需要具体的知道用户执行的时候传递实参数量、顺序等，才可以使用形参变量定义对应的入口

arguments: 函数内置的实参集合（内置：函数天生就存在，不管是否设置了形参或者实参，ARGUMENTS都有，始终存在）
 */
//
// function f() {
//     console.log(arguments.length);
//     /*
//     ARG是一个类数组（不是数组，不能直接使用数组的方法
//     即使设置形参变量，开参该是什么值还是什么值，但是arg使用存储是"所有"传递进来的实参，所以它被称为"实参集合"
//    { '0': 10, '1': 20 }
//
//      */
// }
// f();


/*
把ARG中存储的实参值依次遍历，每遍历一个都是累加起来，最后实现任意数求各

 */
function sum() {
    var total = null;
    for (var i=0; i<arguments.length; i++){
        var item = arguments[i]
        total += item;
    }

    return total; //把total返回

}
/*
箭头函数
 */

let sum = (...arg) => eval(arg.filter(item => !isNaN(item).join('+'));

console.log(sum(100,120,500,1000));