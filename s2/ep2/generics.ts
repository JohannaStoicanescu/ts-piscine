type NonEmptyArray<Type> = [Type, ...Type[]];

let validArray: NonEmptyArray<number> = [1, 2, 3]; 

function premierElement<Type>(
  tableau: NonEmptyArray<Type>
): NonEmptyArray<Type>[0] | void {
  if (tableau.length > 0) {
    return tableau[0];
  }
}

console.log(premierElement(validArray));
console.log(premierElement([]));
