/* 
PEDAC

Problem:
********
Write a function that takes a positive integer, n, as an argument and logs a right triangle whose
sides each have n stars. The hypotenuse of the triangle (the diagonal side in the example images below)
should have one end at the lower-left of the triangle, and the other end at the upper-right.

Example:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Data Structure:

We take integer as an input and output is string

Algorithm:

1. We iterate from 1 to up to(equal) given integer using a for loop
2. At each index level we print ' 'X (n-i) * X (i)

*/

//  Solution:
//--------------


// function triangle(num){
//   for (let i = 1 ; i <= num; i++){
//     console.log(`${' '.repeat(num-i)}${'*'.repeat(i)}`)
//   }
// }


// launchSchool Solution:
//----------------------

function triangle(num){
  let spaces = num -1;
  let stars = 1;
while (num > 0){
  console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`)
  spaces -= 1
  stars += 1
  num -= 1
}

}

triangle(5)
triangle(9)
