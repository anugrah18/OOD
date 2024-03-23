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
// Base class representing a generic discount calculator
var DiscountCalculator = /** @class */ (function () {
    function DiscountCalculator(nextCalculator) {
        if (nextCalculator === void 0) { nextCalculator = null; }
        this.nextCalculator = nextCalculator;
    }
    // Method to handle the request by either applying the discount or passing it to the next calculator
    DiscountCalculator.prototype.handleRequest = function (amount) {
        var discount = this.applyDiscount(amount);
        if (discount !== null) {
            console.log("Discount applied: ".concat(discount));
            return discount;
        }
        else if (this.nextCalculator !== null) {
            console.log("Passing request to next calculator");
            return this.nextCalculator.handleRequest(amount);
        }
        else {
            console.log("No discount applied");
            return 0;
        }
    };
    return DiscountCalculator;
}());
// Concrete discount calculator class for applying a 10% discount
var TenPercentDiscountCalculator = /** @class */ (function (_super) {
    __extends(TenPercentDiscountCalculator, _super);
    function TenPercentDiscountCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TenPercentDiscountCalculator.prototype.applyDiscount = function (amount) {
        if (amount >= 100) {
            return amount * 0.1; // Apply 10% discount
        }
        else {
            return null; // Can't handle the request
        }
    };
    return TenPercentDiscountCalculator;
}(DiscountCalculator));
// Concrete discount calculator class for applying a 20% discount
var TwentyPercentDiscountCalculator = /** @class */ (function (_super) {
    __extends(TwentyPercentDiscountCalculator, _super);
    function TwentyPercentDiscountCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwentyPercentDiscountCalculator.prototype.applyDiscount = function (amount) {
        if (amount >= 200) {
            return amount * 0.2; // Apply 20% discount
        }
        else {
            return null; // Can't handle the request
        }
    };
    return TwentyPercentDiscountCalculator;
}(DiscountCalculator));
// Concrete discount calculator class for applying a 50% discount
var FiftyPercentDiscountCalculator = /** @class */ (function (_super) {
    __extends(FiftyPercentDiscountCalculator, _super);
    function FiftyPercentDiscountCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FiftyPercentDiscountCalculator.prototype.applyDiscount = function (amount) {
        if (amount >= 500) {
            return amount * 0.5; // Apply 50% discount
        }
        else {
            return null; // Can't handle the request
        }
    };
    return FiftyPercentDiscountCalculator;
}(DiscountCalculator));
// Usage
var tenPercentCalculator = new TenPercentDiscountCalculator();
var twentyPercentCalculator = new TwentyPercentDiscountCalculator();
var fiftyPercentCalculator = new FiftyPercentDiscountCalculator();
// Create a chain of discount calculators
tenPercentCalculator.nextCalculator = twentyPercentCalculator;
twentyPercentCalculator.nextCalculator = fiftyPercentCalculator;
// Test with different purchase amounts
var purchaseAmounts = [50, 150, 250, 600];
purchaseAmounts.forEach(function (amount) {
    console.log("\nPurchase amount: ".concat(amount));
    var totalDiscount = tenPercentCalculator.handleRequest(amount);
    console.log("Total discount: ".concat(totalDiscount));
});
