var Direction;
(function (Direction) {
    Direction[Direction["Nord"] = 0] = "Nord";
    Direction[Direction["Sud"] = 1] = "Sud";
    Direction[Direction["Est"] = 2] = "Est";
    Direction[Direction["Ouest"] = 3] = "Ouest";
})(Direction || (Direction = {}));
var vecteurDirection = function (direction) {
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
var deplacer = function (point, direction) {
    var _a = vecteurDirection(direction), directionX = _a[0], directionY = _a[1];
    return [point[0] + directionX, point[1] + directionY];
};
console.log("ep3");
console.log("Nord", deplacer([5, 5], Direction.Nord));
console.log("Sud", deplacer([5, 5], Direction.Sud));
console.log("Est", deplacer([5, 5], Direction.Est));
console.log("Ouest", deplacer([5, 5], Direction.Ouest));
