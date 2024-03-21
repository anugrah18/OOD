var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class representing a generic car
var Car = /** @class */ (function () {
    function Car() {
        this.make = null;
        this.model = null;
        this.color = null;
        this.transmission = null; // Transmission type
        this.batteryType = null; // Engine type
    }
    Car.prototype.toString = function () {
        return "Make: ".concat(this.make, ", Model: ").concat(this.model, ", Color: ").concat(this.color, ", Transmission: ").concat(this.transmission, ", Battery Type: ").concat(this.batteryType);
    };
    return Car;
}());
// Abstract builder class for constructing a car
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.car = new Car();
    }
    return CarBuilder;
}());
// Concrete builder class for constructing a manual transmission car
var ManualCarBuilder = /** @class */ (function (_super) {
    __extends(ManualCarBuilder, _super);
    function ManualCarBuilder() {
        var _this = _super.call(this) || this;
        _this.car.transmission = "Manual";
        return _this;
    }
    ManualCarBuilder.prototype.setMake = function (make) {
        this.car.make = make;
        return this;
    };
    ManualCarBuilder.prototype.setModel = function (model) {
        this.car.model = model;
        return this;
    };
    ManualCarBuilder.prototype.setColor = function (color) {
        this.car.color = color;
        return this;
    };
    ManualCarBuilder.prototype.build = function () {
        return this.car;
    };
    return ManualCarBuilder;
}(CarBuilder));
// Concrete builder class for constructing an automatic transmission car
var AutomaticCarBuilder = /** @class */ (function (_super) {
    __extends(AutomaticCarBuilder, _super);
    function AutomaticCarBuilder() {
        var _this = _super.call(this) || this;
        _this.car.transmission = "Automatic";
        return _this;
    }
    AutomaticCarBuilder.prototype.setMake = function (make) {
        this.car.make = make;
        return this;
    };
    AutomaticCarBuilder.prototype.setModel = function (model) {
        this.car.model = model;
        return this;
    };
    AutomaticCarBuilder.prototype.setColor = function (color) {
        this.car.color = color;
        return this;
    };
    AutomaticCarBuilder.prototype.build = function () {
        return this.car;
    };
    return AutomaticCarBuilder;
}(CarBuilder));
// Concrete builder class for constructing an electric car
var ElectricCarBuilder = /** @class */ (function (_super) {
    __extends(ElectricCarBuilder, _super);
    function ElectricCarBuilder() {
        var _this = _super.call(this) || this;
        _this.car.batteryType = "Electric";
        return _this;
    }
    ElectricCarBuilder.prototype.setMake = function (make) {
        this.car.make = make;
        return this;
    };
    ElectricCarBuilder.prototype.setModel = function (model) {
        this.car.model = model;
        return this;
    };
    ElectricCarBuilder.prototype.setColor = function (color) {
        this.car.color = color;
        return this;
    };
    ElectricCarBuilder.prototype.build = function () {
        return this.car;
    };
    return ElectricCarBuilder;
}(CarBuilder));
// Director class responsible for orchestrating the construction process
var CarDirector = /** @class */ (function () {
    function CarDirector(builder) {
        this.builder = builder;
    }
    CarDirector.prototype.constructCar = function (make, model, color) {
        return this.builder.setMake(make).setModel(model).setColor(color).build();
    };
    return CarDirector;
}());
// Usage
var manualBuilder = new ManualCarBuilder();
var automaticBuilder = new AutomaticCarBuilder();
var electricBuilder = new ElectricCarBuilder();
var director1 = new CarDirector(manualBuilder);
var manualCar = director1.constructCar("Toyota", "Corolla", "Red");
var director2 = new CarDirector(automaticBuilder);
var automaticCar = director2.constructCar("Honda", "Civic", "Blue");
var director3 = new CarDirector(electricBuilder);
var electricCar = director3.constructCar("Tesla", "Model S", "White");
console.log(manualCar.toString());
console.log(automaticCar.toString());
console.log(electricCar.toString());
