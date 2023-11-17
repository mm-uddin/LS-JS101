/* 
PEDAC

Problem:
********
Write a function that determines the mean (average) of the three scores passed to it,
and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.


Example:
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

Data Structure:
We receive three integers as input and return a string

Algorithm:
1. declare a variable called 'score' and assign it the value of the average of three numbers.
2. We check whether the score is  within a range of 90 and 100. If it is then we return the grade "A".
3. We check whether the score is  within a range of 80 and 90. If it is then we return the grade "B".
4. We check whether the score is  within a range of 70 and 80. If it is then we return the grade "C".
5. We check whether the score is  within a range of 60 and 70. If it is then we return the grade "D".
6. We check whether the score is  within a range of 0 and 60. If it is then we return the grade "F". 

*/

function getGrade(num1, num2, num3){
  let score = Math.floor((num1 + num2 + num3) / 3); 

  if ( (score >= 90) && (score <= 100) ){
    return "A";
  } else if ( (score >= 80) && (score <= 90) ){
    return "B";
  } else if ( (score >= 70) && (score <= 80) ){
    return "C";
  } else if ( (score >= 60) && (score <= 70) ){
    return "D";
  } else {
    return "F";
  }
}




console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"