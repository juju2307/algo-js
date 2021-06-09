const readlineSync = require("readline-sync");
let question = readlineSync.question("can you enter a number between 1 and 7?");
if (question === 1) {
    console.log("The day is Monday");
} else if (question === 2) {
    console.log("The day is Thuesday");
} else if (question === 3) {
    console.log("The day is wensday");   
} else if (question === 4) {
    console.log("The day is Thursday");
} else if (question === 5) {
    console.log("The day is Friday");
    } else {
        console.log("The day is Saturday");
    }

