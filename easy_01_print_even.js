/* 
PEDAC

Problem:
********
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line

Example:
  Input:
    None
  Output:
    2
    4
    6
    ....
    98

Data Structure:
  Even numbers, all integers as between the range of 1 to 99

Algorithm:
  start from 2 go up to 98 and print every second number, like 2, 4, 6  
*/


// My Solution:
for (let i = 2; i < 99; i += 2){
  console.log(i);
}