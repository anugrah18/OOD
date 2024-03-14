// Leaf: Represents individual components
var Leaf = /** @class */ (function () {
    function Leaf(name, price) {
        this.name = name;
        this.price = price;
    }
    Leaf.prototype.get_price = function () {
        return this.price;
    };
    Leaf.prototype.display = function () {
        console.log("".concat(this.name, " : $").concat(this.price));
    };
    return Leaf;
}());
// Composite: Represents composite components
var Composite = /** @class */ (function () {
    function Composite(name) {
        this.name = name;
        this.children = [];
    }
    Composite.prototype.add = function (component) {
        this.children.push(component);
    };
    Composite.prototype.remove = function (component) {
        var index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    };
    Composite.prototype.get_price = function () {
        var total_price = 0;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            total_price += child.get_price();
        }
        return total_price;
    };
    Composite.prototype.display = function () {
        console.log("".concat(this.name, ":"));
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.display();
        }
    };
    return Composite;
}());
// Client code
var cpu = new Leaf("CPU", 300);
var ram = new Leaf("RAM", 100);
var gpu = new Leaf("GPU", 250);
var motherboard = new Composite("Motherboard");
motherboard.add(cpu);
motherboard.add(ram);
motherboard.add(gpu);
var keyboard = new Leaf("Keyboard", 20);
var mouse = new Leaf("Mouse", 15);
var peripherals = new Composite("Peripherals");
peripherals.add(keyboard);
peripherals.add(mouse);
var computer_system = new Composite("Computer System");
computer_system.add(motherboard);
computer_system.add(peripherals);
computer_system.display();
var total_price = computer_system.get_price();
console.log("Total price of the computer system: $".concat(total_price));
