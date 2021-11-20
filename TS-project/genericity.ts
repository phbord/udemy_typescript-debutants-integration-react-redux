class Animal {
  hasEaten: boolean = false;
  eat() {
    this.hasEaten = true;
    console.log("miam");
  }
  sleep() {
    console.log("zzz");
  }
}
class Cat extends Animal implements CarnivoreActions {
  kill() {
    console.log("kill like a cat");
  }
  sleep() {
    console.log("sleep 25h a day");
    
  }
}
class Kangaroo extends Animal implements CarnivoreActions {
  kill() {
    console.log("kill like a cat");
  }
}
interface CarnivoreActions {
  kill: () => void
}

const cat = new Cat();
const kangaroo = new Kangaroo();
const animal = new Animal();

function howManyElement<T>(elements: Array<T>) { //<T> équivaut à forcer un type
  console.log(elements.length); //affiche : 
  return elements.length;
  
}
howManyElement<Animal>([cat, kangaroo]);
howManyElement<Number>([1, 2, 3]);
howManyElement<string>(["", "3"]);
howManyElement([animal, "", 3]);