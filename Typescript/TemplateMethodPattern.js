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
var CaffeineBeverage = /** @class */ (function () {
    function CaffeineBeverage() {
    }
    CaffeineBeverage.prototype.prepareRecipe = function () {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    };
    CaffeineBeverage.prototype.boilWater = function () {
        console.log("Boiling water");
    };
    CaffeineBeverage.prototype.pourInCup = function () {
        console.log("Pouring into cup");
    };
    return CaffeineBeverage;
}());
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coffee.prototype.brew = function () {
        console.log("Dripping coffee through filter");
    };
    Coffee.prototype.addCondiments = function () {
        console.log("Adding sugar and milk");
    };
    return Coffee;
}(CaffeineBeverage));
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tea.prototype.brew = function () {
        console.log("Steeping the tea");
    };
    Tea.prototype.addCondiments = function () {
        console.log("Adding lemon");
    };
    return Tea;
}(CaffeineBeverage));
// Usage
var coffee = new Coffee();
console.log("Making coffee:");
coffee.prepareRecipe();
console.log("\n");
var tea = new Tea();
console.log("Making tea:");
tea.prepareRecipe();
