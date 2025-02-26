enum Direction {
  Nord,
  Sud,
  Est,
  Ouest,
}

const vecteurDirection = (direction: Direction): [number, number] => {
  return direction === Direction.Nord
    ? [0, 1]
    : direction === Direction.Sud
    ? [0, -1]
    : direction === Direction.Est
    ? [1, 0]
    : direction === Direction.Ouest
    ? [-1, 0]
    : [0, 0];
};
console.log("ep2");
console.log("Nord", vecteurDirection(Direction.Nord));
console.log("Sud", vecteurDirection(Direction.Sud));
console.log("Est", vecteurDirection(Direction.Est));
console.log("Ouest", vecteurDirection(Direction.Ouest));

//ep3
const deplacer = (
  point: [number, number],
  direction: Direction
): [number, number] => {
  const [directionX, directionY] = vecteurDirection(direction);
  return [point[0] + directionX, point[1] + directionY];
};

console.log("ep3");
console.log("Nord", deplacer([5, 5], Direction.Nord));
console.log("Sud", deplacer([5, 5], Direction.Sud));
console.log("Est", deplacer([5, 5], Direction.Est));
console.log("Ouest", deplacer([5, 5], Direction.Ouest));
