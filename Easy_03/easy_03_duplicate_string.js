/* 
PEDAC

Problem:
********
Write a function that takes a string argument and returns a new string
that contains the value of the original string with all consecutive 
duplicate characters collapsed into a single character

Example:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Data Structure:
Receives a string as input and returns a string as output

Algorithm:

1. We iterate the string from 1st index to last
2. We compare one character with the character at next index
3. We declare variable crunchString and assign it to empty string
4. based on the condition check done at step two we add the unique string to crunchString
5. return crunchString

*/


function crunch(str){
  let crunchString = ""
  for (let i = 0; i < str.length; i ++){
    if (str[i] !== str[i+1]){
      crunchString += str[i]
    }
    
  }
  return crunchString;

}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));
