/* 
PEDAC

Problem;
Write a function named xor that takes two arguments, and returns true if exactly 
one of its arguments is truthy, false otherwise. Note that we are looking for a 
boolean result instead of a truthy/ falsy value as returned by || and &&.

Examples:
  Input:
    5, 0
  Output:
    true
  Input:
    1, 1
  Output:
    false

Data Structure:
The function may receive integers or boolean values. And the 
output will be boolean values

Algorithm:
1. we check if either of the two arguments is true using or then it will return true
2. an  we check if both are true or both are false then it will return false
    
*/

function xor(a,b){
  if ((a || b) && !(a && b)){
    return true
  } else {
    return false;
  }

}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(false, false) === false);   // true
