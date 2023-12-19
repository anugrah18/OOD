"use strict";
// Concrete Products
class Car {
    constructor(transmission) {
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
class Motorcycle {
    start() {
        return "Motorcycle started";
    }
    stop() {
        return "Motorcycle stopped";
    }
}
// Concrete Products
class Truck {
    constructor(transmission) {
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
class ManualTruck extends Car {
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
// Concrete Creators
class CarFactory {
    createAutomobile(transmission) {
        const transmissionType = transmission === null || transmission === void 0 ? void 0 : transmission.toLowerCase();
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
class TruckFactory {
    createAutomobile(transmission) {
        const transmissionType = transmission === null || transmission === void 0 ? void 0 : transmission.toLowerCase();
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
class MotorcycleFactory {
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
