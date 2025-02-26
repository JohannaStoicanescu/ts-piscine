abstract class Forme {
  abstract calculerSurface(): number;
}

class Rectangle extends Forme {
  largeur: number;
  hauteur: number;

  constructor(largeur: number, hauteur: number) {
    super();
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  calculerSurface() {
    return this.largeur * this.hauteur;
  }
}

class Cercle extends Forme {
  rayon: number;

  constructor(rayon: number) {
    super();
    this.rayon = rayon;
  }

  calculerSurface() {
    return Math.PI * (this.rayon ^ 2);
  }
}

const rectangle = new Rectangle(10, 5);
const cercle = new Cercle(5);

console.log(rectangle.calculerSurface());
console.log(cercle.calculerSurface());
