mouseover: 鼠标滑到元素上
mouseenter: 鼠标进入元素里面

+ 区别

    - mouseover存在事件冒泡传播机制，而mouseenter浏览器把它的事件冒泡机制阻止了

    - 鼠标从父元素进入子元素

    -> mouseover:先触父元素的mouseout（因为鼠标已经不在父元素上，mouseover本意是鼠标在元素上才算触发），在触发子元素的mouseover（由于冒泡传播机制导致父元素的mouseover也被重新触发）

    -> mouseenter: 进入，从大盒子进入到小盒子，没有触发大盒子的mouseleave事件，但是也触发了小盒子的mouseenter，浏览器阻止了它的冒泡传播，所以大盒子的mouseenter不会被触发
