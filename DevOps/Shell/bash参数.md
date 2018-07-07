- 特殊变量
    + $# , $1, $2 传参
    + $0 文件名及路径
    + $$ 当前shell PID
    + $? 上一条指令的返回值
    + $@ 返回多个字符串
    + $* 所有位置参数的内容：调用本bash 所有的参数

- read （键盘输入）
    +p prompt 设置提示信息
    -t timeout 设置输入等街时间
    ```bash
    ericchang$ read -p "please input a num: " -t 10 num
    please input a num: 18
    ericchang$ echo $num
    18
    EZ:t
    ```


