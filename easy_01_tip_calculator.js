/* 
PEDAC

Problem:
*******

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
The program must compute the tip and the total amount of bill to the console. 
You can ignore input validation and assume that the user will enter numbers

Example:
  Input:
    200
    15
  Output:
    $30.00
    $230.00

Data Structure:
  User will input integer and return values will be integer too

Algorithm:
  After user inputs two numbers multiply the bill amount with tip percentage (convert it to float by dividing 100)
  return the product of the two numbers

*/

let readLineSync = require('readline-sync');
let billAmount = readLineSync.question("What is the bill? ")
let tipPercentage = readLineSync.question("What is the tip percentage? ")

billAmount = Number.parseFloat(billAmount)
tipPercentage = Number.parseFloat(tipPercentage)


let tipAmount = (billAmount * (tipPercentage / 100))

let totalBill = (billAmount + tipAmount)

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`);
