function rand10(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
return Math.floor(Math.random() * (max - min +1)) +min;
// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}
console.log(rand10(1,10));
