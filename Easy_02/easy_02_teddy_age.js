/* 
PEDAC

Problem:
********
Build a program that randomly generates Teddy' age, and logs it to the console.
Have the age be a random number between 20 and 120 (inclusive).

Example:
  Input:
    none
  Output:
    Teddy is 60 years old

Data Structure:
  Returns and integer
Algorithm:
1. Using math.random module we generate a random number
2. using math.floor we take the integer value and multiply it by 100
3. And finally we subtract the random number from 120 
   ensuring its always between 20 and 120 because 


*/

function age (min, max){

let age = Math.floor(Math.random() * (max - min + 1) + min)

console.log(`Teddy is ${age} years old!`);

}

age(20, 120)