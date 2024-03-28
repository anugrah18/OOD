// Visitor Interface
class Visitor {
  visitCircle(circle) {
    return 3.14 * Math.pow(circle.radius, 2);
  }

  visitSquare(square) {
    return square.sideLength * square.sideLength;
  }
}

// Element Interface
class Shape {
  accept(visitor) {
    // This method should be implemented by concrete elements
    throw new Error("Method 'accept' must be implemented.");
  }
}

// Concrete Elements
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  accept(visitor) {
    return visitor.visitCircle(this);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  accept(visitor) {
    return visitor.visitSquare(this);
  }
}

// Object Structure
const shapes = [new Circle(3), new Square(4), new Circle(5)];

// Client code
const areaVisitor = new Visitor();
let totalArea = 0;
shapes.forEach((shape) => {
  totalArea += shape.accept(areaVisitor);
});

console.log("Total area:", totalArea);
