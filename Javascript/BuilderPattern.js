// Base class representing a generic car
class Car {
  constructor() {
    this.make = null;
    this.model = null;
    this.color = null;
    this.transmission = null; // Transmission type
    this.batteryType = null; // Engine type
  }

  toString() {
    return `Make: ${this.make}, Model: ${this.model}, Color: ${this.color}, Transmission: ${this.transmission}, Battery Type: ${this.batteryType}`;
  }
}

// Abstract builder class for constructing a car
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setMake(make) {
    this.car.make = make;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  build() {
    return this.car;
  }
}

// Concrete builder class for constructing a manual transmission car
class ManualCarBuilder extends CarBuilder {
  constructor() {
    super();
    this.car.transmission = "Manual";
  }
}

// Concrete builder class for constructing an automatic transmission car
class AutomaticCarBuilder extends CarBuilder {
  constructor() {
    super();
    this.car.transmission = "Automatic";
  }
}

// Concrete builder class for constructing an electric car
class ElectricCarBuilder extends CarBuilder {
  constructor() {
    super();
    this.car.batteryType = "Electric";
  }
}

// Director class responsible for orchestrating the construction process
class CarDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructCar(make, model, color) {
    return this.builder.setMake(make).setModel(model).setColor(color).build();
  }
}

// Usage
const manualBuilder = new ManualCarBuilder();
const automaticBuilder = new AutomaticCarBuilder();
const electricBuilder = new ElectricCarBuilder();

const director1 = new CarDirector(manualBuilder);
const manualCar = director1.constructCar("Toyota", "Corolla", "Red");

const director2 = new CarDirector(automaticBuilder);
const automaticCar = director2.constructCar("Honda", "Civic", "Blue");

const director3 = new CarDirector(electricBuilder);
const electricCar = director3.constructCar("Tesla", "Model S", "White");

console.log(manualCar.toString());
console.log(automaticCar.toString());
console.log(electricCar.toString());
