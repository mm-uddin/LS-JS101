/*

Problem description:
Suppose you have an arbitrary natural number (the target) and a set of one or more additional natural numbers (the factors). 
Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors. 
For instance, if the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. 
The sum of these multiples is 78.

If no factors are given, use 3 and 5 as the default factors.

inputs:
  target number
  the set of factors
output:
  sum of multiples

Example;
target number: 
  20
the set of factors:
  3 and 5
multiples of 3:
  3, 6, 9, 12, 15, 18 (all have no remainder when divided by 3)

multiples of 5:
  5, 10, 15 (all have no remainder when divided by 5)   

*/

function sum_multiples(target, factors){
  let currentMultiple
  let multiples = []
  if (factors.length === 0){
    factors = [3, 5]
    }
   factors.forEach(factor => {
    for (currentMultiple = factor; currentMultiple < target; currentMultiple += factor){
      if (multiples.indexOf(currentMultiple) === -1){
        multiples.push(currentMultiple)
      }
    }
    
   }); 

  return multiples.reduce((accumulator, curr)=>{
    return accumulator + curr
  }, 0);


}
console.log(sum_multiples(20, [3, 5]))
console.log(sum_multiples(20, [19]))
console.log(sum_multiples(20, [5]))