// Iterator Interface
class Iterator {
  next() {
    throw new Error("Method not implemented.");
  }
}

// Concrete Iterator
class MenuIterator extends Iterator {
  constructor(items) {
    super();
    this.items = items;
    this.index = 0;
  }

  next() {
    if (this.hasNext()) {
      return { value: this.items[this.index++], done: false };
    } else return { value: null, done: true };
  }

  hasNext() {
    return this.index < this.items.length;
  }
}

// Aggregate Interface
class Aggregate {
  createIterator() {
    throw new Error("Method not implemented.");
  }
}

// Concrete Aggregate
class DinnerMenu extends Aggregate {
  constructor() {
    super();
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }

  createIterator() {
    return new MenuIterator(this.courses);
  }
}

// Example usage
const dinnerMenu = new DinnerMenu();
dinnerMenu.addCourse("Appetizer: Samosa");
dinnerMenu.addCourse("Main Course: Butter Chicken with rice");
dinnerMenu.addCourse("Dessert: Gulab Jamun");

const iterator = dinnerMenu.createIterator();
console.log("Tonight's Dinner Menu:");
let menuItem = iterator.next();
while (!menuItem.done) {
  console.log(menuItem.value);
  menuItem = iterator.next();
}
