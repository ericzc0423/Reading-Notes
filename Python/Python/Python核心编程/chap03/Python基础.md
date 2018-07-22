# Python基本语法

## 语句和语法

  + 基本规则和特殊字符：

        # 表示注释
        \n 换行
        \ 继续上一行
        ； 将两个语句连接在一行中
        ： 代码块的头和体分开
        语句(代码块)用缩进块的方式体现
        不同的缩进学度分陋不同的代码块
        python文件以模块的形式组织

   + 注释

   + 继续

        #check conditions

            if(weather_is_hot === 1) and \
                (shark_warning == 0):
                    send_goto_beach_mesg_to_paper()

        #三引号字符串

            print ''' hi there, this is a long message for you
            that goes over multiple lines..
            thanks kind of fun! it is like a day on the beach!'''

        # 给一些变量赋值

             go_surf, get_a_tan_while, boat_size, toll_money = (1,
             'windsuring', 40.0, -2.00)

   + 多个语句构成的代码组（：）

        缩进相同一组语句构成的一个代码块，称之为`代码组`，if while def和class等复合语句，首行以关键字开始，以冒号（：）结束


   + 代码组由不同的缩进分隔

        同一代码组的代码必须严格左对齐
        缩进推荐使用4个空格宽度
        没有缩进的代码块是最高层次的，称为脚本的`主体(main)`

   + 模块


   + 变量赋值

        - 赋值操作符

              = 是主要的赋值操作符
              anInt = -12
        `赋值不是直接将一个值赋给一个变量` 在Python中，对象是通过引用传递的。

        - 增量赋值

              +=  -=  *=  /= %= **= &= ^= |=

        - 多重赋值

                x = y = z = 1

        - 多元赋值

                (x,y,z)=(1,2,'a string')
   + 标识符

        - 第一个字符必须是字母或下划线
        - 剩下的字答可以是字母、数字或下划线
        - 大小写敏感
        `标识符不能以数字开头，除了下划线，其它的符号都不允许使用`

        - 关键字

                Keyword可以查看

        - 内建(built-in)

                是__builtins__模块的成员，由解释器自动导入。把它们看成适用在任何一级Python代码的全局变量

        - 专用下划线标识符

            python用下线作为变量前缀和后缀指定的特殊变量

                _xxx 不用'from module import *'导入
                _xxx_ 系统定义名字
                _xxx  类中私有变量

        - 基本风格指南

            + 注释
            + 文档
                __doc__
            + Python风格指南

                import this
                python.org/dev/peps/pep-007

        - 模块结构和布局

                #/usr/bin/env python (1)起始行
                *this is a test module* （2）模块文档（文档字符串）
                import sys          (3) 模块导入
                import os
                debug = True        (4)全局变量定义
                class FooClass(object): (5) 类定义
                        "Foo Class"
                        pass
                def test():             (6)函数定义
                    "test function"  我们

                if __name__='__main__':  (7)主程序
                     test()


        - 在主程序中写测试代码

  - 内存管理

        变量无须事先声明
        变量无须指定类型
        程序员不用关内存管理
        变量名会被回收
        del语句能直接释放资源

       + 变量定义
       + 动态类型
       + 内存分配
       + 引用计数
            增加引用计数
            减少引用计数
            del语句
            del obj1, obj2[,....objN]

       + 垃圾收集
  - 相关模块和开发工具

        Python Style Guide PEP8
        Python Quick Reference Guide
        Python FAQ
        pdb(调试器）
        logging(记录器）
        profile cProfile hosthot
        logging五个日志级别




