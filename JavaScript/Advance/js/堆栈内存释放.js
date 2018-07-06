var i = 1;
function fn(i) {
    return function (n) {
        console.log(n + (++i));
    }
}
var f = fn(2);
f(3);
fn(5)(6);
fn(7)(8);
f(4)

/*
var f = fn(2)=>先把fn执行（传递实参2）把fn执行的返回结果（return后的值）返回给f
f()把返回的结果执行
fn(2)()

 */