/* 
PEDAC

Problem:
*******
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function
that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more 
non-alphabetic characters occur in a row, you should only have one space in the result
(i.e. the result string should never have consecutive spaces).

Example:
cleanUp("---what's my +*& line?");    // " what s my line "

Data Structure:
We need an array to store the non-alphabetic characters

Algorithm:
1. Declare a variable called regex and assign the values of no-alphabetic characters [^a-zA-Z0-9]
2. then we replace the regex in the string with spaces
*/

function cleanUp(str){
  let regEx = /[^a-zA-Z]/g;
  // console.log(str.match(regEx))
  return str.replace(regEx, ' ').replace(/\s+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "