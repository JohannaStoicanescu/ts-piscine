interface Vehicule {
  marque: string;
  annee: number;
}

const isVehicule = (obj: any): obj is Vehicule => {
  return obj.marque && obj.annee;
};

const objetValide = { marque: "Toyota", annee: 2020 };
const objetInvalide = { marque: "Toyota" };

const afficherVehicule = (obj: any) => {
  if (isVehicule(obj)) {
    return `Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`;
  }
  return `Objet invalide pour un véhicule.`;
};

console.log(afficherVehicule(objetValide));
console.log(afficherVehicule(objetInvalide));
