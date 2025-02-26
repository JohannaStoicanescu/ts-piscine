let tuple: [number, string, boolean] = [7, "hello", true];
let [a, b, c] = tuple;

const creerScore = (): [string, number] => {
  return ["Toto", 100];
};

const afficherScore = (score: [string, number]) => {
  console.log(`Le joueur ${score[0]} a un score de ${score[1]}.`);
};

afficherScore(creerScore());
