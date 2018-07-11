A标签的默认行为

> 1. 超链接：点击A标签可以实现页面跳转
> 2. 锚点定位： 通过HASH值定位到当前页面指定ID元素的位置

- 真实项目中，我们想用A标签做一个普通的按钮（优势：它的hover样式是兼容所有浏览器的），此时就要把这前提到两个默认行为阴止掉

```
<div class="box" id="box"> </div>
<script src="js/1.js"></script>
基于HASH定位
```
阻止A标签的默认行为
//=> 在HTML中阻止
<a href='javascript:;'> </a>