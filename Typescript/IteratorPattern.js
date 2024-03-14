// Concrete Iterator
var MenuIterator = /** @class */ (function () {
    function MenuIterator(items) {
        this.items = items;
        this.index = 0;
    }
    MenuIterator.prototype.next = function () {
        if (this.hasNext()) {
            return { value: this.items[this.index++], done: false };
        }
        else
            return { value: null, done: true };
    };
    MenuIterator.prototype.hasNext = function () {
        return this.index < this.items.length;
    };
    return MenuIterator;
}());
// Concrete Aggregate
var DinnerMenu = /** @class */ (function () {
    function DinnerMenu() {
        this.courses = [];
    }
    DinnerMenu.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    DinnerMenu.prototype.createIterator = function () {
        return new MenuIterator(this.courses);
    };
    return DinnerMenu;
}());
// Example usage
var dinnerMenu = new DinnerMenu();
dinnerMenu.addCourse("Appetizer: Samosa");
dinnerMenu.addCourse("Main Course: Butter Chicken with rice");
dinnerMenu.addCourse("Dessert: Gulab Jamun");
var iterator = dinnerMenu.createIterator();
console.log("Tonight's Dinner Menu:");
var menuItem = iterator.next();
while (!menuItem.done) {
    console.log(menuItem.value);
    menuItem = iterator.next();
}
