const readlineSync = require("readline-sync");
let name = readlineSync.question('Can you give me your name please?');
let firstName = readlineSync.question('Can you give me your firts Name please?');
let city = readlineSync.question('Can you give me your city?');
console.log ("Your name is " + name + " " + firstName + " and your city is " + city);
