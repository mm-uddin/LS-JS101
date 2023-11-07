/* 
PEDAC

Problem:
********
Build a program that logs when the user will retire and
how may more years the user has to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Dat Structure:
-Receives user's age and intended retirement age as integer
-output the difference between those two age as integer and 
  show the year in which user will retire

Algorithm:
  1. declare a variable userAge and assign user's age to it
  2. declare a variable retirementAge and assign user's retirement age
  3. Find the difference between two age and assign it to a variable ageDifference
  4. get the year from current year after the ageDifference. 

*/

function retirementAge(){
  let readLineSync = require("readline-sync")
  let userAge = parseInt(readLineSync.question("What is your age? "))
  let retirementAge = parseInt(readLineSync.question("At what age would you like to retire? "))
  let ageDifference = retirementAge - userAge

  let currentYear = new Date().getFullYear()
  
  let retirementYear = currentYear + ageDifference

  console.log(`It's ${currentYear}. You will retire in ${retirementYear}.
  You have only ${ageDifference} years to go!`);

}

retirementAge()