const readlineSync = require("readline-sync");
function calcSurface (length, width) {
    return length * width; //formule de la surface d'un rectangle
}
let length = readlineSync.question("Can you give me a length of a rectangle?");
let width = readlineSync.question("Can you give me a width of a rectangle?");
let surface = calcSurface (length, width)
console.log(surface);
