const readlineSync = require("readline-sync");
let firstNumber = readlineSync.question('Can you give me a number integer ?');
let secondNumber = readlineSync.question('Can you give me a second number integer ?');
console.log (firstNumber%secondNumber);