interface IAnimal {
  nom: string;
  seDeplacer(): void;
}

class AnimalEp2 implements IAnimal {
  nom: string;
  constructor(nom: string) {
    this.nom = nom;
  }
  seDeplacer() {
    console.log(`L'animal ${this.nom} se déplace.`);
  }
}

class Chien implements AnimalEp2 {
  nom: string;
  constructor(nom: string) {
    this.nom = nom;
  }
  seDeplacer() {
    console.log(`Le chien ${this.nom} court.`);
  }
}

class Chat implements AnimalEp2 {
  nom: string;
  constructor(nom: string) {
    this.nom = nom;
  }
  seDeplacer() {
    console.log(`Le chat ${this.nom} saute.`);
  }
}

const animaux: IAnimal[] = [
  new AnimalEp2("Leo"),
  new Chien("Toby"),
  new Chat("Songi"),
];

const faireSeDeplacer = (animaux: IAnimal[]) => {
  animaux.forEach((animal) => animal.seDeplacer());
};

faireSeDeplacer(animaux);
