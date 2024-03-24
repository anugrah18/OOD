// Abstract Expression class
interface Expression {
  interpret(): number;
}

// Terminal Expression for numbers
class NumberExpression implements Expression {
  constructor(private value: number) {}

  interpret(): number {
    return this.value;
  }
}

// Non-terminal Expression for addition operation
class AdditionExpression implements Expression {
  constructor(
    private expression1: Expression,
    private expression2: Expression
  ) {}

  interpret(): number {
    return this.expression1.interpret() + this.expression2.interpret();
  }
}

// Non-terminal Expression for subtraction operation
class SubtractionExpression implements Expression {
  constructor(
    private expression1: Expression,
    private expression2: Expression
  ) {}

  interpret(): number {
    return this.expression1.interpret() - this.expression2.interpret();
  }
}

// Example usage
// Construct expressions: 10 + (20 - 5)
const expression: Expression = new AdditionExpression(
  new NumberExpression(10),
  new SubtractionExpression(new NumberExpression(20), new NumberExpression(5))
);

// Interpret and evaluate the expression
const result: number = expression.interpret();
console.log("Result:", result);
