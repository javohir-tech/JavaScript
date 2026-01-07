class A:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c


class B(A):
    def __init__(self , *args ,**kwargs):
        super().__init__(*args , **kwargs)
        self.y = 10


b = B(1, 2, 3)
print(b.a)
print(b.c)
print(b.b)
print(b.y)
