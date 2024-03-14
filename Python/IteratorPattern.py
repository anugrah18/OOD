# Iterator Interface
class Iterator:
    def __iter__(self):
        raise NotImplementedError("Subclasses must implement __iter__ method.")

    def __next__(self):
        raise NotImplementedError("Subclasses must implement __next__ method.")

# Concrete Iterator
class MenuIterator(Iterator):
    def __init__(self, items):
        self._items = items
        self._index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self._index < len(self._items):
            item = self._items[self._index]
            self._index += 1
            return item
        else:
            raise StopIteration

# Aggregate Interface
class Aggregate:
    def create_iterator(self):
        raise NotImplementedError("Subclasses must implement create_iterator method.")

# Concrete Aggregate
class DinnerMenu(Aggregate):
    def __init__(self):
        self._courses = []

    def add_course(self, course):
        self._courses.append(course)

    def create_iterator(self):
        return MenuIterator(self._courses)

# Example usage
if __name__ == "__main__":
    dinner_menu = DinnerMenu()
    dinner_menu.add_course("Appetizer: Salad")
    dinner_menu.add_course("Main Course: Steak")
    dinner_menu.add_course("Dessert: Chocolate Cake")

    iterator = dinner_menu.create_iterator()

    print("Tonight's Dinner Menu:")
    for course in iterator:
        print(course)
