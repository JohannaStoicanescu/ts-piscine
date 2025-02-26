var maVoiture = {
    marque: "Peugeot",
    modele: "208",
    annee: 2019,
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(maVoiture, "marque"));
