/*
变量提升
 var fn; =>只对等号左边进行变量提升，因此fn()无法执行，undefined,
 */

f()
//fn()//undefined is not a function


//匿名函数表达式
var fn = function () {
    console.log(1)
}

//普通函数
function f() {
    console.log(2)
}

f()
fn()


