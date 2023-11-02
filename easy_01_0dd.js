/* 
PEDAC
**********

Problem Statement:
Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if
the number's absolute value is odd. You mau assume that the argument is a valid integer value

Example:
    Input:
      3
    Output:
      true
    Input: 
      4
    Output:
      false

Datastructure:
  The input number is an integer and the return  will be a boolean value

Algortihm:
  1. convert the number to it's absolute value
  2. divide the number by 2. if remainder is equal to 1 then return true, else return false

*/

function isOdd(num){
  if (Math.abs(num) % 2 === 1){
    return true
  } else{
    return false
  } 

}

console.log(isOdd(19));
console.log(isOdd(-19));
console.log(isOdd(12));
console.log(isOdd(-12));
console.log(isOdd(0));
console.log(isOdd(878786162612128));


