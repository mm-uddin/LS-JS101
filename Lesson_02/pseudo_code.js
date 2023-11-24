/* 
Pseudocode

// Write a Pseudocode (both casual and formal) :

1. a function that returns the sum of two numbers

Casual:
Receive the two numbers from users and assign them to two variables.
return the sum of this two variables.

Formal:
START

-GET two numbers from users.
-SET two variables to these two numbers.
-PRINT the sum of these two variables

END

2. a function that takes an array of strings, and returns a string that is all those
strings concatenated together

Casual:
-First we declare a variable and assign empty string to it and name it myStr.
-Iterate through the array of string and during each iteration 
-We concatenate each string to the  myStr and update the myStr value with the concatenated string
-Return myStr

Formal:

START-
# Given a collection of string called stringArray
SET myStr = ''
SET iterator = 1
WHILE iterator <= stringArray length
  SET myStr = myStr + (value stringArray at iterator)
  iterator = iterator + 1

PRINT myStr

END

3. a method that takes an array of integers, and returns a new array with 
every other element from the original array , starting from the first element

casual:
-declare a new array variable and call it myArr
-iterate the given array starting from first and then every other index by index += 2
-add the elements to the myArr
-return myArr

Formal:

START

# Given an array of numbers called numArray
- SET a variable called myArr and assign it to empty arr []
- SET a variable iterator to 0 and iterate numArray
- WHILE iterator <= numArray length
    SET myArr = add value of numArray at iterator
    iterator = iterator + 2
- PRINT myArr

END

4. a function that determines the index of 3rd occurrence of a given character in a string
  For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return
  6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null;

Casual:
-The given string is called myStr
-And the given character called myChar
-Declare a variable called count
-iterate myStr from setting index = 0 to myStr length
-during iteration if character at myStr[index] === myChar increase the count by 1 and update the count value
-if count value reaches 3 break and return index value else break and return null

FORMAL:

START
# Given a string named myStr and character myChar
SET count = 0
SET iterator = 0
WHILE
  iterator <= myStr length
  IF myChar === value of myStr at iterator, count = count + 1
  IF count === 3 then break and PRINT iterator value at that point
  ELSE PRINT null   

END

5. a function that takes two arrays of numbers and returns the result of merging the arrays.
  The elements of the first array should become the elements at the even indexes of the returned array,
  While the elements at the even indexes of the returned array, while the elements of the second array
  should become the elements at the odd indexes. 

  Casual:
  -given two array arr1 and arr2
  -declare a variable called newArrLength and assign the addition of arr1 and arr2 length
  -declare a newArr and set the length to newArrLength
  -iterate from index = 0 upto newArrLength
  -if index is even add the item to newArr from arr1 else if of add from arr2
  -return newArr

  FORMAL:

  START

  # given two array of num1 and num2
  
  SET newArrLength = arr1 length + arr2 length
  SET newArr = []
  SER newArr length = newArrLength
  SET iterator = 0
  WHILE 
    iterator < newArr.length 
    IF (iteraror is even) then add element from num1 at neArr[iterator]
    IF (iterator is odd) then add element from num2 ar newArr[iterator]
  PRINT newArr

  END
  








*/