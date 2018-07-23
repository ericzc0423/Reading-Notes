#coding=utf-8
j,k = 1,2
def proc1():
    j,k = 3, 4
    print("J==%d and K ==%d" % (j,k))


def proc2():
    j = 6
    proc1()
    print("J==%d and K ==%d" % (j,k))

proc1()
proc2()
k = 7
proc1()
print("J==%d and K ==%d" % (j, k))
j = 8
proc2()
print("J==%d and K ==%d" % (j, k))
