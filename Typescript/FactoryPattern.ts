export {};
// Product interface
interface Automobile {
  start(): string;
  stop(): string;
}

// Concrete Products
class Car implements Automobile {
  private transmission: string;

  constructor(transmission: string) {
    this.transmission = transmission;
  }

  start(): string {
    return `Car with ${this.transmission} transmission started`;
  }

  stop(): string {
    return `Car with ${this.transmission} transmission stopped`;
  }
}

// Concrete Products
class Motorcycle implements Automobile {
  start(): string {
    return "Motorcycle started";
  }

  stop(): string {
    return "Motorcycle stopped";
  }
}

// Concrete Products
class Truck implements Automobile {
  private transmission: string;

  constructor(transmission: string) {
    this.transmission = transmission;
  }

  start(): string {
    return `Truck with ${this.transmission} transmission started`;
  }
  stop(): string {
    return `Truck with ${this.transmission} transmission stopped`;
  }
}

// Concrete Products
class ManualCar extends Car {
  constructor() {
    super("manual");
  }

  start(): string {
    return "Manual " + super.start();
  }

  stop(): string {
    return "Manual " + super.stop();
  }
}

// Concrete Products
class AutomaticCar extends Car {
  constructor() {
    super("automatic");
  }
  start(): string {
    return "Automatic " + super.start();
  }
  stop(): string {
    return "Automatic " + super.stop();
  }
}

// Concrete Products
class ManualTruck extends Car {
  constructor() {
    super("manual");
  }
  start(): string {
    return "Manual " + super.start();
  }
  stop(): string {
    return "Manual " + super.stop();
  }
}

// Concrete Products
class AutomaticTruck extends Truck {
  constructor() {
    super("automatic");
  }
  start(): string {
    return "Automatic " + super.start();
  }
  stop(): string {
    return "Automatic " + super.stop();
  }
}

// Creator interface with the factory method
interface AutomobileFactory {
  createAutomobile(transmission?: string): Automobile;
}

// Concrete Creators
class CarFactory implements AutomobileFactory {
  createAutomobile(transmission?: string): Automobile {
    const transmissionType = transmission?.toLowerCase();

    switch (transmissionType) {
      case "manual":
        return new ManualCar();
      case "automatic":
        return new AutomaticCar();
      default:
        throw new Error("Invalid transmission type");
    }
  }
}

class TruckFactory implements AutomobileFactory {
  createAutomobile(transmission?: string): Automobile {
    const transmissionType = transmission?.toLowerCase();

    switch (transmissionType) {
      case "manual":
        return new ManualTruck();
      case "automatic":
        return new AutomaticTruck();
      default:
        throw new Error("Invalid transmission type");
    }
  }
}

class MotorcycleFactory implements AutomobileFactory {
  createAutomobile(): Automobile {
    return new Motorcycle();
  }
}

// Client code
function clientCode(factory: AutomobileFactory, transmission?: string): void {
  const automobile = factory.createAutomobile(transmission);
  console.log(automobile.start());
  console.log(automobile.stop());
}

// Usage
const carFactory = new CarFactory();
const truckFactory = new TruckFactory();
const motocycleFactory = new MotorcycleFactory();

console.log("Client is using a manual car:");
clientCode(carFactory, "manual");

console.log("\nClient is using an automatic car:");
clientCode(carFactory, "automatic");

console.log("\nClient is using a manual truck:");
clientCode(truckFactory, "manual");

console.log("\nClient is using an automatic truck:");
clientCode(truckFactory, "automatic");

console.log("\nClient is using a motorcycle:");
clientCode(motocycleFactory);
