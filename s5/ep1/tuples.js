var tuple = [7, "hello", true];
var a = tuple[0], b = tuple[1], c = tuple[2];
var creerScore = function () {
    return ["Toto", 100];
};
var afficherScore = function (score) {
    console.log("Le joueur ".concat(score[0], " a un score de ").concat(score[1], "."));
};
afficherScore(creerScore());
