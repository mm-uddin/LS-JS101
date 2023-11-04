/* 
PEDAC

Probelm:
********
Create a function that takes 2 arguments, an array and an object. 
The array will contain 2 or more elements that, when combined with
adjoining spaces, will produce a person's name. The object will contain two keys, 'title' and "occupation", and
the appropriate values. Your function should return a gretting that uses the person's full name, and mentions the person's title.

Example:

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

// logs Hello, John Q Doe! Nice to have a Master Plumber around.


Data Structure:
1. Input value 1 is an array and input value 2 is an object
2. Will return string

Algorithm:
1. first we iterate over the array, convert it to a single string and assign it to a name variable
2. return the string with  name variable and the object's[property]


*/

function greetings(nameArray, titleObject){

return (`Hello, ${nameArray.join(" ")}! Nice to have a ${titleObject["title"]} ${titleObject["occupation"]} around.`);;

}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.