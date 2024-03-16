// Context: AmazonOrder
var AmazonOrder = /** @class */ (function () {
    function AmazonOrder() {
        this.state = new PaidForState();
    }
    AmazonOrder.prototype.transitionTo = function (state) {
        console.log("Order transitioning from ".concat(this.state.getName(), " to ").concat(state.getName()));
        this.state = state;
    };
    AmazonOrder.prototype.verifyPayment = function () {
        this.state.verifyPayment(this);
    };
    AmazonOrder.prototype.shipOrder = function () {
        this.state.shipOrder(this);
    };
    return AmazonOrder;
}());
// Concrete States
var PaidForState = /** @class */ (function () {
    function PaidForState() {
    }
    PaidForState.prototype.getName = function () {
        return "PaidForState";
    };
    PaidForState.prototype.verifyPayment = function (order) {
        console.log("Payment verified.");
        order.transitionTo(new VerifiedPaymentState());
    };
    PaidForState.prototype.shipOrder = function (order) {
        console.log("Cannot ship order. Payment not yet verified.");
    };
    return PaidForState;
}());
var VerifiedPaymentState = /** @class */ (function () {
    function VerifiedPaymentState() {
    }
    VerifiedPaymentState.prototype.getName = function () {
        return "VerifiedPaymentState";
    };
    VerifiedPaymentState.prototype.verifyPayment = function (order) {
        console.log("Payment already verified.");
    };
    VerifiedPaymentState.prototype.shipOrder = function (order) {
        console.log("Order shipped.");
        order.transitionTo(new ShippedState());
    };
    return VerifiedPaymentState;
}());
var ShippedState = /** @class */ (function () {
    function ShippedState() {
    }
    ShippedState.prototype.getName = function () {
        return "ShippedState";
    };
    ShippedState.prototype.verifyPayment = function (order) {
        console.log("Payment already verified.");
    };
    ShippedState.prototype.shipOrder = function (order) {
        console.log("Order already shipped.");
    };
    return ShippedState;
}());
// Client code
var order = new AmazonOrder();
order.shipOrder(); // Cannot ship before verification
order.verifyPayment(); // Verify payment
order.shipOrder(); // Ship the order
order.verifyPayment(); // Attempt to verify payment again
