/* 
PEDAC

Problem:
********
Build a program that asks the user to enter the length and width of a room in meters,
and then logs the area of the room to the console in both square meters and square feet

1 square meter == 10.7639 square feet


Example:
  Input:
    4, 8
  Output:
    32 square meter and 344.44 square feet

Data Structure:
  receive two integers one for length and one for width
  
Algorithm:
  return the area by multiplying the numbers for measurement in square meter and then multply the result with 10.7638 
  to convert to square feet

*/

let readLineSync = require('readline-sync');

let length = readLineSync.question("What is the length in meter: \n")
let width = readLineSync.question("What is the width in meter:  \n") 
let roomAreaSqrMeter = length * width
// let roomAreaSqrFeet = roomAreaSqrMeter * 10.7639

console.log(`The area of the room is ${roomAreaSqrMeter} square meters (${roomAreaSqrMeter * 10.7639} square feet)`);