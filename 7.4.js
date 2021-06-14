const readlineSync = require("readline-sync");
let pizza = [];
let menu;
let run = true;

function menuchoice () {
  
  while (run) {
    menu = parseInt(readlineSync.question("Hello! Welcome to the Pizza Flavors Manager.\nPlease choose your action:\n 1 - List all the pizza flavors\n2 - Add a new pizza flavor \n3 - Remove a pizza flavor \n4 - Exit this programEnter your actions number\n"));

    switch (menu) {

  case 1 :
    AllFlavors(pizza);
    break;
case 2 :
     AddNewFlavor(pizza);
     break;
case 3 :
  RemoveFlavor(pizza);
  break;

case 4 :
   run = false;
    break;
    default : 
    break;
}
 if (menu < 1 || menu > 4) {
            readlineSync.question("Please press a button to restart the menu.");
 }
}
}
function AllFlavors() {
  for (elem of pizza) {
      console.log("\n"+(pizza.indexOf(elem)+1 + ") " + elem));
  }
}

function AddNewFlavor() {
  let answer1 = readlineSync.question("Can you give me your favorite  pizza flavor ?");
   pizza.push(answer1);
  
  console.log(pizza);
}

function RemoveFlavor() {
  let remove = parseInt(readlineSync.question("Enter the number of the element you would like to remove: "));
  pizza.splice((remove-1), 1);
  console.log("Here is your list of flavors: " + pizza + "\n");
}

function saveFlavors() {
  fs.writeFile("./saveFlavors.txt", JSON.stringify(pizza), function(error) {
      if (error) {
          console.log(error);
      }
  });
}
menuchoice();
saveFlavors();