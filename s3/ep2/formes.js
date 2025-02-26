var Rectangle = /** @class */ (function () {
    function Rectangle(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    Rectangle.prototype.calculerSurface = function () {
        return this.largeur * this.hauteur;
    };
    return Rectangle;
}());
var Cercle = /** @class */ (function () {
    function Cercle(rayon) {
        this.rayon = rayon;
    }
    Cercle.prototype.calculerSurface = function () {
        return Math.PI * this.rayon * this.rayon;
    };
    return Cercle;
}());
var afficherSurface = function (forme) {
    if (forme instanceof Rectangle) {
        console.log("Ceci est un rectangle de surface ".concat(forme.calculerSurface(), "."));
    }
    if (forme instanceof Cercle) {
        console.log("Ceci est un cercle de surface ".concat(forme.calculerSurface(), "."));
    }
};
var rectangle = new Rectangle(10, 20);
var cercle = new Cercle(10);
afficherSurface(rectangle);
afficherSurface(cercle);
