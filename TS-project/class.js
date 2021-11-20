// CLASS
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
var Hero = /** @class */ (function () {
    function Hero() {
        console.log("A new hero is bord");
    }
    return Hero;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        return _super.call(this) || this;
    }
    Warrior.prototype.getName = function () {
        return this._name;
    };
    Warrior.prototype.setName = function (n) {
        this._name = n;
    };
    return Warrior;
}(Hero));
var w;
w = new Warrior();
w.setName("Conan");
console.log(w.getName()); //affiche Conan
var Warrior2 = /** @class */ (function (_super) {
    __extends(Warrior2, _super);
    function Warrior2() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Warrior2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    return Warrior2;
}(Hero));
var w2;
w2 = new Warrior2();
w2.name = "Chuck";
console.log(w2.name); //affiche Chuck
// INTERFACES
var Warrior3 = /** @class */ (function (_super) {
    __extends(Warrior3, _super);
    function Warrior3(caracteristic) {
        var _this = _super.call(this) || this;
        _this._caracteristic = caracteristic;
        return _this;
    }
    Object.defineProperty(Warrior3.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    Warrior3.prototype.attack = function () {
        this._caracteristic.onAttack(this._caracteristic.strength + 20);
    };
    return Warrior3;
}(Hero));
var carac = {
    strength: 1,
    intelligence: 10,
    weapon: "axe",
    onAttack: function (damage) { return console.log("Le personnage à infligé " + damage + " de dégâts"); }
};
var w3 = new Warrior3(carac);
w3.attack(); //affiche Le personnage à infligé 30 de dégâts
function doDo(c) {
    console.log(c.intelligence);
}
var glaces = {
    s1: "pistache",
    s2: "chocolat",
    s3: "fraise"
};
var Glace = /** @class */ (function () {
    function Glace() {
    }
    return Glace;
}());
var s = {
    size: 12,
    color: "blue"
};
s.size = 30;
var human = {
    firstName: "",
    lastName: "",
    height: 1,
    weight: 2
};
