// Concrete Visitor
var AreaVisitor = /** @class */ (function () {
    function AreaVisitor() {
    }
    AreaVisitor.prototype.visitCircle = function (circle) {
        return 3.14 * Math.pow(circle.radius, 2);
    };
    AreaVisitor.prototype.visitSquare = function (square) {
        return square.sideLength * square.sideLength;
    };
    return AreaVisitor;
}());
// Concrete Elements
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.accept = function (visitor) {
        return visitor.visitCircle(this);
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square(sideLength) {
        this.sideLength = sideLength;
    }
    Square.prototype.accept = function (visitor) {
        return visitor.visitSquare(this);
    };
    return Square;
}());
// Object Structure
var shapes = [new Circle(3), new Square(4), new Circle(5)];
// Client code
var areaVisitor = new AreaVisitor();
var totalArea = 0;
shapes.forEach(function (shape) {
    totalArea += shape.accept(areaVisitor);
});
console.log("Total area:", totalArea);
