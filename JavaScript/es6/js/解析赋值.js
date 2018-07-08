//let ary = [12,23,34];

/*
es6之前
let a = ary[0],
    b = ary [1],
    c = ary[2];
 */

// let[a] = ary;
// let[,,c] = ary;
// console.log(a,c)
// let[a, ...b] = ary;
// console.log(a, b);let ary = [12]
// let [a,b =0] = ary;
// console.log(a, b);
// let ary = [12]
// let [a,b =0] = ary;
// console.log(a, b);

// let a = 12,
//     b=13;
//  [a,b] = [b,a];
// console.log(a, b);

let obj = {name:'xxx',age:'25'}
let {sex} =obj
console.log(sex)
let {age: ageAA} = obj
console.log(ageAA)
let {friend = 0} = obj;
console.log(friend);
console.log(obj)