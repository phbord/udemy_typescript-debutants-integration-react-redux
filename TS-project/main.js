var _a;
// Déclaration et types de bases
var a;
var b;
var c = { c: 1, d: "test", e: null, f: undefined };
var d;
var test = "TEST";
a = 1;
b = "salut";
d = true;
// Type Array
var food = ["banane", "fraise"];
var numbers = [1, 2];
var e;
e[1] = 2;
// Types number
var decimal = 6;
var hex = 0xf00d; //hexadécimal : commence avec 0x
var octal = 484; //octal : commence avec 0o
var binary = 42; //binaire : commence avec 0b
// Type never
function infiniteLoop() {
    while (true) { }
}
function error() {
    throw new Error("blablah");
}
// Type object
function create(o) { }
create({});
create(null);
create(undefined);
// Type Symbol
var sym1 = Symbol();
var sym2 = Symbol("key");
var sym3 = Symbol(1);
var sym4 = Symbol(1);
var obj = (_a = {},
    _a[sym3] = "xxxxx",
    _a);
console.log(sym2); //affiche Symbol("key")
console.log(sym3 === sym4); //affiche false
console.log(obj[sym3]); //affiche xxxxx
var F = /** @class */ (function () {
    function F() {
    }
    F.prototype[sym4] = function () {
        return "blablah";
    };
    return F;
}());
var f = new F();
console.log(F[sym4]()); //affiche blablah
// ENUM (fonctionnent comme un array et un objet)
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {})); // 0,1,2
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 0] = "red";
    Color2[Color2["blue"] = 10] = "blue";
    Color2[Color2["green"] = 11] = "green";
})(Color2 || (Color2 = {})); // 0,10,11
console.log(Color.blue); //affiche 1
console.log(Color2.blue); //affiche 10
// Fonctions
function isEvent(n) {
    if (typeof n === "string") {
        return Number.parseInt(n) % 2 === 0;
    }
    return n % 2 === 0;
}
console.log(isEvent(2)); //affiche true
console.log(isEvent(3)); //affiche false
console.log(isEvent("2")); //affiche true
console.log(isEvent("3")); //affiche false
function doSomething(o1, o2, o3) {
    console.log("do");
}
