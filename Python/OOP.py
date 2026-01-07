class A :
    def __init__(self) :
        print("A init")
        
class B(A) :
    def __init__(self):
        super(B , self).__init__()
        print('B init ')
        
        
b = B()