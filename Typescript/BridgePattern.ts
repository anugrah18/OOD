export {};
// Implementer for bridge pattern
interface Workshop {
  work(): void;
}

// Abstraction in bridge pattern
abstract class Vehicle {
  protected workShop1: Workshop;
  protected workShop2: Workshop;

  constructor(workShop1: Workshop, workShop2: Workshop) {
    this.workShop1 = workShop1;
    this.workShop2 = workShop2;
  }

  abstract manufacture(): void;
}

// Refine abstraction 1 in bridge pattern
class Car extends Vehicle {
  constructor(workShop1: Workshop, workShop2: Workshop) {
    super(workShop1, workShop2);
  }

  manufacture(): void {
    console.log("Car ");
    this.workShop1.work();
    this.workShop2.work();
  }
}

// Refine abstraction 2 in bridge pattern
class Bike extends Vehicle {
  constructor(workShop1: Workshop, workShop2: Workshop) {
    super(workShop1, workShop2);
  }

  manufacture(): void {
    console.log("Bike ");
    this.workShop1.work();
    this.workShop2.work();
  }
}

// Concrete implementation 1 for bridge pattern
class Produce implements Workshop {
  work(): void {
    console.log("Produced");
  }
}

// Concrete implementation 2 for bridge pattern
class Assemble implements Workshop {
  work(): void {
    console.log(" And Assembled.");
  }
}

// Demonstration of bridge design pattern
const vehicle1: Vehicle = new Car(new Produce(), new Assemble());
vehicle1.manufacture();
const vehicle2: Vehicle = new Bike(new Produce(), new Assemble());
vehicle2.manufacture();
