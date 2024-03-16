# Context : AmazonOrder
class AmazonOrder:
    def __init__(self):
        self.state = PaidForState()

    def transition_to(self,state):
        print(f"Order transitioning from {type(self.state).__name__} to {type(state).__name__}")
        self.state = state

    def verify_payment(self):
        self.state.verify_payment(self)

    def ship_order(self):
        self.state.ship_order(self)

# State Interface
class OrderState():
    def verify_payment(self,order:AmazonOrder):
        pass
    def ship_order(self,order:AmazonOrder):
        pass

# Concrete States
class PaidForState(OrderState):
    def verify_payment(self,order:AmazonOrder):
        print("Payment verified.")
        order.transition_to(VerifiedPaymentState())

    def ship_order(self,order:AmazonOrder):
        print("Cannot ship order. Payment not yet verified")


class VerifiedPaymentState(OrderState):
    def verify_payment(self, order: AmazonOrder):
        print("Payment already verified.")

    def ship_order(self, order: AmazonOrder):
        print("Order shipped.")
        order.transition_to(ShippedState())

class ShippedState(OrderState):
    def verify_payment(self, order: AmazonOrder):
        print("Payment already verified.")

    def ship_order(self, order: AmazonOrder):
        print("Order already shipped.")


# Client code
if __name__ == "__main__":
    order = AmazonOrder()
    order.ship_order()   # Cannot ship before verification
    order.verify_payment()  # Verify payment
    order.ship_order()  # Ship the order
    order.verify_payment()  # Attempt to verify payment again

