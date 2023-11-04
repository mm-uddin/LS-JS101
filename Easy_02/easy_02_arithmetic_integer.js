/* 
PEDAC

Problem:
********
Write a program that prompts the user for two positive integers, and then
prints the results of the following operations on those two numbers: 
addition, subtraction, product, quotient, remainder and power. 
Do not worry about validating the input

Example:
  Input :
    23, 17
  Output:
    40
    6
    391
    1
    6
    1.41.....

Data Structure:
  Valid integer/float input and float/integer ou    
Algorithm:
  use the regular mathematical operations and display the results
*/

let readLineSync = require('readline-sync')
let num1 = parseInt(readLineSync.question("Enter the first number: "))
let num2 = parseInt(readLineSync.question("Enter the second number: "))


console.log(`${num1 } + ${num2} = ${num1 + num2}`);
console.log(`${num1 } - ${num2} = ${num1 - num2}`);
console.log(`${num1 } * ${num2} = ${num1 * num2}`);
console.log(`${num1 } / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`${num1 } % ${num2} = ${num1 % num2}`);
console.log(`${num1 } ** ${num2} = ${num1 ** num2}`);


