/* 
PEDAC

Problem:
********
Write a function that computes the sum of all numbers between 1 an some other number, inclusive, that
are multiples of 3 or 5.

Example:
  Input:
    3
  Output:
    3
  Input:
    5
  Output:
    8  (because 3 + 5, which are multiples of 3 and 5 between 1 and 5)  

Data Structure:
  -The number passed is an integer
  -We need array to store the multiples of 3 and 5 up to the number given as inputs
 
Algorithm:
  1. we declare a variable called multiples and assign to [] an empty array
  2. Now we iterate from 1 to upto that number and check if any number is divisible by 3 or 5.
  3. if it is divisible by 3  or 5 then we add the number inside our multiples array
  4.After the iteration is complete we add all the numbers inside the multiples array
    by using array.reduce() method    
    

  
*/


function multisum(num){
  let multiples =[]
  for (let i = 1; i <= num; i++){
    if (((i % 3 === 0) || (i % 5 === 0))){
      multiples.push(i)
    }


}
    
return multiples.reduce((acc, curr) => acc + curr, 0)
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));