/* 
PEDAC

Problem:
********
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4,
unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year,
unless the year is also divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than
0 as input and returns true if the year is a leap year, or false if it is not a leap year

Example:
  Input:
    2016
  Output:
    true
  Input:
    2015
  Output:
    false
    
Data Structure:
  the year, the input is an integer value  and the return will be a boolean

Algorithm:
  1. If the number representing the year is (divisible by 4 AND not-divisible by 100 ) OR (divisible by 100 AND divisible by 400)
     then it's leap year and return true
  2. if none of the above two conditions that are separated by OR is true then return false      


*/

function isLeapYear(year){
  if (((year % 4 === 0) && (year % 100 !== 0)) || ((year % 100 === 0) && (year % 400 === 0))) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));
