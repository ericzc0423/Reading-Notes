### JS盒子模型

**提供一些属性和方法用来当前盒子样式的**

- clientwidth/clientHeight

        1.当前盒子可视区域的宽度和高度
        2. 可视区域： 内容宽高+padding
        3. clientWidth = width+padding(Left/Right)
           clientHeight = height+padding(Top/Bottom)


        4.和内容是否溢出及我们是否设置了overflow:hidden没有关系


    ```javascript
    //=>获取当前页面一屏幕的宽度（或者是为了兼容所有浏览器）
    document.docementElement.clientwidth||document.body.clientWidth

    //=>获取当前页面一屏幕的高度
    //document.documentElement.clientHeight||document.body.clientHeight
    ```
    `**想要盒子水平和垂直居中**`

    `基于CSS`
    `````CSS
    //=>使用定位：需要知道盒子的具体高度
    .box {
        position: absolute
        top: 50%
        left:50
        margin: -50px 0 0 -100px
        width: 200px
        height: 100px
        backgroud: red
    }

    //=>使用定位，不需盒子的具体宽高
    .box {
        position: abolute;
        top: 0 ;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 200px;
        height: 100px;
        backgroud: red;

    }
    //=>使用CSS3的flex伸缩盒模型
    html{
        height: 100%
    }
    body {
        display: flex;
        height: 100%;
        flex-flow: row, wrap;
        align-items: center;
        justify-content: center;
    }
    .box {
        width: 200px;
        height: 100px;
        backgrou: red
    }
    ```
    ```javascript
    box.style.top = (winH - boxH)/2
    stye.left = (winW-boxW)/2

    ```

- clientTop/clietLeft

        1 只有top和left，没有right和bottom两个属性
        2 clientTop:盒子上边框的高度
        3 clientLeft:盒子的左边框宽度
        获取的结果其实就是border-width值
        4 通过JS盒子模型属性获取的结果是不带单位的，而且只能是整数（它会自动是四舍五入）
    ```javascript
       .box{
        border:10.8
       }
        box.clientLeft => 11
    ```

- offsetWidth/offsetHeight

        1 在clientWidth和clientHeight的基础上加上盒子的边框即可
        2 和内容是否溢出没关系
        3 真实项目中如果想获取一个盒子的宽度和高度，我们一般用offWidth而不是clientWidth，border也算是当前盒子的一部分

- scrollWidth/scrollHeight

    + 没有内容溢出

             1. 获取的结果和clientWidth/clientHeight是一样的

    + 有内容溢出

            真实内容的宽度或者高度（包括溢出的内容），再加左/上 padding的值
            有内容溢出的情况下，我们通过scrollWidth或者scrollheight获取的结果是一个约等于值
               - 有内容溢出，每个浏览器由于对行高或者文字的演染不一样，回去的结果也是不一样的
               - 是否设置 overflow:hidden对最后获取的结果也有影响

        ```javascript
        //=>获取当前页面的真实高度（包含溢出的内容）
        document.docuementElement.scrollHeight|| document.body.scrollHeight
        ```