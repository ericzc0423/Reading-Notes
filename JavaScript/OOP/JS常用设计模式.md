## **面向对象**

> + `单例模式(Singleton Pattern)`

  1. 表现形式

    ```javascript
    var obj ={
        xxx:xxx;
        yyy:yyy;
        ....
        }
    ```

   `在单例设计模式中，obj不仅仅是对象名，也被称为"命令空间（name space）"，把描述事务的属性存放到命名空间中，多个命名空间是独立分开的、互不冲突`

  2. 作用
   - 把描述同一件事件的属性和特征进行"分组、归类"（存储在同一堆内存空间中），因此避免了全局变量的之间的冲突和污染

    ```javascript
     var pattern1 = {name:'xxx'};
     var pattern2 = {name:'xxx'};
    ```

  3. 单例设计模式命名的由来
   - 每一个命名空间都是JS中object这个内置基类的实例，而实例之间是相互独立互不干扰的，所以我们称它为"单例：单独的实例"

> + `高级单例模式`

  1. 表现形式

  ``` javascript
  var nameSpace = (function(){
        var n = 12;
        function fn(){
            ....
        }

        return {
            fn: fn
        }
  })();
  ```
  2. 在给命名空间赋值的时候，不是直接赋值一个对象，而是先执行匿名函数，形成一个私有作用域（不销毁的栈内存），在AA中创建一个堆内存，把堆内存地址赋值给命令空间

  3. 优点： 我们完全可以在AA中创建很多内容（变量OR函数），哪些需要供外面调取使用的，我们暴露到返回的对象中(模块化实现的一种思想)

> + 工厂模式(Factory Pattern) `项目用处不大`

  1. 把实现相同功能代码进行"封装"，以此来实现"批量生产"（后期）想要实现这个功能，我们只需要执行函数即可
  2. 表现形式
  ```javascript
  function createPerson(name,age) {
      var obj={}
      obj.name = name;
      obj.age =age;
      return obj;
  }

  var p1 = createPerson('xxx',25)
  var p2 = createPerson('zzz',30)
  console.log(p1.name);

  console.log(p2.name);
  ```
  3.优点： "低耦合高内聚"，减少页面中冗余代码，提高代码的重复使用率

> + 构造函数模式(Constructor)