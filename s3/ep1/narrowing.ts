const traiterValeur = (p: string | number) => {
  return typeof p === "string" ? p.length : p * 2;
};

console.log(traiterValeur("abc"));
console.log(traiterValeur(3));
