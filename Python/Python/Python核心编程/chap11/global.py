#coding=utf-8
a = 100
def foo():
    global a
    a = 200
    print(a)
foo()
print(a)