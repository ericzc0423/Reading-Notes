> JQ的AJAX
```
$.ajax({
    url:'xxx.xxx',//=>请求的API地址
    method:'get',//=>请求方式GET/POST，在老版本中JQ中使用的是type,使用type和method实现的是相同效果
    dataType:'json' //=>datatype只是我们预设获取结果的类型,不会影响服务器返回（服务器端一般给我们返回都是JSON格式字符串），如果我们预设的是JSON，那么类库中把服务器返回的字符串转换为JSON对象，如果我们预设的是text(默认值)，我们把服务器获取的结果直接拿过来操作即可，我们预调的值还可以是xml等
    cache:false,//=>设置是否清除缓存，只对GET系列请求有作用，默认是TRUE不清缓存，手动设置为FALSE，JQ类库会在请求URL的末尾追加一个随机数清除结存
    data:null,//=>我们通过DATA可以把一些信息传递给服务器：GET系列请求会把DATA中的内容拼接在url末尾通过问号传参的方式传递给服务器，POST系列请求会把内容放在请求主体中传递给服务器：DATA的值可以设置为两种格式：字符串、对象，如果是字符串，设置的值是什么传递给服务就是什么，如果设的是对象，JQ会把对象变为xxxx=xxx&xxx=xxx这样的字符串传给服务器
    async:true, //=>设置同步或者异步，默认为异步
    success:function(result){
    //=>当AJAX请求成功（readyState == 4 & status是以2或者3开头的）
    //=> 请求成功后JQ会把传递的回调函数执行，并把获取的结果当做实参传给回调函数（result就是我闪从服务器端获取的结果）
    },
    error:function(msg){}//=>请求错误触发回调函数
    complate:function(){}//=>不管请求是错误还是正确都会触发回调函数（它是完成的意思）

    }
})
```