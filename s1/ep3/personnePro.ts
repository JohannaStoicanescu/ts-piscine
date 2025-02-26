interface Employe {
  nom: string;
  poste: string;
}

interface Client {
  nom: string;
  entreprise: string;
}

type PersonnePro = Employe | Client;

const employe1 = {
  nom: "Alice",
  poste: "Développeuse",
};
const client1 = {
  nom: "Bob",
  entreprise: "Google",
};

const afficherInfoProfessionnelle = (p: PersonnePro) => {
  if ("poste" in p) {
    console.log(`Employé: ${p.nom} travaille comme ${p.poste}.`);
    return;
  }
  if ("entreprise" in p) {
    console.log(`Client: ${p.nom} est associé à l'entreprise ${p.entreprise}.`);
    return;
  }
};

afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
