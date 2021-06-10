const readlineSync = require("readline-sync");


function askTvSerie() {
    let name = readlineSync.question("what is your favorite TV serie?");
    let productionYear = Number(readlineSync.question("what is the production Year of this TV serie?"));
    let namestMembers 
    let finish 

    let myObject = {

        name,
        productionYear,
        namestMembers1:[]
    };
do {
    namestMembers = readlineSync.question("What is the names of the cast members of this TV serie?");
    if (namestMembers!=="&") {
        myObject.namestMembers1.push(namestMembers);
    }
} while (namestMembers != "&");

return myObject;
}
let serie = askTvSerie();

console.log(JSON.stringify(serie));