const readlineSync = require("readline-sync");
let number = Number(readlineSync.question("Can you give me a positive integer?"));

function divisorsInteger(number) { //fonction qui permet de dire si le nombre est premier ou pas et donne les diviseurs du nombre
    let n = 2;
    let divisors = [n];
    
    while ( n < number) {
        n++ ;

    if(number % n === 0) {
     return divisors;
    }
     else {
         return "It's a prime number"
     }
    }
}
console.log(divisorsInteger(number));