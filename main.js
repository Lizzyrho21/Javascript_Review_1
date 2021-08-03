function allTheseDarnAnswers()
{   //first challenge
    getAllNumbersBetween(3, 10);
    console.log(getAllNumbersBetween(3, 20));

    //second challenge
    multiplicationTable();
    console.log(multiplicationTable());

    //third challenge
    getThatNumberToMultiply(5);

}

















// 1. Integer Numbers Range
// Write a function in Javascript that takes two integer parameters num1 and num2 and
// returns all the numbers between them.
//  If x2 is lower than x1 it should return -1. 
//  Provide appropriate User feedback.

function getAllNumbersBetween(num1, num2) {
    var numbers = [];
    // Set a temporary variable i to start at value x.
    // As long as the value of i is less than the value y, increment it.
    // The loop will end when i is equal to y.
    for (var i = num1; num1 < num2; num1++) {
      numbers.push(num1);
    }
    return numbers;
  }

  //Let's check this

// This works! Let's break it down 

//1 function is declared because that is what the question is looking for
//2 an array is created to hold the numbers
//3a a 'for' loop is created: a temporary variable 'i' is created to hold num1.
//3b if num1 is less than num 2, num1 will add 1 to itself.
//4 'numbers.push(num1)' <= the array you want to be the container is set, 
//4b then the content of num1 is placed inside (hence inside the parenthesis).

//for summary, 
/* we make two containers, one to hold all of our code in and one to hold 
the code we want to show up but don't have yet. we want the computer to count for us
so we write a loop so it can do the math, then we want to take its answer and put
it somewhere we can see it so we can check it's work. thats why we return the equation 
we gave to it.*/


// ============================================================//

//2. Multiplications table
//Write a function that writes in the console or browser 
//the multiplication table (from 1 to 10).

// THINGS TO NOTE: We need to use an inner loop here
//EXAMPLE: Nested loops are useful for each pass through the outer loop.

 /*you need to repeat some action on the data in the outer loop.
  For example, you read a file line by line 
  and for each line you must count how many times the word “the” is found.
   The outer loop would read the lines
    and the inner loop would search each line for “the” 
    by looping through the words in the line.*/

//In our multiplication table, the outer loop is the list of numbers from 1-10,
//And the inner loop multiplies those numbers in order from 1-10
// 1*1, 2*2, 3*3...etc

//   '/n' mTo keep long concatenation output readable,
//  JavaScript provides two ways to create line breaks within your string.
//   The first is the newline character ( \n ). 
//   The newline character creates line breaks within the output of a string,
//    be it simply text or JavaScript-generated HTML.



function multiplicationTable(){



var result = 'x ';//declare a variable for the result of our table
for (var i = 0; i < 11; i++) { // create a loop that runs our first loop 10 times

     for (var j = 0; j < 11; j++) { //while the outer loop runs the inner one will too!

        if(i == 0 && j > 0){
          result += '[' + j + ']';  //set the format of the table with the results
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] '; //set the format of the table with the results
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' '; //set the results of the table with the results
        }
    }
    result += '\n' //after each loop it skips to a new line
}
};



//=================================================================//

/*3. Multiplications table on demand
Write a function that writes in the console or browser a multiplication table
 (in one column) of any number passed as parameter.
  Only go from 1 to 10 times the number passed in.
  */

  // create a function that has two variables
  // create a block of code that takes those two variables and multiplies them
  //write the output in a console.log()
  function getThatNumberToMultiply(anyNumber) // A function is declared 
  {

  for(let i = 1; i <= 10; i++) { //We use a loop to multiply by some number 10 times

    // multiply i with number
    const result = i * anyNumber; //gone head and declare the result. we use the loop plus our temporary variable.

    // display the result
    console.log(`${anyNumber} * ${i} = ${result}`); //display!!
  }
}



//=============================================================//
// 4. Calculations and Operators

// Write a program that writes in the console or browser all the multiples of 23 less than 500 
// and at the end writes the sum of all of them. 
// PRO TIP: Google the % (modulus) operator on how you can use it 
// to determine the numbers divisible by 23.

// Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

// store our elements given where we can reuse them 
// let the computer run through all of the multiples of 23
// let the computer find all the multiples of 23 less than 500
// let the computer sum all of the multiples together and output it.



//A WORD ON THE MODULATOR// 
//The remainder operator (%) returns the remainder left over
 //when one operand is divided by a second operand.
 // It always takes the sign of the dividend.


const multiplesOfTwentyThree = []; //empty for now, but we will use it again























//   function oneMultiplierOnly(anynumber)
//   {
//     let resultOfMultiplier =  ' x ';

//     for( let anynum1 = 0; anynum1 <= 10; anynum1++) // set a loop for our first number to be multiplied 10 times starting at index 0
//     {
//         for ( let j = 0; j <= 10; j++) //second for loop runs with first. 
//         {

//               return  resultOfMultiplier += (anynum1*j) + ' ';  //set the results of the table with the results
                
//         }
        
//     } 





//   }
//   console.log(oneMultiplierOnly(5));
//  oneMultiplierOnly(5);


