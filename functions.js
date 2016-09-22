/*
Function objects in JavaScript are first class. This means they may:
- Be passed as an argument to another function
- Be returned from a function
- Be assigned to a variable
- Be stored in an object or array
 */

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
// naming functions helps with debugging, as the name shows up on the call stack.
var func = function foo () {
  console.log(typeof foo);
}

// immediately invoked function expression (IIFE): Wrapped in parens, the outside parens can invoke the enclosed
// function without the need to execute it. Applications include hiding infomation via the module pattern.
// The return value of an IIFE can itself be a function.
var foo = (function () {
  return 'bar';
})();

// function constructor: Older pattern and should be avoided.
// they do not have access to variables inside of their closing scope.
var FC = new Function('arg1', 'arg2', 'console.log(arg1 + ", " + arg2)');
// can also be declared without the word new
var FC = Function('arg1', 'arg2', 'console.log(arg1 + ", " + arg2)');
