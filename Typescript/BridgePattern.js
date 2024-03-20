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
// Abstraction in bridge pattern
var Vehicle = /** @class */ (function () {
    function Vehicle(workShop1, workShop2) {
        this.workShop1 = workShop1;
        this.workShop2 = workShop2;
    }
    return Vehicle;
}());
// Refine abstraction 1 in bridge pattern
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(workShop1, workShop2) {
        return _super.call(this, workShop1, workShop2) || this;
    }
    Car.prototype.manufacture = function () {
        console.log("Car ");
        this.workShop1.work();
        this.workShop2.work();
    };
    return Car;
}(Vehicle));
// Refine abstraction 2 in bridge pattern
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(workShop1, workShop2) {
        return _super.call(this, workShop1, workShop2) || this;
    }
    Bike.prototype.manufacture = function () {
        console.log("Bike ");
        this.workShop1.work();
        this.workShop2.work();
    };
    return Bike;
}(Vehicle));
// Concrete implementation 1 for bridge pattern
var Produce = /** @class */ (function () {
    function Produce() {
    }
    Produce.prototype.work = function () {
        console.log("Produced");
    };
    return Produce;
}());
// Concrete implementation 2 for bridge pattern
var Assemble = /** @class */ (function () {
    function Assemble() {
    }
    Assemble.prototype.work = function () {
        console.log(" And Assembled.");
    };
    return Assemble;
}());
// Demonstration of bridge design pattern
var vehicle1 = new Car(new Produce(), new Assemble());
vehicle1.manufacture();
var vehicle2 = new Bike(new Produce(), new Assemble());
vehicle2.manufacture();
