// Context: AmazonOrder
class AmazonOrder {
  constructor() {
    this.state = new PaidForState();
  }

  transitionTo(state) {
    console.log(
      `Order transitioning from ${this.state.getName()} to ${state.getName()}`
    );
    this.state = state;
  }

  verifyPayment() {
    this.state.verifyPayment(this);
  }

  shipOrder() {
    this.state.shipOrder(this);
  }
}

// State Interface
class OrderState {
  getName() {
    throw new Error("Method not implemented.");
  }
  verifyPayment(order) {
    throw new Error("Method not implemented.");
  }
  shipOrder(order) {
    throw new Error("Method not implemented.");
  }
}

// Concrete States
class PaidForState extends OrderState {
  getName() {
    return "PaidForState";
  }
  verifyPayment(order) {
    console.log("Payment verified.");
    order.transitionTo(new VerifiedPaymentState());
  }

  shipOrder(order) {
    console.log("Cannot ship order. Payment not yet verified.");
  }
}

class VerifiedPaymentState extends OrderState {
  getName() {
    return "VerifiedPaymentState";
  }
  verifyPayment(order) {
    console.log("Payment already verified.");
  }

  shipOrder(order) {
    console.log("Order shipped.");
    order.transitionTo(new ShippedState());
  }
}

class ShippedState extends OrderState {
  getName() {
    return "ShippedState";
  }
  verifyPayment(order) {
    console.log("Payment already verified.");
  }

  shipOrder(order) {
    console.log("Order already shipped.");
  }
}

// Client code
const order = new AmazonOrder();
order.shipOrder(); // Cannot ship before verification
order.verifyPayment(); // Verify payment
order.shipOrder(); // Ship the order
order.verifyPayment(); // Attempt to verify payment again
