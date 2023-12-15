# Base Pizza class
class Pizza:
    def make_pizza(self):
        return "Plain pizza"

    def get_price(self):
        return 3  # Default price for a plain pizza

# Thick Crust Pizza class
class ThickCrustPizza(Pizza):
    def make_pizza(self):
        return "Thick crust pizza"

    def get_price(self):
        return 5  # Price for a pizza with thick crust

# Decorator for adding cheese topping
def add_cheese_decorator(pizza):
    class CheeseDecorator(Pizza):
        def make_pizza(self):
            return pizza.make_pizza() + " with extra cheese"

        def get_price(self):
            return pizza.get_price() + 1  # Additional $1 for cheese
    return CheeseDecorator()

# Decorator for adding tomato sauce topping
def add_tomato_sauce_decorator(pizza):
    class TomatoSauceDecorator(Pizza):
        def make_pizza(self):
            return pizza.make_pizza() + " with tomato sauce"

        def get_price(self):
            return pizza.get_price() + 0.5  # Additional $0.5 for tomato sauce
    return TomatoSauceDecorator()

# Decorator for adding pepperoni topping
def add_pepperoni_decorator(pizza):
    class PepperoniDecorator(Pizza):
        def make_pizza(self):
            return pizza.make_pizza() + " with pepperoni"

        def get_price(self):
            return pizza.get_price() + 2  # Additional $2 for pepperoni
    return PepperoniDecorator()



# Example usage
plain_pizza = Pizza()

# Add cheese, tomato sauce, to a thick crust pizza
cheese_and_tomato_with_thick_crust = add_cheese_decorator(add_tomato_sauce_decorator(ThickCrustPizza()))
print(cheese_and_tomato_with_thick_crust.make_pizza())
print("Price:", cheese_and_tomato_with_thick_crust.get_price())

# Create a thick crust pizza and add pepperoni
thick_crust_with_pepperoni = add_pepperoni_decorator(ThickCrustPizza())
print(thick_crust_with_pepperoni.make_pizza())
print("Price:", thick_crust_with_pepperoni.get_price())

# Add pepperoni and tomato sauce to a plain pizza
plain_pizza_with_tomato_and_pepperoni = add_tomato_sauce_decorator(add_pepperoni_decorator(Pizza()))
print(plain_pizza_with_tomato_and_pepperoni.make_pizza())
print("Price:", plain_pizza_with_tomato_and_pepperoni.get_price())

