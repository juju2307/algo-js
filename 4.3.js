const readlineSync = require("readline-sync");
function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
 return Math.floor(Math.random() * (max - min +1)) +min;
}
let n = readlineSync.question("Can you give me a number between 1 and 10?");
let arr = [];
function multiRand(n) { 
    for (let i = 1; i<=n; i++) {
   arr.push(rand10(1,10));
    }
   return arr;  
}
console.log(multiRand(n));