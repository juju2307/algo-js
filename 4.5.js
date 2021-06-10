const readlineSync = require("readline-sync");
let x1 = readlineSync.question("Can you give me a number  of a point A?");
let y1 = readlineSync.question("Can you give me an other number  of a point A?");
let x2 = readlineSync.question("Can you give me a number  of a point B?");
let y2 = readlineSync.question("Can you give me an other number  of a point B?");
let A = (x1,y1);
let B = (x2,y2);
function calcDistance(A,B) {
    
    let y = x2 - x1;
    let x = y2 - y1;

    return Math.sqrt(x * x + y * y);
    //https://javascript.plainenglish.io/javascript-algorithm-distance-between-points-7fe0026857e3
    //cette fonction permet de calculer la distance entre 2 points en 2D.
}

console.log(calcDistance(A,B));

