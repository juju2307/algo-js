const readlineSync = require("readline-sync");
let shoeSize = readlineSync.question('Can you give me your shoe size ?');
let birthYear = readlineSync.question('Can you give me your birth year ?');
let multiplication = shoeSize * 2;
let result = multiplication + 5;
let newResult = result * 50;
let resultNew = newResult - birthYear;
let resultat = resultNew + 1766;
console.log (resultat);



