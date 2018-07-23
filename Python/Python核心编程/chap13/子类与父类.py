#coding=utf-8
class Parent(object):
    def parentMethod(self):
        print("calling parent method")


class Child(Parent):
    def childMethod(self):
        super(Child,self)
        print("call child method")


p = Parent()
p.parentMethod()

c = Child()
c.childMethod()
c.parentMethod()



'''

'''
