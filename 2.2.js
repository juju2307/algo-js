const readlineSync = require("readline-sync");
let min = readlineSync.question("can you give me a number min?");
let max = readlineSync.question("can you give me a number max?");
let current = readlineSync.question("can you give me a number current?");
if ((current > min) && (current < max)) {
    console.log("Félicitation!");
} else if (min>max) { 
    console.log("message d'erreur");
} else {
    console.log("peu mieux faire");
}