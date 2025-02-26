interface Personne1 {
  nom: string;
  age: number;
}

const afficherPersonne = (p: Personne1) => {
  console.log(`Bonjour, je m'appelle ${p.nom} et j'ai ${p.age} ans`);
};

const personne1 = { nom: "Alice", age: 25 };

afficherPersonne(personne1);
