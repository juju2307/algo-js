const readlineSync = require("readline-sync");
let question = readlineSync.question("what's your favorite number ?");
while (question !== 42) {
    console.log("Are you sure?");
    question = readlineSync.question("what's your favorite number ?");
 if (question === 42) {
 console.log("Felicitation!!?");
 break
 } 
}
