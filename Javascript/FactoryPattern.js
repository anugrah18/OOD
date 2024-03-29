// Product interface
class Automobile {
  start() {
    throw new Error("Method not implemented.");
  }
  stop() {
    throw new Error("Method not implemented.");
  }
}

// Concrete Products
class Car extends Automobile {
  constructor(transmission) {
    super();
    this.transmission = transmission;
  }

  start() {
    return `Car with ${this.transmission} transmission started`;
  }

  stop() {
    return `Car with ${this.transmission} transmission stopped`;
  }
}

// Concrete Products
class Motorcycle extends Automobile {
  start() {
    return "Motorcycle started";
  }

  stop() {
    return "Motorcycle stopped";
  }
}

// Concrete Products
class Truck extends Automobile {
  constructor(transmission) {
    super();
    this.transmission = transmission;
  }

  start() {
    return `Truck with ${this.transmission} transmission started`;
  }

  stop() {
    return `Truck with ${this.transmission} transmission stopped`;
  }
}

// Concrete Products
class ManualCar extends Car {
  constructor() {
    super("manual");
  }

  start() {
    return "Manual " + super.start();
  }

  stop() {
    return "Manual " + super.stop();
  }
}

// Concrete Products
class AutomaticCar extends Car {
  constructor() {
    super("automatic");
  }
  start() {
    return "Automatic " + super.start();
  }
  stop() {
    return "Automatic " + super.stop();
  }
}

// Concrete Products
class ManualTruck extends Truck {
  constructor() {
    super("manual");
  }
  start() {
    return "Manual " + super.start();
  }
  stop() {
    return "Manual " + super.stop();
  }
}

// Concrete Products
class AutomaticTruck extends Truck {
  constructor() {
    super("automatic");
  }
  start() {
    return "Automatic " + super.start();
  }
  stop() {
    return "Automatic " + super.stop();
  }
}

// Creator interface with the factory method
class AutomobileFactory {
  createAutomobile(transmission) {
    throw new Error("Method not implemented.");
  }
}

// Concrete Creators
class CarFactory extends AutomobileFactory {
  createAutomobile(transmission) {
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

class TruckFactory extends AutomobileFactory {
  createAutomobile(transmission) {
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

class MotorcycleFactory extends AutomobileFactory {
  createAutomobile() {
    return new Motorcycle();
  }
}

// Client code
function clientCode(factory, transmission) {
  const automobile = factory.createAutomobile(transmission);
  console.log(automobile.start());
  console.log(automobile.stop());
}

// Usage
const carFactory = new CarFactory();
const truckFactory = new TruckFactory();
const motorcycleFactory = new MotorcycleFactory();

console.log("Client is using a manual car:");
clientCode(carFactory, "manual");

console.log("\nClient is using an automatic car:");
clientCode(carFactory, "automatic");

console.log("\nClient is using a manual truck:");
clientCode(truckFactory, "manual");

console.log("\nClient is using an automatic truck:");
clientCode(truckFactory, "automatic");

console.log("\nClient is using a motorcycle:");
clientCode(motorcycleFactory);
