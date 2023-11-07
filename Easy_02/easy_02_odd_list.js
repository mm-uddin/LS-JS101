/* 
PEDAC

Problem:
********
Write a function that returns an Array that contains every other element of an Array
that is passed in as an argument. The values in the returned list should be those
values that are in the 1st, 3rd, 5th and so on elements

Example:
  Input:
    [2, 3, 4, 5, 6]
  Output:
    [2, 4, 6]

Data Structure:
  -Receives an array as input. The array can be of integers or strings.
  - Returns an array

Algorithm:
  1. We declare a new variable 'oodList' and assign an empty array to it
  2. Then we iterate the given array from first element up to last element by skipping one i = i + 2
  3. And add (bu 'push' method) the element to the oddList Array
  4. return the oddList 


*/

function oddities(arr){
  let oddList = []
  for (let i = 0; i < arr.length; i += 2 ){
    oddList.push(arr[i])
  }
  return oddList;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []