const readlineSync = require("readline-sync");
let number=1
while (number <= 100) {
    if ((number % 2) == 0) {
        console.log(number / 2)
    } else {
        console.log(number * 3)
    }
}