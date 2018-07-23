#coding=utf-8
class TestStaticMethod:
    def foo(self):
        print('calling static method foo(self)')
        foo = staticmethod(foo)

class TestClassMethod:
    def foo(cls):
        print("calling class method foo(self)")
        print(cls.__name__)

    foo = classmethod(foo)


tsm = TestStaticMethod()
TestStaticMethod.foo(staticmethod)