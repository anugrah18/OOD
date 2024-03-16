// Context: AmazonOrder
class AmazonOrder {
  private state: OrderState;

  constructor() {
    this.state = new PaidForState();
  }

  transitionTo(state: OrderState): void {
    console.log(
      `Order transitioning from ${this.state.getName()} to ${state.getName()}`
    );
    this.state = state;
  }

  verifyPayment(): void {
    this.state.verifyPayment(this);
  }

  shipOrder(): void {
    this.state.shipOrder(this);
  }
}

// State Interface
interface OrderState {
  getName(): string;
  verifyPayment(order: AmazonOrder): void;
  shipOrder(order: AmazonOrder): void;
}

// Concrete States
class PaidForState implements OrderState {
  getName(): string {
    return "PaidForState";
  }
  verifyPayment(order: AmazonOrder): void {
    console.log("Payment verified.");
    order.transitionTo(new VerifiedPaymentState());
  }

  shipOrder(order: AmazonOrder): void {
    console.log("Cannot ship order. Payment not yet verified.");
  }
}

class VerifiedPaymentState implements OrderState {
  getName(): string {
    return "VerifiedPaymentState";
  }
  verifyPayment(order: AmazonOrder): void {
    console.log("Payment already verified.");
  }

  shipOrder(order: AmazonOrder): void {
    console.log("Order shipped.");
    order.transitionTo(new ShippedState());
  }
}

class ShippedState implements OrderState {
  getName(): string {
    return "ShippedState";
  }
  verifyPayment(order: AmazonOrder): void {
    console.log("Payment already verified.");
  }

  shipOrder(order: AmazonOrder): void {
    console.log("Order already shipped.");
  }
}

// Client code
const order = new AmazonOrder();
order.shipOrder(); // Cannot ship before verification
order.verifyPayment(); // Verify payment
order.shipOrder(); // Ship the order
order.verifyPayment(); // Attempt to verify payment again
