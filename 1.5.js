const readlineSync = require("readline-sync");
let firstNumber = readlineSync.question('Can you give me a number with decimal part?');
let secondNumber = readlineSync.question('Can you give me a number with decimal part?');
console.log (Math.trunc(firstNumber)*secondNumber);