// Déclaration et types de bases
let a: number;
let b: string;
let c: any = {c: 1, d: "test", e: null, f: undefined};
let d: boolean;
const test: string = "TEST";
a = 1;
b = "salut";
d = true;

// Type Array
const food: string[] = ["banane", "fraise"];
const numbers: Array<number> = [1, 2];
let e: [string, number, boolean];
e[1] = 2;

// Types number
let decimal: number = 6;
let hex: number = 0xf00d; //hexadécimal : commence avec 0x
let octal: number = 0o744; //octal : commence avec 0o
let binary: number = 0b101010; //binaire : commence avec 0b

// Type never
function infiniteLoop(): never { //lorsque le code ne peut jamais être atteint
  while (true) {}
}
function error(): never {
  throw new Error("blablah");
}

// Type object
function create(o: object | null): void {}
create({});
create(null);
create(undefined);

// Type Symbol
let sym1 = Symbol();
let sym2 = Symbol("key");
let sym3 = Symbol(1);
let sym4 = Symbol(1);
let obj = {
  [sym3]: "xxxxx"
};
console.log(sym2); //affiche Symbol("key")
console.log(sym3 === sym4); //affiche false
console.log(obj[sym3]); //affiche xxxxx
class F {
  [sym4]() {
    return "blablah"
  }
}
let f = new F();
console.log(F[sym4]()); //affiche blablah


// ENUM (fonctionnent comme un array et un objet)

enum Color {red, blue, green} // 0,1,2
enum Color2 {red, blue = 10, green} // 0,10,11
console.log(Color.blue); //affiche 1
console.log(Color2.blue); //affiche 10


// Fonctions

function isEvent(n: number | string): boolean {
  if (typeof n === "string") {
    return Number.parseInt(n) % 2 === 0;
  }
  return n % 2 === 0;
}
console.log(isEvent(2)); //affiche true
console.log(isEvent(3)); //affiche false
console.log(isEvent("2")); //affiche true
console.log(isEvent("3")); //affiche false

function doSomething(o1: number, o2: string, o3: Array<Boolean>) {
  console.log("do");
  
}
