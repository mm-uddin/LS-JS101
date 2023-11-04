/* 
PEDAC

Problem:
*******
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line


Example:
Input:
  None
Output:
  1
  3
  5
  ...
  99
Data Structure:
 odd numbers

Algorithms:
  1. start from 1 and iterate up to 99 by every second number, like 1, 3, 5. The way to iterate will be i += 2
  2. print the numbers line by line
*/

for (let i = 1; i <= 99; i += 2){
    console.log(i);
  }
