/* 
PEDAC

Problem:
********
Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!"
then the computer yells back to the user.

Example:
Input:
  Bob
Output:
  Hello Bob
Input:
  Bob!
HELLO BOB. WHY ARE WE SCREAMING?

Data Structure:
  Receives a string and output a string

Algorithm:
  1. Reads the input with reaadline-sync and assign it to a name variable
  2. Check whether the name has a "!" mark in it
  3. If the name has ! greet in capital 
  4. Else greet in mixed case
*/

function greeting(){
let readLineSync  = require('readline-sync')
let name = readLineSync.question("What is your name? ")

if (name.includes("!")){
  console.log(`HELLO ${name.toUpperCase().replace("!", "")}. WHY ARE WE SCREAMING?`)
} else{
  console.log(`Hello ${name}.`)
}

}

greeting()