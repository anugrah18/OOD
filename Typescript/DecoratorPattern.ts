// Base Pizza class
class Pizza {
  makePizza(): string {
    return "Plain pizza";
  }
  getPrice(): number {
    return 3; // Default price for a plain pizza
  }
}

// Thick Crust Pizza class
class ThickCrustPizza extends Pizza {
  makePizza(): string {
    return "Thick crust pizza";
  }
  getPrice(): number {
    return 5; // Price for a pizza with thick crust
  }
}

// Decorator for adding cheese topping
function addCheeseDecorator(pizza: Pizza): Pizza {
  class CheeseDecorator extends Pizza {
    makePizza(): string {
      return pizza.makePizza() + " with extra cheese";
    }

    getPrice(): number {
      return pizza.getPrice() + 1;
    }
  }

  return new CheeseDecorator();
}

// Decorator for adding tomato sauce topping
function addTomatoSauceDecorator(pizza: Pizza): Pizza {
  class TomatoDecorator extends Pizza {
    makePizza(): string {
      return pizza.makePizza() + " with tomato sauce";
    }
    getPrice(): number {
      return pizza.getPrice() + 0.5;
    }
  }

  return new TomatoDecorator();
}

// Decorator for adding pepproni topping
function addPepperoniDecorator(pizza: Pizza): Pizza {
  class PepperoniDecorator extends Pizza {
    makePizza(): string {
      return pizza.makePizza() + " with pepperoni";
    }
    getPrice(): number {
      return pizza.getPrice() + 2;
    }
  }

  return new PepperoniDecorator();
}

//Example usage
const plainPizza = new Pizza();
const thickPizza = new ThickCrustPizza();

const plainPizzaWithCheeseAndTomatoSauce = addCheeseDecorator(
  addTomatoSauceDecorator(plainPizza)
);

const thickPizzaWithCheeseAndTomatoSauceAndPepperoni = addCheeseDecorator(
  addTomatoSauceDecorator(addPepperoniDecorator(thickPizza))
);

const thickPizzaWithPepperoni = addPepperoniDecorator(thickPizza);

console.log(
  `${plainPizzaWithCheeseAndTomatoSauce.makePizza()} : $${plainPizzaWithCheeseAndTomatoSauce.getPrice()}`
);
console.log(
  `${thickPizzaWithCheeseAndTomatoSauceAndPepperoni.makePizza()} : $${thickPizzaWithCheeseAndTomatoSauceAndPepperoni.getPrice()}`
);
console.log(
  `${thickPizzaWithPepperoni.makePizza()} : $${thickPizzaWithPepperoni.getPrice()}`
);
