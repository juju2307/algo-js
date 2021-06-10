const readlineSync = require("readline-sync");

function randomizeCast(namestMembers1) {
    var currentIndex = namestMembers1.length, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [namestMembers1[currentIndex], namestMembers1[randomIndex]] = [
        namestMembers1[randomIndex], namestMembers1[currentIndex]];
    }
    return namestMembers1;
}

function askTvSerie() {
    let name = readlineSync.question("what is your favorite TV serie?");
    let productionYear = Number(readlineSync.question("what is the production Year of this TV serie?"));
    let namestMembers1 

    let myObject = {

        name,
        productionYear,
        namestMembers:[]
    };
do {
    namestMembers1 = readlineSync.question("What is the names of the cast members of this TV serie and to finish write & ?");
    if (namestMembers1!=="&") {
        myObject.namestMembers.push(namestMembers1);
    }
} while (namestMembers1 != "&");{

}

return myObject;
 }

let serie = askTvSerie();

console.log (JSON.stringify(serie));
console.log(JSON.stringify(randomizeCast(serie["namestMembers"])));
