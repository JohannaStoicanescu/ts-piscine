const tableauDeNombre = [1, 2, 3];
const tableauDeString = ["a", "b", "c"];
const tableauDobjet = [{ a: 1 }, { b: 2 }, { c: 3 }];

function premierElement<Type>(tableau: Array<Type>): Array<Type>[0] {
  return tableau[0];
}

console.log(premierElement(tableauDeNombre));
console.log(premierElement(tableauDeString));
console.log(premierElement(tableauDobjet));
