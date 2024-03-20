export {};
// Define the strategy interface
interface SuperpowerStrategy {
  useSuperpower(): string;
}

// Concrete implementations of different superpowers
class FlySuperpower implements SuperpowerStrategy {
  useSuperpower(): string {
    return "Flying through the sky!";
  }
}

class SuperStrengthSuperpower implements SuperpowerStrategy {
  useSuperpower(): string {
    return "Lifting heavy objects with super strength!";
  }
}

class InvisibilitySuperpower implements SuperpowerStrategy {
  useSuperpower(): string {
    return "Becoming invisible!";
  }
}

class WebSwingerSuperpower implements SuperpowerStrategy {
  useSuperpower(): string {
    return "Swing through the city with webs!";
  }
}

//Context class (Superhero) that uses a superpower strategy
class Superhero {
  private name: string;
  private superpowerStrategy: SuperpowerStrategy;

  constructor(name: string, superpowerStrategy: SuperpowerStrategy) {
    this.name = name;
    this.superpowerStrategy = superpowerStrategy;
  }

  useSuperpower(): string {
    return `${this.name} is ${this.superpowerStrategy.useSuperpower()}`;
  }
}

//Example usage
const superman = new Superhero("Superman", new FlySuperpower());
const hulk = new Superhero("Hulk", new SuperStrengthSuperpower());
const invisibleWoman = new Superhero(
  "Invisible Woman",
  new InvisibilitySuperpower()
);
const spiderman = new Superhero("Spiderman", new WebSwingerSuperpower());

console.log(superman.useSuperpower())
console.log(hulk.useSuperpower())
console.log(invisibleWoman.useSuperpower())
console.log(spiderman.useSuperpower())
