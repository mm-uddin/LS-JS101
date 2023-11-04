/* 
PEDAC

Problem:
Write a function that returns the next to last word in the String passed to it as an argument.
Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.

Example:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

Data Structure:
input is a string and output will be string

Algorithm:
1. we need to split the string based on space " " and save it to an array variable myString. it will be an array
2. we return the string at position myString[myString.length-2]

*/

function penultimate(str){
  let myString = str.split(" ")
  return myString[myString.length -2]
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true