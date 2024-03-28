// Prototype interface
class Prototype {
  clone() {
    // This method should be implemented by concrete prototypes
    throw new Error("Method 'clone' must be implemented.");
  }
}

// Concrete prototype
class ConcretePrototype extends Prototype {
  constructor(value) {
    super();
    this.value = value;
  }

  // Public getter for accessing the private value
  getValue() {
    return this.value;
  }

  // Public setter for modifying the private value
  setValue(value) {
    this.value = value;
  }

  clone() {
    // Create a new instance of ConcretePrototype with the same value
    return new ConcretePrototype(this.value);
  }
}

// Client
// Create a prototype object
const prototype = new ConcretePrototype(10);

// Clone the prototype to create a new object
const clone1 = prototype.clone();
console.log("Clone 1 value:", clone1.getValue()); // Output: Clone 1 value: 10

// Modify the cloned object
clone1.setValue(20); // Using the setter method to modify the value
console.log("Clone 1 modified value:", clone1.getValue()); // Output: Clone 1 modified value: 20

// Clone the prototype again to create another object
const clone2 = prototype.clone();
console.log("Clone 2 value:", clone2.getValue()); // Output: Clone 2 value: 10
