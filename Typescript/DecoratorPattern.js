"use strict";
// Base Pizza class
class Pizza {
    makePizza() {
        return "Plain pizza";
    }
    getPrice() {
        return 3; // Default price for a plain pizza
    }
}
// Thick Crust Pizza class
class ThickCrustPizza extends Pizza {
    makePizza() {
        return "Thick crust pizza";
    }
    getPrice() {
        return 5; // Price for a pizza with thick crust
    }
}
// Decorator for adding cheese topping
function addCheeseDecorator(pizza) {
    class CheeseDecorator extends Pizza {
        makePizza() {
            return pizza.makePizza() + " with extra cheese";
        }
        getPrice() {
            return pizza.getPrice() + 1;
        }
    }
    return new CheeseDecorator();
}
// Decorator for adding tomato sauce topping
function addTomatoSauceDecorator(pizza) {
    class TomatoDecorator extends Pizza {
        makePizza() {
            return pizza.makePizza() + " with tomato sauce";
        }
        getPrice() {
            return pizza.getPrice() + 0.5;
        }
    }
    return new TomatoDecorator();
}
// Decorator for adding pepproni topping
function addPepperoniDecorator(pizza) {
    class PepperoniDecorator extends Pizza {
        makePizza() {
            return pizza.makePizza() + " with pepperoni";
        }
        getPrice() {
            return pizza.getPrice() + 2;
        }
    }
    return new PepperoniDecorator();
}
//Example usage
const plainPizza = new Pizza();
const thickPizza = new ThickCrustPizza();
const plainPizzaWithCheeseAndTomatoSauce = addCheeseDecorator(addTomatoSauceDecorator(plainPizza));
const thickPizzaWithCheeseAndTomatoSauceAndPepperoni = addCheeseDecorator(addTomatoSauceDecorator(addPepperoniDecorator(thickPizza)));
const thickPizzaWithPepperoni = addPepperoniDecorator(thickPizza);
console.log(`${plainPizzaWithCheeseAndTomatoSauce.makePizza()} : $${plainPizzaWithCheeseAndTomatoSauce.getPrice()}`);
console.log(`${thickPizzaWithCheeseAndTomatoSauceAndPepperoni.makePizza()} : $${thickPizzaWithCheeseAndTomatoSauceAndPepperoni.getPrice()}`);
console.log(`${thickPizzaWithPepperoni.makePizza()} : $${thickPizzaWithPepperoni.getPrice()}`);
