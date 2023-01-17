from abc import ABC, abstractmethod

class Shape(ABC):
    def __init__(self):
       print('new shape created .....')
    @abstractmethod
    def draw(self):
        pass
    @abstractmethod
    def area(self,name):
        pass


class Rectangle(Shape):
    def draw(self):
        print('drawing a <==>')
    def __init__(self, a, b):
        super().__init__()
        self.__a=a
        self.__b=b
    @property
    def a(self):
        return self.__a
    @a.setter
    def a(self,val):
        self.__a=val

    @property
    def b(self):
        return self.__b
    @b.setter
    def b(self,value):
        if value > 0:
            self.__b=value
        else:
            self.__b=0

    @property
    def area(self):
        return self.__a*self.__b

class Circle(Shape):
    def __init__(self,r):
        super().__init__()
        self.__r=r
    @property
    def r(self):
        return self.__r
    @r.setter
    def r(self,val):
        self.__r=val
    def draw(self):
        print('drawing a <==>')
    def area(self,name):
        pass




r1= Rectangle(4,5)
c1 = Circle(5)

c1.area('name')