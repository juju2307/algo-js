const readlineSync = require("readline-sync");

for (let number = 1; number <= 100; ++number) {
    if ((number % 2) == 0) {
        console.log(number / 2)
  } else {
        console.log(number * 3)
    }
}


