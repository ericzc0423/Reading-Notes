var n =10;
function f() {
    var n = 20;
    function f1() {
        n++;
        console.log(n);
    }
    f1();
    return f1()
}

var x = f();
//x();
//x();
console.log(n);