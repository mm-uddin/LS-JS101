/* 
PEDAC

Problem:
********
  Write a function that takes two strings as arguments, determines the length of the two strings, 
  and then returns the result of concatenating the shorter, the longer, and the shorter once again.
  You may assume that the strings are of different lengths.

Example:
  Input:
    "my", "school"
  Output:
    "myschoolmy"

Data Structure:
  determine the length of the string, an integer value.

Algorithm:
  1. determine the length of two strings and store them in two lenString1 and lenString2 variables
  2. compare the two lenString1 and lenString2. if (lenString1 < lenString2) then output will be  "string1string2string1"
  3. else if (lenString2 < lenString1) then output will be "string2string1string2"

*/

function shortLongShort(string1, string2){
  let lenString1 = string1.length
  let lenString2 = string2.length

  if (lenString1 < lenString2){
    return string1 + string2 + string1
  } else{
    return string2 + string1 + string2
  }
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
