/*
  Décorateurs :
  - fonctions ou variables au-dessus des classes, qui vont exécuter du code
  - accession à des métadonnées (ex. noms de fonctions, paramètres, variables de classes, résultats retournés, nombre de classes...)
  - ajouter @ devant le décorateur pour l'appeler
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UneClasse = /** @class */ (function () {
    function UneClasse(v) {
        this._uneVariable = v;
    }
    UneClasse.prototype.multiply = function (a, b) {
        return a * b;
    };
    UneClasse = __decorate([
        classLogger
    ], UneClasse);
    return UneClasse;
}());
// Décorateurs de classes
function classLogger(classConstructor) {
    console.log("classLogger() ", classConstructor);
}
