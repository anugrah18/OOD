export {};
// Base class representing a generic car
class Car {
  public make: string | null = null;
  public model: string | null = null;
  public color: string | null = null;
  public transmission: string | null = null; // Transmission type
  public batteryType: string | null = null; // Engine type

  public toString(): string {
    return `Make: ${this.make}, Model: ${this.model}, Color: ${this.color}, Transmission: ${this.transmission}, Battery Type: ${this.batteryType}`;
}
}

// Abstract builder class for constructing a car
abstract class CarBuilder {
  protected car: Car;

  constructor() {
    this.car = new Car();
  }

  public abstract setMake(make: string): this;
  public abstract setModel(model: string): this;
  public abstract setColor(color: string): this;
  public abstract build(): Car;
}

// Concrete builder class for constructing a manual transmission car
class ManualCarBuilder extends CarBuilder {
  constructor() {
    super();
    this.car.transmission = "Manual";
  }

  public setMake(make: string): this {
    this.car.make = make;
    return this;
  }

  public setModel(model: string): this {
    this.car.model = model;
    return this;
  }

  public setColor(color: string): this {
    this.car.color = color;
    return this;
  }

  public build(): Car {
    return this.car;
  }
}

// Concrete builder class for constructing an automatic transmission car
class AutomaticCarBuilder extends CarBuilder {
  constructor() {
    super();
    this.car.transmission = "Automatic";
  }

  public setMake(make: string): this {
    this.car.make = make;
    return this;
  }

  public setModel(model: string): this {
    this.car.model = model;
    return this;
  }

  public setColor(color: string): this {
    this.car.color = color;
    return this;
  }

  public build(): Car {
    return this.car;
  }
}

// Concrete builder class for constructing an electric car
class ElectricCarBuilder extends CarBuilder {
  constructor() {
    super();
    this.car.batteryType = "Electric";
  }

  public setMake(make: string): this {
    this.car.make = make;
    return this;
  }

  public setModel(model: string): this {
    this.car.model = model;
    return this;
  }

  public setColor(color: string): this {
    this.car.color = color;
    return this;
  }

  public build(): Car {
    return this.car;
  }
}

// Director class responsible for orchestrating the construction process
class CarDirector {
  private builder: CarBuilder;

  constructor(builder: CarBuilder) {
    this.builder = builder;
  }

  public constructCar(make: string, model: string, color: string): Car {
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
