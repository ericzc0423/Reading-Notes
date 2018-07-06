// function f() {
//
// }
// var a = new f();
// console.log(a)
//



function f(name,age) {
    var n = 10;
    this.name=name;
    this.age = age+n;

}
f();
/*
普通函数执行：
1.形成一个私有作用域
2.形参赋值
3.变量提升
4.代码执行
5.栈内存释放问题
 */
var f1 = new f()
/*
构造函数执行
1.向普通函数执行一样，形成一个私有作用域（栈内存）
    私有变量:
    -形参赋值
    -变量提升


 */
