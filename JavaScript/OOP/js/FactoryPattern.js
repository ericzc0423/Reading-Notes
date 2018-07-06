function createPerson(name,age) {
    var obj={}
    obj.name = name;
    obj.age =age;
    return obj;
}

var p1 = createPerson('xxx',25)
var p2 = createPerson('zzz',30)
console.log(p1.name);

console.log(p2.name);