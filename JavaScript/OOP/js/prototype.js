function f() {
    var n =100;
    this.AA = function () {
        console.log('AA【私有属性】');
        
    }
    this.BB = function () {
        this.BB = function(){
        console.log('BB【私有属性】');
        }
    }
}
f.prototype.AA = function () {
    console.log('AA【公有属性】');
}

var f1 = new f;
var f2 = new f;

console.log(f1.n);