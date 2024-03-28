class CaffeineBeverage {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater() {
    console.log("Boiling water");
  }

  // Abstract method, must be implemented by subclasses
  brew() {
    throw new Error("Abstract method brew() must be implemented.");
  }

  pourInCup() {
    console.log("Pouring into cup");
  }

  // Abstract method, must be implemented by subclasses
  addCondiments() {
    throw new Error("Abstract method addCondiments() must be implemented.");
  }
}

class Coffee extends CaffeineBeverage {
  brew() {
    console.log("Dripping coffee through filter");
  }

  addCondiments() {
    console.log("Adding sugar and milk");
  }
}

class Tea extends CaffeineBeverage {
  brew() {
    console.log("Steeping the tea");
  }

  addCondiments() {
    console.log("Adding lemon");
  }
}

// Usage
const coffee = new Coffee();
console.log("Making coffee:");
coffee.prepareRecipe();

console.log("\n");

const tea = new Tea();
console.log("Making tea:");
tea.prepareRecipe();
