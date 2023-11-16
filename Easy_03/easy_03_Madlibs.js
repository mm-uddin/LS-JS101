/* 
PEDAC

Problem:
********
Madlibs is a simple game where you create a story template with "blanks" for words.
You, or another player, then construct a list of words and place them into the story,
creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, verb, an adverb, and an adjective,
and then injects them into a story that you create.

Example:

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

Data Structure:
The function return a string

Algorithm:
1. Ask for the noun, verb, adjective, and adverb from the user as input
2. print the output with pre-determined blanks in the original story string

*/

function madlib(){
  let readLineSync = require('readline-sync');
  let noun = readLineSync.question("Enter a noun: ")
  let verb = readLineSync.question("Enter a verb: ")
  let adjective = readLineSync.question("Enter an adjective: ")
  let adverb = readLineSync.question("Enter an adverb: ")

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!\n
The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.\n
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`)
}

madlib()