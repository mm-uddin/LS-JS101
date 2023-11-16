/* 
PEDAC

Problem:
********
Write a function that takes one argument, a positive integer, and returns a string of alternating
'1' s and '0' s, always staring with a '1'. The length of the string should match the given integer.

Example:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Data Structure:
We need an array to store the 1 s and 0 s before converting the array to string

Algorithm:
1. declare an empty array
2. iterate from 0 to up to given integer
3. If the the index is odd add 1 to the array else add 0
4. convert the array to string


*/

function stringify(num){
  let stringArr = ''
  for (let i = 0; i < num; i++){
    if (i % 2 === 0){
      stringArr += '1'
    } else {
      stringArr += '0'
      
    }
  }

  return stringArr; 
}

console.log(stringify(6));
console.log(stringify(9));
console.log(stringify(4));
console.log(stringify(7));
