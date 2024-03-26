import copy

# Prototype interface
class Prototype:
    def clone(self):
        pass

# Concrete prototype
class ConcretePrototype(Prototype):
    def __init__(self, value):
        self.value = value

    def clone(self):
        return copy.deepcopy(self)

# Client
if __name__ == "__main__":
    # Create a prototype object
    prototype = ConcretePrototype(10)

    # Clone the prototype to create a new object
    clone1 = prototype.clone()
    print("Clone 1 value:", clone1.value)  # Output: Clone 1 value: 10

    # Modify the cloned object
    clone1.value = 20
    print("Clone 1 modified value:", clone1.value)  # Output: Clone 1 modified value: 20

    # Clone the prototype again to create another object
    clone2 = prototype.clone()
    print("Clone 2 value:", clone2.value)  # Output: Clone 2 value: 10
