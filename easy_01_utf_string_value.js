/* 
PEDAC:

Problem:
********
Write a function that determines and returns the UTF-16 string value of a string passed in
as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character
in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value
of a character) 

Exapmple:
  Input:
    'Four score'
  Output:
    984
  Input:
    'a'
  Output:
    97  

Data Structure and Algorithm:
  1. We declare a variable called sum
  2.We iterate from 0 up string length
  3. For each index we determine the UTF-16 value using String.prototype.charCodeAt(index) 
     for that particular character at that particular index
  4. add the value to the sum and update the sum value
  5. return sum

*/

function utf16Value(str){
  let sum = 0;
  for (let i = 0; i < str.length; i++){
    sum += str.charCodeAt(i)
  }

  return sum;
}

const OMEGA = "\u03A9";


console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));
