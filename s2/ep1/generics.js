var tableauDeNombre = [1, 2, 3];
var tableauDeString = ["a", "b", "c"];
var tableauDobjet = [{ a: 1 }, { b: 2 }, { c: 3 }];
function premierElement(tableau) {
    return tableau[0];
}
console.log(premierElement(tableauDeNombre));
console.log(premierElement(tableauDeString));
console.log(premierElement(tableauDobjet));
