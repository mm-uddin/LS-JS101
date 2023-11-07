/* 
PEDAC

Problem:
********
Write a function that takes a non-empty string argument and returns the middle character(s)
of the string. If the string has an odd length, you should return exactly one character. 
If the string has an even length, you should return exactly two characters

Example:
  Input:
    'I Love JavaScript'
  Output:
    "a"
  Input:
    'Launch'
  Output:
    "un" 
Data Structure:
  Receives a string as input and outputs a string

Algorithm:
  1. Get the length of the string and assign it to a variable stringLength
  2. With a conditional if we check whether the length is even or odd
  3. If odd then we return the character using Math.ceil(stringLength/2) as the index
  4. Else if it is even we return the character at stringLength/2 index and stringLength/2 -1 index

 abcdefgh



*/

function centerOf(str){
  let stringLength = str.length
  let charIndex = Math.floor(stringLength/2) 
  if (stringLength % 2 === 1){
    return str[charIndex]
  } else{

    return (str[charIndex-1] + str[charIndex]) 
  }

}
console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School')); 
console.log(centerOf('Launch')); 
console.log(centerOf('Launchschool')); 
console.log(centerOf('x')); 
