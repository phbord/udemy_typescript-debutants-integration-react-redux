var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        this.hasEaten = false;
    }
    Animal.prototype.eat = function () {
        this.hasEaten = true;
        console.log("miam");
    };
    Animal.prototype.sleep = function () {
        console.log("zzz");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.kill = function () {
        console.log("kill like a cat");
    };
    Cat.prototype.sleep = function () {
        console.log("sleep 25h a day");
    };
    return Cat;
}(Animal));
var Kangaroo = /** @class */ (function (_super) {
    __extends(Kangaroo, _super);
    function Kangaroo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kangaroo.prototype.kill = function () {
        console.log("kill like a cat");
    };
    return Kangaroo;
}(Animal));
function feedAnimalList(animalList) {
    for (var _i = 0, animalList_1 = animalList; _i < animalList_1.length; _i++) {
        var a = animalList_1[_i];
        a.eat();
    }
    return animalList;
}
var cat = new Cat();
var kangaroo = new Kangaroo();
var animal = new Animal();
var fedAnimals = feedAnimalList([
    cat, kangaroo, animal
]); //affiche : miam miam miam
var fedCat = fedAnimals[0]; //Animal[] casté en Cat
fedCat.sleep(); //affiche : sleep 25h a day
