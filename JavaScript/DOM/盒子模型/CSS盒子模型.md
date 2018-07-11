### CSS盒子模型

1. 传统的CSS盒子模型

+ width height：不是盒子的宽高，而是盒子中内容的宽度和高度
盒子宽度=width+padding(left/right)+boder(left/right)

2. CSS3新增的例子模型

```javascript
.box {
    box-sizing:boder-box
}
```
+ width和height不仅仅是内容的宽度，而是代表整个盒子的宽度（已经包含了padding和border)，以后修改padding或者border值，盒子大小是不变的，内容宽高会随着改变


