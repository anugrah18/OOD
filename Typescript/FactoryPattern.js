"use strict";
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
exports.__esModule = true;
// Concrete Products
var Car = /** @class */ (function () {
    function Car(transmission) {
        this.transmission = transmission;
    }
    Car.prototype.start = function () {
        return "Car with ".concat(this.transmission, " transmission started");
    };
    Car.prototype.stop = function () {
        return "Car with ".concat(this.transmission, " transmission stopped");
    };
    return Car;
}());
// Concrete Products
var Motorcycle = /** @class */ (function () {
    function Motorcycle() {
    }
    Motorcycle.prototype.start = function () {
        return "Motorcycle started";
    };
    Motorcycle.prototype.stop = function () {
        return "Motorcycle stopped";
    };
    return Motorcycle;
}());
// Concrete Products
var Truck = /** @class */ (function () {
    function Truck(transmission) {
        this.transmission = transmission;
    }
    Truck.prototype.start = function () {
        return "Truck with ".concat(this.transmission, " transmission started");
    };
    Truck.prototype.stop = function () {
        return "Truck with ".concat(this.transmission, " transmission stopped");
    };
    return Truck;
}());
// Concrete Products
var ManualCar = /** @class */ (function (_super) {
    __extends(ManualCar, _super);
    function ManualCar() {
        return _super.call(this, "manual") || this;
    }
    ManualCar.prototype.start = function () {
        return "Manual " + _super.prototype.start.call(this);
    };
    ManualCar.prototype.stop = function () {
        return "Manual " + _super.prototype.stop.call(this);
    };
    return ManualCar;
}(Car));
// Concrete Products
var AutomaticCar = /** @class */ (function (_super) {
    __extends(AutomaticCar, _super);
    function AutomaticCar() {
        return _super.call(this, "automatic") || this;
    }
    AutomaticCar.prototype.start = function () {
        return "Automatic " + _super.prototype.start.call(this);
    };
    AutomaticCar.prototype.stop = function () {
        return "Automatic " + _super.prototype.stop.call(this);
    };
    return AutomaticCar;
}(Car));
// Concrete Products
var ManualTruck = /** @class */ (function (_super) {
    __extends(ManualTruck, _super);
    function ManualTruck() {
        return _super.call(this, "manual") || this;
    }
    ManualTruck.prototype.start = function () {
        return "Manual " + _super.prototype.start.call(this);
    };
    ManualTruck.prototype.stop = function () {
        return "Manual " + _super.prototype.stop.call(this);
    };
    return ManualTruck;
}(Car));
// Concrete Products
var AutomaticTruck = /** @class */ (function (_super) {
    __extends(AutomaticTruck, _super);
    function AutomaticTruck() {
        return _super.call(this, "automatic") || this;
    }
    AutomaticTruck.prototype.start = function () {
        return "Automatic " + _super.prototype.start.call(this);
    };
    AutomaticTruck.prototype.stop = function () {
        return "Automatic " + _super.prototype.stop.call(this);
    };
    return AutomaticTruck;
}(Truck));
// Concrete Creators
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.prototype.createAutomobile = function (transmission) {
        var transmissionType = transmission === null || transmission === void 0 ? void 0 : transmission.toLowerCase();
        switch (transmissionType) {
            case "manual":
                return new ManualCar();
            case "automatic":
                return new AutomaticCar();
            default:
                throw new Error("Invalid transmission type");
        }
    };
    return CarFactory;
}());
var TruckFactory = /** @class */ (function () {
    function TruckFactory() {
    }
    TruckFactory.prototype.createAutomobile = function (transmission) {
        var transmissionType = transmission === null || transmission === void 0 ? void 0 : transmission.toLowerCase();
        switch (transmissionType) {
            case "manual":
                return new ManualTruck();
            case "automatic":
                return new AutomaticTruck();
            default:
                throw new Error("Invalid transmission type");
        }
    };
    return TruckFactory;
}());
var MotorcycleFactory = /** @class */ (function () {
    function MotorcycleFactory() {
    }
    MotorcycleFactory.prototype.createAutomobile = function () {
        return new Motorcycle();
    };
    return MotorcycleFactory;
}());
// Client code
function clientCode(factory, transmission) {
    var automobile = factory.createAutomobile(transmission);
    console.log(automobile.start());
    console.log(automobile.stop());
}
// Usage
var carFactory = new CarFactory();
var truckFactory = new TruckFactory();
var motocycleFactory = new MotorcycleFactory();
console.log("Client is using a manual car:");
clientCode(carFactory, "manual");
console.log("\nClient is using an automatic car:");
clientCode(carFactory, "automatic");
console.log("\nClient is using a manual truck:");
clientCode(truckFactory, "manual");
console.log("\nClient is using an automatic truck:");
clientCode(truckFactory, "automatic");
console.log("\nClient is using a motorcycle:");
clientCode(motocycleFactory);
