
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
/*
var xhr = new XMLHttpRequest(); //=>创建AJAX实例


let productData = null;

xhr.open('GET','JSON/test.txt',false); //=>打开请求地址,false:同步，true:异步
xhr.onreadystatechange = () =>{
    if (xhr.readyState === 4 && xhr.status ===200 ){
        productData = xhr.responseText;
    }
};
xhr.send(null);
//console.log(productData);

let list = document.getElementById('list')

let str = ``;
for (let i = 0; i < productData.length; i++) {
    const productDatum = productData[i];
    str += `<li> <p>test</p></li>`
}
*/
var xhr = new XMLHttpRequest();
xhr.send(null);

let list = document.getElementById('list')
let str = ``
data = {MemTotal:         595732,
    MemFree:           73880,
    MemAvailable:     144844,
    Buffers:           57208,
    Cached:           106604,
    SwapCached:            0,
    Active:           325328
}
let {MemTotal,
    MemFree,
    MemAvailable,
    Buffers,
    Cached

} = data
console.log(MemTotal, MemFree, MemAvailable, Buffers, Cached);


// language=HTML
str += `<li MemTotal="${MemTotal}" 
                    MemFree="${MemFree}" 
                    MemAvailable="${MemAvailable}"></li>`;

listBox.innerHTML = str;