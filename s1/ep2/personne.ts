interface Personne {
  readonly nom: string;
  readonly age: number;
  readonly rue?: string;
  readonly ville?: number;
}

const afficherPersonneAvancee = (p: Personne) => {
  if (p.rue && p.ville) {
    console.log(
      `Bonjour, je m'appelle ${p.nom} et j'ai ${p.age} ans et j'habite au ${p.rue} à ${p.ville}.`
    );
    return;
  }
  console.log(`Bonjour, je m'appelle ${p.nom} et j'ai ${p.age} ans.`);
};

const personne2 = {
  nom: "Alice",
  age: 25,
  rue: "rue de Paris",
  ville: 75017,
};

const personne3 = {
  nom: "Zack",
  age: 25,
};

afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
