
// let ary = [12,23,34]
// let [...arg] = ary //=> ary.slice(0)
//
// function f(context,...arg) {
//     //获取传递值中的第一个和剩余
//     console.log(context,arg);
// }
// let obj = {};
// f(obj,10,20,30);
//
// let aryMax = [12,23,34];
// Math.max(...aryMax)
let ary1 = [12,23]
let newAry = [ ...ary1, 100]

console.log(ary1, newAry)
 let obj = {name:'eric',age:20};
let newObj={...obj, sex:0}