export {};
// Iterator Interface
interface Iterator<T> {
  next(): { value: T; done: boolean };
}

// Concrete Iterator
class MenuIterator<T> implements Iterator<T> {
  private index: number = 0;
  constructor(private items: T[]) {}

  next(): { value: T; done: boolean } {
    if (this.hasNext()) {
      return { value: this.items[this.index++], done: false };
    } else return { value: null as unknown as T, done: true };
  }

  private hasNext(): boolean {
    return this.index < this.items.length;
  }
}

// Aggregate Interface
interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

// Concrete Aggregate
class DinnerMenu implements Aggregate<string> {
  private courses: string[] = [];

  addCourse(course: string): void {
    this.courses.push(course);
  }
  createIterator(): Iterator<string> {
    return new MenuIterator<string>(this.courses);
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
