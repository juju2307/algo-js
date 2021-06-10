const readlineSync = require("readline-sync");
let n = readlineSync.question("Can you give me a number?");
let arr = [];
let total = 0;
function average(arr) {
for (let i=0; i<arr.length; i++) {
total += arr[i];
}
    return total / arr.length;
    //fonction permettant de donner la moyenne des nombres d'une tableau
}
function min(arr) {
    return Math.min.apply(0,arr);
    //fonction permettant de donner le min d'un tableau
}
function max(arr) {
    return Math.max.apply(0,arr);
    //fonction permettant de donner le max d'un tableau
}
function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
 return Math.floor(Math.random() * (max - min +1)) +min;
}
function multiRand(n) { 
    for (let i = 1; i<=n; i++) {
   arr.push(rand10(1,10));
    }
   return arr;  
}
console.log([multiRand(n) + ", " + average(arr) + ", " + min(arr) + ", " + max(arr)]);