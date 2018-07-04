//深拷贝
var obj = {name:{name:'hello'}}
var newobj = Object.assign({},obj)
obj.name.name='eric'
console.log(newobj)

//浅拷贝
var obj = {name:"eric"}
var arr = [obj,2, 3 ]
var newArry = arr.slice(0)
console.log(newArry)
arr[0].name='hello'
console.log(newArry)