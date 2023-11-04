/* 
PEDAC

Problem:
********
Write a program that asks the user to enter an integer greater than 0, then asks whether the
user wants to determine the sum or the product of all numbers between 1 and the entered
integer inclusive.

Example:
  Input:
    Integer : 4
    what operation: 's'
  Output:
    10; Because if we add from 1 to 4 (1 + 2 + 3 + 4 )

Data Structure and Algorithm:
  1. We get integer from the user and assign it to 'num'
  2. we declare a variable sum and assign it to zero
  3. we declare a variable product and assign it to 1
  4. We get either 's' or 'p' from the user
  5. Based on 's' or 'p' we run a if-else condition.
  6. if 's' then 
  7. we iterate from 1 up to num and each time inside the for loop we update the sum
  8. else 'p' then 
  9. we iterate from 1 up to num and each time inside the for loop we update the product and         
*/

let readLineSync = require('readline-sync')
let num = parseFloat(readLineSync.question("Please enter an integer greater than 0: "))
let operation = readLineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ')
let sum = 0
let product = 1

switch (operation){
  case 's' :
    for (let i = 1; i <= num; i++){
      sum += i
    }
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
  break;
  
  case 'p':
    for(let i = 1; i <=num; i++){
      product *= i
    }
    console.log(`The product of the integers between 1 and ${num} is ${product}.`);
    break;
}

