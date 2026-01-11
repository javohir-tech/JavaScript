class A:

    def __init__(self):
        self.a = "Salom"
        self.b = "Hello"

    @classmethod
    def function(cls):
        c = cls()
        c.d = "Dunyo"
        c.e = "World"

        return c


class B(A):
    pass


result = B.function()
print(type(result))
print(result.a)
print(result.d)