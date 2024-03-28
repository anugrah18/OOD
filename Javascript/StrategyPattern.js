"use strict";
// Concrete implementations of different superpowers
class FlySuperpower {
    useSuperpower() {
        return "Flying through the sky!";
    }
}
class SuperStrengthSuperpower {
    useSuperpower() {
        return "Lifting heavy objects with super strength!";
    }
}
class InvisibilitySuperpower {
    useSuperpower() {
        return "Becoming invisible!";
    }
}
class WebSwingerSuperpower {
    useSuperpower() {
        return "Swing through the city with webs!";
    }
}
//Context class (Superhero) that uses a superpower strategy
class Superhero {
    constructor(name, superpowerStrategy) {
        this.name = name;
        this.superpowerStrategy = superpowerStrategy;
    }
    useSuperpower() {
        return `${this.name} is ${this.superpowerStrategy.useSuperpower()}`;
    }
}
//Example usage
const superman = new Superhero("Superman", new FlySuperpower());
const hulk = new Superhero("Hulk", new SuperStrengthSuperpower());
const invisibleWoman = new Superhero("Invisible Woman", new InvisibilitySuperpower());
const spiderman = new Superhero("Spiderman", new WebSwingerSuperpower());
console.log(superman.useSuperpower());
console.log(hulk.useSuperpower());
console.log(invisibleWoman.useSuperpower());
console.log(spiderman.useSuperpower());
