class CaffeineBeverage:
    def prepare_recipe(self):
        self.boil_water()
        self.brew()
        self.pour_in_cup()
        self.add_condiments()

    def boil_water(self):
        print("Boiling water")

    def brew(self):
        pass

    def pour_in_cup(self):
        print("Pour into cup")

    def add_codiments(self):
        pass

class Coffee(CaffeineBeverage):
    def brew(self):
        print("Dripping coffee through filter")

    def add_condiments(self):
        print("Adding sugar and milk")


class Tea(CaffeineBeverage):
    def brew(self):
        print("Steeping the tea")

    def add_condiments(self):
        print("Adding lemon")


# Usage
coffee = Coffee()
print("Making coffee :")
coffee.prepare_recipe()
print("\n")
tea = Tea()
print("Making tea :")
tea.prepare_recipe()
