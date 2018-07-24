// var hero  = {
//     name: 'Rafaelo',
//     sayName: function () {
//         return this.name
//     }
// }
// console.log(hero.sayName());

// var name='eric123'
// function  Hero(name) {
//     this.occupation = 'nina';
//     this.name=name
// }
// var hero = new Hero();
// console.log(hero.occupation);;
// var h2 = new Hero('Eric');
// console.log(typeof(h2));
// console.log(h2.name);
// console.log(h2.constructor);
//


// function factory(name) {
//     return{
//         name:name
//     }
// }
// var o = factory('one')
// console.log(o.name);
// console.log(o.constructor());
//
// function C() {
//     this.a = 1
//
// }
// var c = new C();
// console.log(c.a);
//
// function C2() {
//     this.a={a:1};
//     return {b:2};
//
// }
// var c2 = new C2();
// console.log(c2.a);
// console.log(c2.b);


// var original = { howmany:1};
// var copy  = original;
// console.log(copy.howmany);
// copy.howmany=100
// console.log(copy.howmany);
// console.log(original.howmany);


var fido = { breed: 'dog'}
var benji = {breed:  'dog'}
console.log(fido == benji);
console.log(fido === benji);