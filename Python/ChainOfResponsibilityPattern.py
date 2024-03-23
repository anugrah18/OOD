# Base class representing a generic discount calculator
class DiscountCalculator:
    def __init__(self, next_calculator=None):
        self.next_calculator = next_calculator

    # Abstract method to apply discount, to be implemented by concrete classes
    def apply_discount(self, amount):
        raise NotImplementedError()

    # Method to handle the request by either applying the discount or passing it to the next calculator
    def handle_request(self, amount):
        discount = self.apply_discount(amount)
        if discount is not None:
            print(f"Discount applied: {discount}")
            return discount
        elif self.next_calculator is not None:
            print("Passing request to next calculator")
            return self.next_calculator.handle_request(amount)
        else:
            print("No discount applied")
            return 0


# Concrete discount calculator class for applying a 10% discount
class TenPercentDiscountCalculator(DiscountCalculator):
    def apply_discount(self, amount):
        if amount >= 100:
            return amount * 0.1  # Apply 10% discount
        else:
            return None  # Can't handle the request


# Concrete discount calculator class for applying a 20% discount
class TwentyPercentDiscountCalculator(DiscountCalculator):
    def apply_discount(self, amount):
        if amount >= 200:
            return amount * 0.2  # Apply 20% discount
        else:
            return None  # Can't handle the request


# Concrete discount calculator class for applying a 50% discount
class FiftyPercentDiscountCalculator(DiscountCalculator):
    def apply_discount(self, amount):
        if amount >= 500:
            return amount * 0.5  # Apply 50% discount
        else:
            return None  # Can't handle the request


# Usage
if __name__ == "__main__":
    # Create instances of discount calculators
    ten_percent_calculator = TenPercentDiscountCalculator()
    twenty_percent_calculator = TwentyPercentDiscountCalculator()
    fifty_percent_calculator = FiftyPercentDiscountCalculator()

    # Create a chain of discount calculators
    ten_percent_calculator.next_calculator = twenty_percent_calculator
    twenty_percent_calculator.next_calculator = fifty_percent_calculator

    # Test with different purchase amounts
    purchase_amounts = [50, 150, 250, 600]
    for amount in purchase_amounts:
        print(f"\nPurchase amount: {amount}")
        total_discount = ten_percent_calculator.handle_request(amount)
        print(f"Total discount: {total_discount}")
