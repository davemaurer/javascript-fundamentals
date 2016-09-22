/*
Functions are values
Higher order functions that have other functions passed into them
 */

// This is a function
function double(number) {
  return number * 2
}

// Now the function is assigned to a variable as an anonymous function
var double = function(number) {
  return number * 2
};

// The variable double is now a function expression, and can be used in other functions
function declareTheDouble(number) {
  console.log("The number " + number + " is now " + double(number) + "!")
}

declareTheDouble(12); // Gives => The number 12 is now 24!
