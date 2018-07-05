var str ='http://test.exmaple.com/stu/?lx=1&name=AA&sex=m#123'
var indexASK = str.indexOf('?')
    indexWell =str.indexOf('#');
if (indexWell > -1){
    str=str.substring(indexASK+1,indexWell);

}else{
    str=str.substr(indexASK+1);

}
//console.log(str);
var ary = str.split('&'),
    obj={};
//console.log(ary);
for (var i =0; i < ary.length; i++){
    var item = ary[i],
        itemAry = item.split('=')
   // console.log(itemAry);
    var key = itemAry[0],
        value = itemAry[1];
    obj[key]= value
}
console.log(obj);
