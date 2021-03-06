/*

    1.基于SPLIT按照空格把字符串拆成两部份
    2. 左边以split按照/来拆分
    3. 右边以split按照：来拆分
    4. 把需要的信息拼接在一起

function addZero(val) {
    return val<10?val='0'+val:val;

}

var str = '2018-4-4 16:25:08';
console.log(str.split(' '));
var ary = str.split(' ');
    aryLeft = ary[0].split('-');
    aryRight= ary[1].split(':');
var month = addZero(aryLeft[1]);
    day = addZero(aryLeft[2]);
    hour=addZero(aryRight[0]);
    min=addZero(aryRight[1]);
    sec=addZero(aryRight[2]);


var result=month+day+hour+'/'+min+'/'+sec

console.log(result)

*/
  
/*
~function (pro){

    pro.formatTime= function (template) {
        template = template || '{0}年{1}月{5}日 {3}时{4}分{5}秒';
        var ary = this.match(/\d+/g);
        template = template.replace(/\{(\d+)\}/g,function(){
        var n = arguments[1],
                val = ary[n] ||'0'
        val < 10 ? val = '0'+val : null;
        return val
    });
        return template
    }

}(String.prototype)

var str = '2018-4-4 15:2:10'
console.log(str.formatTime());
*/

/*基于Exp的时间格式
 */
/* v.1
let str = "2018/4/30 17:50:23",
    ary = str.split(/(?:\/| |:)/g);
//console.log(ary);
let [, month, days, hours, minutes,secs ] =ary,
    result  = `${month}-${days} ${hours}:${minutes}:${secs}`;
console.log(result);
*/

let str = "2018/4/30 17:50:23";
let ary = str.match(/\d+/g).map(item =>{
    return item < 10?'0'+item:item;
});
//console.log(ary)
let template = '{0}年{1}月{2}日 {3}时{4}分{5}秒'
template=template.replace(/\{(\d)\}/g,(...arg)=>{
    let  [,index]=arg;
    return ary[arg[1]]

});
console.log(template);


    
    