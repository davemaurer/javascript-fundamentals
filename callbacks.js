/*
A callback is a function passed to another function as an argument.
 */

var add = function(thing1, thing2) {
  return thing1 + thing2
};

var multiply = function(num1, num2) {
  return num1 * num2
};

var mashTogether = function(thing1, thing2, callback) {
  return callback(thing1, thing2)
};

console.log(mashTogether(1, 2, add)); // Gives us => 3
console.log(mashTogether('Hello', ' there!', add)); // Gives us => Hello there

// In the example above, the callback argument passed in to mashTogether(1, 2, add);, is the add function. So the
// add function IS the callback.
