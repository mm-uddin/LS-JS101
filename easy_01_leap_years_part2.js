/* 
PEDAC

Problem:
********
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4,
unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year,
unless the year is also divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than
0 as input and returns true if the year is a leap year, or false if it is not a leap year.

Added Constraint in Part 2: The British Empire adopted the Gregorian Calendar in 1752, which was a leap year.
Prior to 1752, they used Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.
Using this information, update the function in part 01 exercise to determine leap years both before and after 1752


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
      


*/

function leapYearAfter(year){
  if (((year % 4 === 0) && (year % 100 !== 0)) || ((year % 100 === 0) && (year % 400 === 0))) {
    return true;
  } else {
    return false;
  }
  
}

function leapYearBefore(year){
  return year % 4 === 0;
}


function isLeapYear(year){
  if (year <= 1752){
    return leapYearBefore(year)
  } else {
    return leapYearAfter(year)
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
