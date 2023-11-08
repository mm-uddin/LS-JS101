/* 
PEDAC

Problem:
********
Write a function that takes a number as n argument. If the argument is a psoitive number,
return the negative of that number. If the argument is a negative number, return as-is.

Example:
  Input:
    5
  Output:
    -5
  Input:
    -3
  Output:
    -3
Data Structure:
  The program will receive integer as an input and return integer as output

Algorithm:
  1. 
*/

function negative(num){

// return Math.abs(num) * (-1)

// if (num >= 0){
//   return -num
// } else {
//   return num
// }
 
return (num >= 0)? -num : num;

}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
