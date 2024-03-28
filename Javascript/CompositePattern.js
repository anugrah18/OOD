// Component Interface
class Component {
  get_price() {
    throw new Error("Method not implemented.");
  }

  display() {
    throw new Error("Method not implemented.");
  }
}

// Leaf: Represents individual components
class Leaf extends Component {
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
  }

  get_price() {
    return this.price;
  }

  display() {
    console.log(`${this.name} : $${this.price}`);
  }
}

// Composite: Represents composite components
class Composite extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  get_price() {
    let total_price = 0;
    for (const child of this.children) {
      total_price += child.get_price();
    }
    return total_price;
  }

  display() {
    console.log(`${this.name}:`);
    for (const child of this.children) {
      child.display();
    }
  }
}

// Client code
const cpu = new Leaf("CPU", 300);
const ram = new Leaf("RAM", 100);
const gpu = new Leaf("GPU", 250);

const motherboard = new Composite("Motherboard");
motherboard.add(cpu);
motherboard.add(ram);
motherboard.add(gpu);

const keyboard = new Leaf("Keyboard", 20);
const mouse = new Leaf("Mouse", 15);

const peripherals = new Composite("Peripherals");
peripherals.add(keyboard);
peripherals.add(mouse);

const computer_system = new Composite("Computer System");
computer_system.add(motherboard);
computer_system.add(peripherals);

computer_system.display();
const total_price = computer_system.get_price();
console.log(`Total price of the computer system: $${total_price}`);
