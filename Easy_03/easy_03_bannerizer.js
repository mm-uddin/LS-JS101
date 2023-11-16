/* 
PEDAC

Problem:
********
Write a function that will take a short line of text, and write it to the console log within a box

Example:
logInBox('To boldly go where no one has gone before.');

and the output will be:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

Data Structure:
Input is string and out output is string

Algorithm:
1. Measure the length of the string and store it in a variable "stringLength"
2. print the string '+-' + '-' that will be repeated stringLength times and + '-+'
3. print the string '|' + (' ') that will be repeated stringLength times and + '|'
4. print the string '|' + 'text' and + '|'
5. print the string '|' + (' ') that will be repeated stringLength times and + '|'
6. print the string '+-' + '-' that will be repeated stringLength times and + '-+'
 
*/

//-------------------
// My Solution:
//------------------

// function logInBox (text) {
//   let stringLength = text.length;
//   console.log(`+-${'-'.repeat(stringLength)}-+`);
//   console.log(`| ${' '.repeat(stringLength)} |`);
//   console.log(`| ${text} |`);
//   console.log(`| ${' '.repeat(stringLength)} |`);
//   console.log(`+-${'-'.repeat(stringLength)}-+`);

// }

//------------------------
//LaunchSchool Solution:
//--------------------------


// function logInBox(text){
//   let horizontalLine = `+${'-'.repeat(text.length + 2)}+`
//   let emptyLine = `|${' '.repeat(text.length + 2)}|`
//   console.log(horizontalLine);
//   console.log(emptyLine)
//   console.log(`| ${text} |`)
//   console.log(emptyLine)
//   console.log(horizontalLine);

 
// }

//---------------------------------
// LaunchSchool First Modification
//---------------------------------

// function logInBox(text, length = 35){

//   let stringLength = text.length
//   let horizontalLine = `+${'-'.repeat((stringLength> length)? length + 2 : stringLength +2)}+`
//   let emptyLine = `|${' '.repeat((stringLength > length)? length + 2 : stringLength + 2)}|`
//   console.log(horizontalLine);
//   console.log(emptyLine)
//   console.log(`| ${(stringLength > length) ? text.slice(0,length): text } |`)
//   console.log(emptyLine)
//   console.log(horizontalLine);
  

// }


//---------------------------------
// LaunchSchool Second Modification
//---------------------------------

function logInBox(text, length = 35){


  let stringLength = text.length
  let horizontalLine = `+${'-'.repeat((stringLength> length)? length + 2 : stringLength +2)}+`
  let emptyLine = `|${' '.repeat((stringLength > length)? length + 2 : stringLength + 2)}|`
  console.log(horizontalLine);
  console.log(emptyLine)
  if (stringLength > length){
  // console.log(`| ${(stringLength > length) ? text.slice(0,length): text } |`)
    let numberOfLines = Math.ceil(stringLength / length)
    for (let i = 0; i < stringLength ; i += length){
      console.log(`| ${text.slice(i, ((i + length) > stringLength) ? stringLength : (i + length))} |`)
    }

  } else{
    console.log(`| ${text} |`)
  }
  console.log(emptyLine)
  console.log(horizontalLine);
  
}




logInBox('For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines ');
// logInBox('');
// logInBox("I want to go home")
