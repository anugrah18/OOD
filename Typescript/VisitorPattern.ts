// Visitor Interface
interface Visitor {
  visitCircle(circle: Circle): number;
  visitSquare(square: Square): number;
}

// Concrete Visitor
class AreaVisitor implements Visitor {
  visitCircle(circle: Circle): number {
    return 3.14 * Math.pow(circle.radius, 2);
  }

  visitSquare(square: Square): number {
    return square.sideLength * square.sideLength;
  }
}

// Element Interface
interface Shape {
  accept(visitor: Visitor): number;
}

// Concrete Elements
class Circle implements Shape {
  constructor(public radius: number) {}

  accept(visitor: Visitor): number {
    return visitor.visitCircle(this);
  }
}

class Square implements Shape {
  constructor(public sideLength: number) {}

  accept(visitor: Visitor): number {
    return visitor.visitSquare(this);
  }
}

// Object Structure
const shapes: Shape[] = [new Circle(3), new Square(4), new Circle(5)];

// Client code
const areaVisitor = new AreaVisitor();
let totalArea = 0;
shapes.forEach((shape) => {
  totalArea += shape.accept(areaVisitor);
});

console.log("Total area:", totalArea);
