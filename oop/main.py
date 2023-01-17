class SuperHero:
    def __init__(self, name, sp, age, is_marvel):
        self.name = name
        self.sp = sp
        self.age = age
        self.is_marvel = is_marvel

    def super_power(self):
        print(f'woooooooaaahhh {self.sp}')

    def __str__(self):
        return f'SuperHero \nname: {self.name}\nsp: {self.sp} \n --------------------'

    def __eq__(self, other):
        return len(self.name) == len(other.name)

    def __gt__(self, other):
        return len(self.name) > len(other.name)

    def __sub__(self, other):
        return SuperHero(self.name+other.name, '',15,True)
    def __add__(self, other):
        return self.age-other.age

roiee = SuperHero('roiee', 'node master', 15, False)
adi = SuperHero(sp='sit with nadav', name='adi', is_marvel=True, age=199)
adi.super_power()
roiee.super_power()
shani = adi * roiee
print(adi)

