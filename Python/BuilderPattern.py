# Base class representing a generic car
class Car:
    def __init__(self):
        self.make = None
        self.model = None
        self.color = None

    def __str__(self):
        return f"Make: {self.make}, Model: {self.model}, Color: {self.color}"


# Abstract builder class for constructing a car
class CarBuilder:
    def __init__(self):
        self.car = Car()

    def set_make(self, make):
        self.car.make = make
        return self

    def set_model(self, model):
        self.car.model = model
        return self

    def set_color(self, color):
        self.car.color = color
        return self

    def build(self):
        return self.car


# Concrete builder class for constructing a manual transmission car
class ManualCarBuilder(CarBuilder):
    def __init__(self):
        super().__init__()
        self.car.transmission = "Manual"  # Set default transmission

    def set_gear(self, gear):
        self.car.gear = gear
        return self


# Concrete builder class for constructing an automatic transmission car
class AutomaticCarBuilder(CarBuilder):
    def __init__(self):
        super().__init__()
        self.car.transmission = "Automatic"  # Set default transmission

    def set_drive_mode(self, mode):
        self.car.drive_mode = mode
        return self


# Concrete builder class for constructing an electric car
class ElectricCarBuilder(CarBuilder):
    def __init__(self):
        super().__init__()
        self.car.engine_type = "Electric"  # Set default engine type

    def set_battery_capacity(self, capacity):
        self.car.battery_capacity = capacity
        return self


# Director class responsible for orchestrating the construction process
class CarDirector:
    def __init__(self, builder):
        self.builder = builder

    def construct_car(self, make, model, color):
        return self.builder.set_make(make)\
                           .set_model(model)\
                           .set_color(color)\
                           .build()


# Usage
if __name__ == "__main__":
    # Create instances of different builders
    manual_builder = ManualCarBuilder()
    automatic_builder = AutomaticCarBuilder()
    electric_builder = ElectricCarBuilder()

    # Construct manual car
    director = CarDirector(manual_builder)
    manual_car = director.construct_car("Toyota", "Corolla", "Red")

    # Construct automatic car
    director = CarDirector(automatic_builder)
    automatic_car = director.construct_car("Honda", "Civic", "Blue")

    # Construct electric car
    director = CarDirector(electric_builder)
    electric_car = director.construct_car("Tesla", "Model S", "White")

    # Print details of constructed cars
    print(manual_car)
    print(automatic_car)
    print(electric_car)
