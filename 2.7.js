const readlineSync = require("readline-sync");
let n = readlineSync.question("can you enter a number between 1 and 10?");
let total = n;
for (let i = 1; i<=n; ++i) {
     let nouveaunombre = readlineSync.question("can you enter a new number between 1 and 10?");
    total = parseInt(total)+ parseInt(nouveaunombre);
    }
    console.log(total);
