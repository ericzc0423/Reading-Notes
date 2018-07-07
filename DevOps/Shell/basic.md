- vi/vim SSH .vimrc
- 命令基础
- Linux正则表达式及三剑客(grep,awk,sed)
- 常见Linux网络服务 crond,nfs,rsync,inotify,lamp,sersync,ssh,etc

## **Shell脚本在运维工作中的作用地位**
- Shell脚本很擅长处理文本类型的数据的，而linux一切皆文件

## Shell种类

- Bourne shell
    + sh ksh bash sh
- C shell
    + csh tcsh

**查看系统的Shell**
```
cat /etc/shells
EZ:Reading-Notes ericchang$ cat /etc/shells
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```
- ### `test`

**测试文件是否存在**
```javascript
 [ -f eric ] && echo 1 || echo 0
0
```