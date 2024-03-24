# Abstract Expression class
class Expression:
    def interpret(self):
        pass

# Terminal Expression for numbers
class NumberExpression(Expression):
    def __init__(self, value):
        self.value = value

    def interpret(self):
        return self.value

# Non-terminal Expression for addition operation
class AdditionExpression(Expression):
    def __init__(self, expression1, expression2):
        self.expression1 = expression1
        self.expression2 = expression2

    def interpret(self):
        return self.expression1.interpret() + self.expression2.interpret()

# Non-terminal Expression for subtraction operation
class SubtractionExpression(Expression):
    def __init__(self, expression1, expression2):
        self.expression1 = expression1
        self.expression2 = expression2

    def interpret(self):
        return self.expression1.interpret() - self.expression2.interpret()

# Example usage
if __name__ == "__main__":
    # Construct expressions: 10 + (20 - 5)
    expression = AdditionExpression(NumberExpression(10), SubtractionExpression(NumberExpression(20), NumberExpression(5)))

    # Interpret and evaluate the expression
    result = expression.interpret()
    print("Result:", result)
