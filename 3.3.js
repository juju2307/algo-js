let numbersArray = [1 ,2, 3, 4, 5, 6, 7, 8, 9];
let tab1 = numbersArray;
numbersArray.push(10,11,12);
console.log(tab1)

let tab2 = [5, 7, 9, 11, 13, 15];
let tab3 = [].concat(tab1);
console.log(tab3)