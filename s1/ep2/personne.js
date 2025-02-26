var afficherPersonneAvancee = function (p) {
    if (p.rue && p.ville) {
        console.log("Bonjour, je m'appelle ".concat(p.nom, " et j'ai ").concat(p.age, " ans et j'habite au ").concat(p.rue, " \u00E0 ").concat(p.ville, "."));
        return;
    }
    console.log("Bonjour, je m'appelle ".concat(p.nom, " et j'ai ").concat(p.age, " ans."));
};
var personne2 = {
    nom: "Alice",
    age: 25,
    rue: "rue de Paris",
    ville: 75017,
};
var personne3 = {
    nom: "Zack",
    age: 25,
};
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
