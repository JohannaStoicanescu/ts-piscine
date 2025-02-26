var tableauVide = [];
var tableauNonVide = [1, 2, 3];
function premierElement(tableau) {
    if (tableau.length > 0) {
        return tableau[0];
    }
    return undefined;
}
console.log(premierElement(tableauVide));
console.log(premierElement(tableauNonVide));
