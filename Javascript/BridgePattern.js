// Implementer for bridge pattern
class Workshop {
  work() {
    throw new Error("Method not implemented.");
  }
}

// Abstraction in bridge pattern
class Vehicle {
  constructor(workShop1, workShop2) {
    this.workShop1 = workShop1;
    this.workShop2 = workShop2;
  }

  manufacture() {
    throw new Error("Method not implemented.");
  }
}

// Refine abstraction 1 in bridge pattern
class Car extends Vehicle {
  constructor(workShop1, workShop2) {
    super(workShop1, workShop2);
  }

  manufacture() {
    console.log("Car ");
    this.workShop1.work();
    this.workShop2.work();
  }
}

// Refine abstraction 2 in bridge pattern
class Bike extends Vehicle {
  constructor(workShop1, workShop2) {
    super(workShop1, workShop2);
  }

  manufacture() {
    console.log("Bike ");
    this.workShop1.work();
    this.workShop2.work();
  }
}

// Concrete implementation 1 for bridge pattern
class Produce extends Workshop {
  work() {
    console.log("Produced");
  }
}

// Concrete implementation 2 for bridge pattern
class Assemble extends Workshop {
  work() {
    console.log(" And Assembled.");
  }
}

// Demonstration of bridge design pattern
const vehicle1 = new Car(new Produce(), new Assemble());
vehicle1.manufacture();
const vehicle2 = new Bike(new Produce(), new Assemble());
vehicle2.manufacture();
