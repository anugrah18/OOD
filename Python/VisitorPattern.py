# Visitor Interface
class Visitor:
    def visit_circle(self, circle):
        pass

    def visit_square(self, square):
        pass

# Concrete Visitor
class AreaVisitor(Visitor):
    def visit_circle(self, circle):
        return 3.14 * circle.radius ** 2

    def visit_square(self, square):
        return square.side_length ** 2

# Element Interface
class Shape:
    def accept(self, visitor):
        pass

# Concrete Elements
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def accept(self, visitor):
        return visitor.visit_circle(self)

class Square(Shape):
    def __init__(self, side_length):
        self.side_length = side_length

    def accept(self, visitor):
        return visitor.visit_square(self)

# Object Structure
shapes = [Circle(3), Square(4), Circle(5)]

# Client code
area_visitor = AreaVisitor()
total_area = 0
for shape in shapes:
    total_area += shape.accept(area_visitor)

print("Total area:", total_area)
