import { inscriptionLogger } from "../ep1/mon-module";

export interface Etudiant {
  id: number;
  nom: string;
  niveau: string;
}

export enum NiveauCours {
  Debutant,
  Intermediaire,
  Avance,
}

export interface Cours {
  code: string;
  titre: string;
  niveau: NiveauCours;
}

class GestionCours {
  etudiants: Etudiant[] = [];
  cours: Cours[] = [];
  inscriptions: Map<string, Etudiant[]> = new Map();

  inscrireEtudiant(coursCode: string, etudiant: Etudiant): void {
    const cours = this.cours.find((cours) => cours.code === coursCode);
    if (cours) {
      if (!this.inscriptions.has(coursCode)) {
        this.inscriptions.set(coursCode, []);
      }
      this.inscriptions.get(coursCode)?.push(etudiant);
    } else {
      inscriptionLogger(`Le cours avec le code ${coursCode} n'existe pas.`);
    }
  }

  afficherInscriptions(): void {
    this.inscriptions.forEach((etudiants, coursCode) => {
      const cours = this.cours.find((c) => c.code === coursCode);
      if (cours) {
        etudiants.forEach((etudiant) => {
          inscriptionLogger(`- ${etudiant.nom} (${etudiant.niveau})`);
        });
      }
    });
  }
}

export { GestionCours };
