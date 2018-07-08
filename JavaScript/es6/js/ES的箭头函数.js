// let fn = () =>{
//
// };
// fn()
// let fn1 =(x) =>{
//     console.log(x);
// }
// fn1(10)
// let fn = x =>{
//     console.log(x);
//
// }
// fn(20)
//
// let  fn = x => y => x+y;
//
// let fn2 = (...arg) =>{
//     console.log(arguments);//报错，arguments is not defined
//     console.log(arg); //=> 可以使用剩余运算来替代，而且ARG是一个数组
// }
// fn(10,20,30,40)


let obj = {
    fn: (function () {
        return function () {
            console.log(this);
        }

    })
}
obj.fn.call(window)