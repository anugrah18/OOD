# Define the strategy interface
class SuperpowerStrategy:
    def use_superpower(self):
        pass

# Concrete implementations of different superpowers
class FlySuperpower(SuperpowerStrategy):
    def use_superpower(self):
        return "Flying through the sky!"

class SuperStrengthSuperpower(SuperpowerStrategy):
    def use_superpower(self):
        return "Lifting heavy objects with super strength!"

class InvisibilitySuperpower(SuperpowerStrategy):
    def use_superpower(self):
        return "Becoming invisible!"

# Context class (Superhero) that uses a superpower strategy
class Superhero:
    def __init__(self, name, superpower_strategy):
        self.name = name
        self.superpower_strategy = superpower_strategy

    def use_superpower(self):
        return f"{self.name} is {self.superpower_strategy.use_superpower()}"

# Example usage
if __name__ == "__main__":
    # Create different superpower instances
    fly_power = FlySuperpower()
    strength_power = SuperStrengthSuperpower()
    invisibility_power = InvisibilitySuperpower()

    # Create superheroes with different superpowers
    superman = Superhero("Superman", fly_power)
    hulk = Superhero("Hulk", strength_power)
    invisible_woman = Superhero("Invisible Woman", invisibility_power)

    # Use superpowers
    print(superman.use_superpower())           # Output: "Superman is Flying through the sky!"
    print(hulk.use_superpower())               # Output: "Hulk is Lifting heavy objects with super strength!"
    print(invisible_woman.use_superpower())    # Output: "Invisible Woman is Becoming invisible!"
