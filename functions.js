// Functions can be named and unnamed


// function expression, alse anonymous: Function name is optional (as in this example without one). The variable is
// hoisted, it's value is not, so defining after declaration will not work in this case.
var printThis = function () {
  console.log('This');
}

// function delcaration: They are hoisted, so the function call can happen
// before the function is declared. Delcarations cannot be defined inside of
// conditional statements or loops.
function printThis () {
  console.log('This');
}

// named function expression: The function name is not available outside of the function, so the global
// scope in this case will not have access to foo. This type of function is useful for recursion.
var func = function foo () {
  console.log(typeof foo);
}

