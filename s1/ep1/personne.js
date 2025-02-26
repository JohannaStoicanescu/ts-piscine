var afficherPersonne = function (p) {
    console.log("Bonjour, je m'appelle ".concat(p.nom, " et j'ai ").concat(p.age, " ans"));
};
var personne1 = { nom: "Alice", age: 25 };
afficherPersonne(personne1);
