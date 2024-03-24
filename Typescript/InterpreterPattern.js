// Terminal Expression for numbers
var NumberExpression = /** @class */ (function () {
    function NumberExpression(value) {
        this.value = value;
    }
    NumberExpression.prototype.interpret = function () {
        return this.value;
    };
    return NumberExpression;
}());
// Non-terminal Expression for addition operation
var AdditionExpression = /** @class */ (function () {
    function AdditionExpression(expression1, expression2) {
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    AdditionExpression.prototype.interpret = function () {
        return this.expression1.interpret() + this.expression2.interpret();
    };
    return AdditionExpression;
}());
// Non-terminal Expression for subtraction operation
var SubtractionExpression = /** @class */ (function () {
    function SubtractionExpression(expression1, expression2) {
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    SubtractionExpression.prototype.interpret = function () {
        return this.expression1.interpret() - this.expression2.interpret();
    };
    return SubtractionExpression;
}());
// Example usage
// Construct expressions: 10 + (20 - 5)
var expression = new AdditionExpression(new NumberExpression(10), new SubtractionExpression(new NumberExpression(20), new NumberExpression(5)));
// Interpret and evaluate the expression
var result = expression.interpret();
console.log("Result:", result);
