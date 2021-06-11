const readlineSync = require("readline-sync");
let number = readlineSync.question("Can you give me a number between 1 and 100 to guess the number?");
const random = Math.floor(Math.random() * 100);

 
while (number != random) {
 if (number < random) {
     console.log("Too low, try again");
     number = readlineSync.question("Guess the number:");
 }
      else {
         console.log("Too hight, try again");
         number = readlineSync.question("Guess the number:");
     }
     }
    
    console.log("Well guessed!");