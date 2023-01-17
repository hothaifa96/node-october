import math


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def calc_distance(self):
        distance = math.sqrt(self.x ** 2 + self.y ** 2)
        return distance

    def calc_a(self):
        a = self.y / self.x
        if self.x < 0 or self.y < 0:
            a = -a
        elif self.x == 0:
            return
        return a

    def __str__(self):
        return f'({self.x} , {self.y})'

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Point(self.x - other.x, self.y - other.y)

    def __gt__(self, other):
        return self.calc_distance() > other.calc_distance()

    def __lt__(self, other):
        return not self > other

    def __eq__(self, other):
        return self.calc_distance() == other.calc_distance()

p1= Point(2,3)
p3= Point(-2,3)
p2= Point(1,5)
print(p1==p3)


