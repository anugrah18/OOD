# Product interface
class Automobile:
    def start(self):
        pass

    def stop(self):
        pass

# Concrete Products
class Car(Automobile):
    def __init__(self, transmission):
        self.transmission = transmission

    def start(self):
        return f"Car with {self.transmission} transmission started"

    def stop(self):
        return f"Car with {self.transmission} transmission stopped"

# Concrete Products
class Motorcycle(Automobile):
    def start(self):
        return "Motorcycle started"

    def stop(self):
        return "Motorcycle stopped"

# Concrete Products
class Truck(Automobile):
    def __init__(self, transmission):
        self.transmission = transmission

    def start(self):
        return f"Truck with {self.transmission} transmission started"

    def stop(self):
        return f"Truck with {self.transmission} transmission stopped"

# Concrete Products
class ManualCar(Car):
    def __init__(self):
        super().__init__("manual")

    def start(self):
        return "Manual " + super().start()

    def stop (self):
        return "Manual " + super().stop()


# Concrete Products
class AutomaticCar(Car):
    def __init__(self):
        super().__init__("automatic")

    def start(self):
        return "Automatic " + super().start()

    def stop (self):
        return "Automatic " + super().stop()

# Concrete Products
class ManualTruck(Truck):
    def __init__(self):
        super().__init__("manual")

    def start(self):
        return "Manual " + super().start()

    def stop (self):
        return "Manual " + super().stop()

# Concrete Products
class AutomaticTruck(Truck):
    def __init__(self):
        super().__init__("automatic")

    def start(self):
        return "Automatic " + super().start()

    def stop(self):
        return "Automatic " + super().stop()

# Creator interface with the factory method
class AutomobileFactory:
    def create_automobile(self, transmission=None):
        pass

# Concrete Creators
class CarFactory(AutomobileFactory):
    def create_automobile(self, transmission=None):
        if transmission and transmission.lower() not in ["manual", "automatic"]:
            raise ValueError("Invalid transmission type")
        return ManualCar() if transmission == "manual" else AutomaticCar()

class TruckFactory(AutomobileFactory):
    def create_automobile(self, transmission=None):
        if transmission and transmission.lower() not in ["manual", "automatic"]:
            raise ValueError("Invalid transmission type")
        return ManualTruck() if transmission == "manual" else AutomaticTruck()

class MotorcycleFactory(AutomobileFactory):
    def create_automobile(self, transmission=None):
        return Motorcycle()

# Client code
def client_code(factory, transmission=None):
    automobile = factory.create_automobile(transmission)
    print(automobile.start())
    print(automobile.stop())

# Usage
car_factory = CarFactory()
truck_factory = TruckFactory()
motorcycle_factory = MotorcycleFactory()

print("Client is using a manual car:")
client_code(car_factory, "manual")

print("\nClient is using an automatic car:")
client_code(car_factory, "automatic")

print("\nClient is using a manual truck:")
client_code(truck_factory, "manual")

print("\nClient is using an automatic truck:")
client_code(truck_factory, "automatic")

print("\nClient is using a motorcycle:")
client_code(motorcycle_factory)
