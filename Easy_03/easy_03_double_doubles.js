/* 
PEDAC

Problem:
********
A double number is an even-length number whose left-side digits are exactly
the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, 
whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiply by two,
unless the argument is a double number; otherwise, return the double number as-is

Example:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676


Data Structure:
Input : Integer
Output: Integer

Algorithm:
1. Convert the number to a string and store it in a variable called stringNum.
2. Declare a variable stringLength and store the length of stringNum.
3. Declare a variable called stringHalf = stringLength / 2
4. Declare an empty arr
5. Iterate from index = 0 to upto stringHalf and check 
   whether the character at stringNum[stringLength-1-index] is equal to character at stringNum[stringhalf-1-index]
6. If the arr contains 'false' then it's not a double number and  return the  double of the number 
7. Else  return the number.
*/

// Solution 1 :
// -------------


function twice(num){
  let stringNum = String(num);
  let stringLength = stringNum.length;
  let stringHalf = Math.floor(stringLength /2);
  let arr = []
for (let i = 0; i < stringHalf; i++){
   if ((stringNum[stringLength-1-i]) === stringNum[stringHalf-1-i]){
    arr.push(true)
   } else {
    arr.push(false)
   }
  
}
if (arr.includes(false)){
  return num * 2;

} else{
  return num
}
}


// LaunchSchool Solution:
// ----------------------

// function twice(num){
//   if (isDoubleNum(num)) {
//     return num;
//   } else {
//     return num * 2;
//   }
// }

// function isDoubleNum(num){
//   let stringNum = String(num);
//   let stringLength = stringNum.length;
//   let stringHalf = Math.floor(stringLength / 2);
//   let leftString = stringNum.substring(0, stringHalf);
//   let rightString = stringNum.substring(stringHalf);

//   return leftString === rightString;
// }


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

