function f() {
    var n = 10;
    this.m = 100;
}
f.property.aa = function () {
    console.log('aa');

};

f.bb = function () {
    console.log('bb');
    ;
}

/*
普通函数执行
 */
f();

/*
普通函数
f(); this.m => window.m 有一个私有变量m,和原型及属性bb没有关第
 */


/*
构造函数执行
 */
var f1 =new f; //this:=>f1
console.log(f1.n) //=>undefined n是私有变量和实例没有关系
console.log(f1.m); //=>100 实例的私有属性
console.log(f1.bb); //undefined; bb是把f当做一个普通的对象设置的属性而已，和实例没有关系


//普通对象
f.bb()

//JQ
~function () {
    function jQuery() {
        return [JQ实例]

    }
    jQuery.prototype.animate = function(){};
    jQuery.ajax = function)_{};
    window.jQuery = window.$ = jQuery;

}();
$().ajax();//调不了
$().animate() //这样可以调取
$.ajax(); //直接的对象键值对操作
$.animate()//对象上没有animate这个属性，这个属性和实例相关的原型上

//this.call
Function.prototype.call= function () {
    let param1 = arguments[0],
        paramOther = []; =>把ARG中除第一个以外的实参获取到
    //=>this:fn当前要操作的函数（函数类的第一个实例）
    /*
    把fn中的THIS关键字修改为PARAM1 => 把THIS(call中）的this关键字修改为param1
    把fn执行，把paramaOther传递给fn
     */
    this(paramOther) => fn(paramOther)
}
fn.call(name:'xxx')
