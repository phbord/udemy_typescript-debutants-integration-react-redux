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
export class Cat extends Animal implements CarnivoreActions {
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