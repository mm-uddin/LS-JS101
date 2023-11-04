/* 
PEDAC

Problem:
********
Using the multiply() function from the "Multiplying Two Numbers" problem, 
write a function that computes the square of its argument (the square is the result 
of multiplying a number by itself)

Example:
  Input:
    5
  Output:
    25
Data Structure:
  Receives an integer and outputs an integer too

Algorithm:
  call the function multiply with the given num twice . multiply (num, num)
*/

function multiply(num1, num2){
  return num1 * num2
}

function square (num){
  return multiply (num, num)
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true