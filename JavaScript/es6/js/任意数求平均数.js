/*
编写一个fn，实现任意数求平均数（去除最大数字中最大和最小，然后再计算平均数，保留小数点两位）
 */

// let fn = function () {
//     //=>arguments:是类数组（不能直接调取数组原型上的方法）
//     //先给arguments排序（不能直接使用sort方法），把排序后的值去掉首位、末位
//     //再把剩下的值求和，除以总长度，求出平均数即可
//
//     //把ARG类数组转换为数组ARY
//     // let ary = [];
//     // for (let i = 0; i<arguments.length; i++){
//     //     ary.push(arguments[i]);
//     //     }
//
//     //把内置的SLICE方法执行 Array.prototype.slice()
//
//     let ary = [].slice.call(arguments);// =>类数组借用数组原型的方法执行，实现相关的操作（借用slice实现把类数组转化为数组）
//
//     //数组ARY 排序，去除首位
//     ary.sort(function (a, b) {
//         return a - b;
//     });
//     ary.pop();
//     ary.shift();
//
//     //然后再求各，最后求平均数
//     //let total = 0
//     // for (let j = 0;j<ary.length; j++){
//     //     total += ary[j]
//     // }
//
//     return (eval(ary.join('+')) /ary.length).toFixed(2)
// };
//
// console.log(fn(3, 5, 7, 9, 20));

let fn = function (...ary) {
    ary.sort(function (a, b) {
        return a - b;
    });
    ary.pop();
    ary.shift();
    return (eval(ary.join('+')) /ary.length).toFixed(2)


};
console.log(fn(1, 2, 3, 5, 8, 20));