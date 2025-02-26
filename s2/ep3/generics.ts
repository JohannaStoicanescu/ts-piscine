interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

const maVoiture: Voiture = {
  marque: "Peugeot",
  modele: "208",
  annee: 2019,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getProperty(maVoiture, "marque"));
console.log(getProperty(maVoiture, "test")); 
