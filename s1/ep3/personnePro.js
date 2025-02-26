var employe1 = {
    nom: "Alice",
    poste: "Développeuse",
};
var client1 = {
    nom: "Bob",
    entreprise: "Google",
};
var afficherInfoProfessionnelle = function (p) {
    if ("poste" in p) {
        console.log("Employ\u00E9: ".concat(p.nom, " travaille comme ").concat(p.poste, "."));
        return;
    }
    if ("entreprise" in p) {
        console.log("Client: ".concat(p.nom, " est associ\u00E9 \u00E0 l'entreprise ").concat(p.entreprise, "."));
        return;
    }
};
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
