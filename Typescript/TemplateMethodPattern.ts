export {};
abstract class CaffeineBeverage {
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater(): void {
    console.log("Boiling water");
  }

  abstract brew(): void;

  pourInCup(): void {
    console.log("Pouring into cup");
  }

  abstract addCondiments(): void;
}

class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log("Dripping coffee through filter");
  }

  addCondiments(): void {
    console.log("Adding sugar and milk");
  }
}

class Tea extends CaffeineBeverage {
  brew(): void {
    console.log("Steeping the tea");
  }

  addCondiments(): void {
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
