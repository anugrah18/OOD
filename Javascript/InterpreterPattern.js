// Abstract Expression class
class Expression {
  interpret() {}
}

// Terminal Expression for numbers
class NumberExpression extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }

  interpret() {
    return this.value;
  }
}

// Non-terminal Expression for addition operation
class AdditionExpression extends Expression {
  constructor(expression1, expression2) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret() {
    return this.expression1.interpret() + this.expression2.interpret();
  }
}

// Non-terminal Expression for subtraction operation
class SubtractionExpression extends Expression {
  constructor(expression1, expression2) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret() {
    return this.expression1.interpret() - this.expression2.interpret();
  }
}

// Example usage
// Construct expressions: 10 + (20 - 5)
const expression = new AdditionExpression(
  new NumberExpression(10),
  new SubtractionExpression(new NumberExpression(20), new NumberExpression(5))
);

// Interpret and evaluate the expression
const result = expression.interpret();
console.log("Result:", result);
