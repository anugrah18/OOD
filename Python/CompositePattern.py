# Component Interface
class Component:
    def get_price(self) -> float:
        pass

    def display(self):
        pass

# Leaf
class Leaf(Component):
    def __init__(self, name:str, price:float):
        self.name = name
        self.price = price

    def get_price(self) -> float:
        return self.price

    def display(self):
        print(f"{self.name}: ${self.price}")


# Composite: Represents composite components
class Composite(Component):
    def __init__(self,name:str):
        self.name = name
        self.children = []

    def add(self,component:Component):
        self.children.append(component)

    def remove(self,component:Component):
        self.children.remove(component)

    def get_price(self) -> float:
        total_price = 0
        for child in self.children:
            total_price += child.get_price()
        return total_price

    def display(self):
        print(f"{self.name}:")
        for child in self.children:
            child.display()

# Client code
if __name__ == "__main__":
    # Leaf components: individual components with their prices
    cpu = Leaf("CPU", 300)
    ram = Leaf("RAM", 100)
    gpu = Leaf("GPU", 250)

    # Composite component: motherboard containing CPU, RAM, and GPU
    motherboard = Composite("Motherboard")
    motherboard.add(cpu)
    motherboard.add(ram)
    motherboard.add(gpu)

    # Composite component: peripheral devices
    peripherals = Composite("Peripherals")
    keyboard = Leaf("Keyboard", 20)
    mouse = Leaf("Mouse", 15)
    peripherals.add(keyboard)
    peripherals.add(mouse)

    # Composite component: the computer system with motherboard and peripherals
    computer_system = Composite("Computer System")
    computer_system.add(motherboard)
    computer_system.add(peripherals)

    # Display prices of all components in the computer system
    computer_system.display()
    # Calculate the total price of the computer system
    total_price = computer_system.get_price()
    print(f"Total price of the computer system: ${total_price}")