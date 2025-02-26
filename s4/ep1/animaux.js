var Animal = /** @class */ (function () {
    function Animal(nom) {
        this.nom = nom;
    }
    Animal.prototype.seDeplacer = function () {
        console.log("L'animal ".concat(this.nom, " se d\u00E9place."));
    };
    return Animal;
}());
var animal = new Animal("Leo");
animal.seDeplacer();
