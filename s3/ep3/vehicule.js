var isVehicule = function (obj) {
    return obj.marque && obj.annee;
};
var objetValide = { marque: "Toyota", annee: 2020 };
var objetInvalide = { marque: "Toyota" };
var afficherVehicule = function (obj) {
    if (isVehicule(obj)) {
        return "Le v\u00E9hicule ".concat(obj.marque, " de l'ann\u00E9e ").concat(obj.annee, " est valide.");
    }
    return "Objet invalide pour un v\u00E9hicule.";
};
console.log(afficherVehicule(objetValide));
console.log(afficherVehicule(objetInvalide));
