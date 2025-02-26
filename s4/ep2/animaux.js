var AnimalEp2 = /** @class */ (function () {
    function AnimalEp2(nom) {
        this.nom = nom;
    }
    AnimalEp2.prototype.seDeplacer = function () {
        console.log("L'animal ".concat(this.nom, " se d\u00E9place."));
    };
    return AnimalEp2;
}());
var Chien = /** @class */ (function () {
    function Chien(nom) {
        this.nom = nom;
    }
    Chien.prototype.seDeplacer = function () {
        console.log("Le chien ".concat(this.nom, " court."));
    };
    return Chien;
}());
var Chat = /** @class */ (function () {
    function Chat(nom) {
        this.nom = nom;
    }
    Chat.prototype.seDeplacer = function () {
        console.log("Le chat ".concat(this.nom, " saute."));
    };
    return Chat;
}());
var animaux = [
    new AnimalEp2("Leo"),
    new Chien("Toby"),
    new Chat("Songi"),
];
var faireSeDeplacer = function (animaux) {
    animaux.forEach(function (animal) { return animal.seDeplacer(); });
};
faireSeDeplacer(animaux);
