// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
//const input = require('sync-input')
// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
/*console.log(`The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money
`)
*/

let water = 400;
let milk = 540;
let coffee = 120;
let disposableCups = 9;
let income = 550;

while (true) {
const decide =  input(`Write action (buy, fill, take, remaining, exit, special):`);
  if (decide == 'remaining') {
    console.log(`The coffee machine has:
  ${water} ml of water
  ${milk} ml of milk
  ${coffee} g of coffee beans
  ${disposableCups} disposable cups
  $${income} of money`);
  }
  

  if (decide == "buy") {
      let action = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: \n`);
      if (action == 1 && water >= 250 && coffee >= 16) {
          water -= 250;
          coffee -= 16;
          disposableCups -= 1
          income += 4; 
      } else if (action == 2 && water >= 350 && coffee >= 20 && milk >= 75) {
          water -= 350;
          coffee -= 20;
          milk -= 75;
          disposableCups -= 1
          income += 7; 
      } else if (action == 3 && water >= 200 && coffee >= 12 && milk >= 100) {
          water -= 200;
          coffee -= 12;
          milk -= 100;
          disposableCups -= 1
          income += 6; 
      } 
  } else if (decide == "fill") {
      let rwater = Number(input(`Write how many ml of water you want to add:\n`));
  let rmilk = Number(input(`Write how many ml of milk you want to add:\n`));
  let rcoffee = Number(input(`Write how many grams of coffee beans you want to add:`));
  let rd = Number(input(`Write how many disposable cups you want to add:`));
  water += rwater;
  milk += rmilk;
  coffee += rcoffee;
  disposableCups += rd;
  } else if (decide == "take") {
      console.log(`I gave you ${income}`);
      income -= income
  }
  
  else if (decide == 'exit') {
    break;
  }

  else if (decide == 'special') {
    let mwater = Number (input(`Write how many ml of water you need:\n`));
let mmilk = Number (input(`Write how many ml of milk you need:\n`));
let mcoffee = Number (input(`Write how many grams of coffee beans you need:`));
let userInput = Number (input(`Write how many cups of coffee you will need:`));
let cup = disposableCups
let make = 0;

while(true){
  if (mwater >= water && mmilk >= milk && mcoffee >= coffee) {
      water -= mwater;
      milk -= mmilk;
      coffee -= mcoffee;
      make += 1 }
    else {
       break;
     };
}

if (cup > userInput) {
  console.log(`Yes, I can make that amount of coffee (and even ${cup - userInput} more than that)`)
} else if (cup == userInput) { 
  console.log(`Yes, I can make that amount of coffee `)
} else if (cup < userInput) {
  console.log(`No, I can make only ${cup} cups of coffee`)
}
  }
}


