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

function feedAnimalList(animalList: Animal[]) {
  for (let a of animalList) {
    a.eat();
  }
  return animalList;
}

const cat = new Cat();
const kangaroo = new Kangaroo();
const animal = new Animal();
const fedAnimals: Animal[] = feedAnimalList([
  cat, kangaroo, animal
]); //affiche : miam miam miam

const fedCat: Cat = fedAnimals[0] as Cat; //Animal[] casté en Cat
fedCat.sleep(); //affiche : sleep 25h a day