# Abstraction in bridge pattern
class Vehicle:
    def __init__(self, work_shop1, work_shop2):
        self.work_shop1 = work_shop1
        self.work_shop2 = work_shop2

    def manufacture(self):
        pass

# Refine abstraction 1 in bridge pattern
class Car(Vehicle):
    def __init__(self, work_shop1, work_shop2):
        super().__init__(work_shop1, work_shop2)

    def manufacture(self):
        print("Car ", end="")
        self.work_shop1.work()
        self.work_shop2.work()

# Refine abstraction 2 in bridge pattern
class Bike(Vehicle):
    def __init__(self, work_shop1, work_shop2):
        super().__init__(work_shop1, work_shop2)

    def manufacture(self):
        print("Bike ", end="")
        self.work_shop1.work()
        self.work_shop2.work()

# Implementer for bridge pattern
class Workshop:
    def work(self):
        pass

# Concrete implementation 1 for bridge pattern
class Produce(Workshop):
    def work(self):
        print("Produced", end="")

# Concrete implementation 2 for bridge pattern
class Assemble(Workshop):
    def work(self):
        print(" And Assembled.", end="")

# Demonstration of bridge design pattern
if __name__ == "__main__":
    vehicle1 = Car(Produce(), Assemble())
    vehicle1.manufacture()
    print("")
    vehicle2 = Bike(Produce(), Assemble())
    vehicle2.manufacture()
