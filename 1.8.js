const readlineSync = require("readline-sync");
let answer = readlineSync.question('Can you give me your gender?');
let question = 10;

console.log("Il vous reste" + " " + --question + " " + "questions.")
let firstAnswer = readlineSync.question('Can you give me your first name ?');
console.log("Il vous reste" + " " + --question + " " + "questions.")
let secondAnswer = readlineSync.question('Can you give me your name ?');
console.log("Il vous reste" + " " + --question + " " + "questions.")
let thirdAnswer = readlineSync.question('Can you give me your age?');
console.log("Il vous reste" + " " + --question + " " + "questions.")
let fourthAnswer = readlineSync.question('Can you give me your city ?');
console.log("Il vous reste" + " " + --question + " " + "questions.")
let fiveAnswer = readlineSync.question('how many brother are you?');
console.log("Il vous reste" + " " + --question + " " + "questions.")
let fivebisAnswer = readlineSync.question('how many sister are you?');
console.log("Il vous reste" + " " + --question + " " + "questions.")
let sixAnswer = readlineSync.question('what is the name of your dog?');
console.log("Il vous reste" + " " + --question + " " + "questions.")
let sevenAnswer = readlineSync.question('what is de name of the cat ?');
console.log("Il vous reste" + " " +-- question + " " + "questions.")
let eightAnswer = readlineSync.question('what is your favorite food?');
console.log ("Il était une fois, une  " + " " + answer + "qui s'appelait " + firstAnswer +  " "  + secondAnswer +
 ". Cette personne avait " + thirdAnswer + " " + "et vivait à" + " " +  fourthAnswer + "avec" + " " + fiveAnswer + " " + 
 "brother" + " " + "and" + " " + fivebisAnswer + " " + "sister." + " " + "Ils avaient un chien qui s'appelait" + " " 
 + sixAnswer + " " + "and un chat qui se prénomait" + " " + sevenAnswer + "." +  "Il aime beaucoup " + " "
  + eightAnswer + "." + 
  "il vous reste" + " " + --question + " "+ "questions" );


