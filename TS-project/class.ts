// CLASS

class Hero {
  constructor() {
    console.log("A new hero is bord");
  }
  
}
class Warrior extends Hero {
  private _name: string;
  constructor() {
    super()
  }

  getName(): string {
    return this._name;
  }
  setName(n: string): void {
    this._name = n;
  }
}
let w: Warrior;
w = new Warrior();
w.setName("Conan");
console.log(w.getName()); //affiche Conan

class Warrior2 extends Hero {
  private _name: string;
  constructor() {
    super()
  }

  get name(): string {
    return this._name;
  }
  set name(n: string) {
    this._name = n;
  }
}
let w2: Warrior2;
w2= new Warrior2();
w2.name = "Chuck";
console.log(w2.name); //affiche Chuck


// INTERFACES
class Warrior3 extends Hero {
  private _name: string;
  private _caracteristic: ICaracteristic;
  constructor(caracteristic: ICaracteristic) {
    super();
    this._caracteristic = caracteristic;
  }

  get name(): string {
    return this._name;
  }
  set name(n: string) {
    this._name = n;
  }
  attack() {
    this._caracteristic.onAttack(this._caracteristic.strength + 20);
  }
}
interface ICaracteristic {
  strength?: number; //? équivaut à non obligatoire OU à strength: number | undefined;
  intelligence: number;
  weapon: string;
  onAttack: (damage: number) => void
}
const carac: ICaracteristic = {
  strength: 1,
  intelligence: 10,
  weapon: "axe",
  onAttack: (damage: number) => console.log("Le personnage à infligé " + damage + " de dégâts")
};
const w3: Warrior3 = new Warrior3 (carac);
w3.attack(); //affiche Le personnage à infligé 30 de dégâts
function doDo(c: ICaracteristic): void {
  console.log(c.intelligence);
}

interface Savour {
  s1: string;
  s2: "vanille" | "chocolat";
  s3?: "fraise";
}
const glaces: Savour = {
  s1: "pistache",
  s2: "chocolat",
  s3: "fraise"
};
class Glace implements Savour {
  s1: string;
  s2: "vanille" | "chocolat";
  s3?: "fraise";
}

interface Shape {
  readonly color: string; //readonly interdit que color soit modifiable
}
interface Square extends Shape {
  size: number;
}
const s: Square = {
  size: 12,
  color: "blue"
};
s.size = 30;

interface Identity {
  firstName: string;
  lastName: string;
}
interface Size {
  height: number;
  weight: number;
}
const human: Identity & Size = {
  firstName: "",
  lastName: "",
  height: 1,
  weight: 2
};
