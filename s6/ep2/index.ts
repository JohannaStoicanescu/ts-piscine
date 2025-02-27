import { Etudiant, NiveauCours, Cours, GestionCours } from "./gestionCours";

interface Professeur {
  id: number;
  nom: string;
  matiere: string;
}

const etudiant1: Etudiant = { id: 1, nom: "Toto", niveau: "Licence" };
const etudiant2: Etudiant = { id: 2, nom: "Tata", niveau: "Master" };

const cours1: Cours = {
  code: "JS",
  titre: "Javascript",
  niveau: NiveauCours.Debutant,
};
const cours2: Cours = {
  code: "PYTHON",
  titre: "Python",
  niveau: NiveauCours.Intermediaire,
};

const gestionCours = new GestionCours();

gestionCours.etudiants.push(etudiant1, etudiant2);
gestionCours.cours.push(cours1, cours2);

gestionCours.inscrireEtudiant("JS", etudiant1);
gestionCours.inscrireEtudiant("PYTHON", etudiant2);
gestionCours.inscrireEtudiant("JS", etudiant2);
