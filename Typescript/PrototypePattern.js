"use strict";
exports.__esModule = true;
// Concrete prototype
var ConcretePrototype = /** @class */ (function () {
    function ConcretePrototype(value) {
        this.value = value;
    }
    // Public getter for accessing the private value
    ConcretePrototype.prototype.getValue = function () {
        return this.value;
    };
    // Public setter for modifying the private value
    ConcretePrototype.prototype.setValue = function (value) {
        this.value = value;
    };
    ConcretePrototype.prototype.clone = function () {
        // Create a new instance of ConcretePrototype with the same value
        return new ConcretePrototype(this.value);
    };
    return ConcretePrototype;
}());
// Client
// Create a prototype object
var prototype = new ConcretePrototype(10);
// Clone the prototype to create a new object
var clone1 = prototype.clone();
console.log("Clone 1 value:", clone1.getValue()); // Output: Clone 1 value: 10
// Modify the cloned object
clone1.setValue(20); // Using the setter method to modify the value
console.log("Clone 1 modified value:", clone1.getValue()); // Output: Clone 1 modified value: 20
// Clone the prototype again to create another object
var clone2 = prototype.clone();
console.log("Clone 2 value:", clone2.getValue()); // Output: Clone 2 value: 10
