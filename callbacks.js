/*
A callback is a function passed to another function as an argument.
 */

/* Reference:
 https://www.youtube.com/watch?v=qN0dkXj7jc0
 https://www.quora.com/What-is-a-simple-explanation-of-higher-order-functions-and-callbacks-in-JavaScript
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

// You can use callbacks directly when invoking the higher order function the callback is associated with.

console.log(mashTogether('Hello', ' there!', function(hello, there) {
  return hello + there + ' You awesome person you!'
}));
// Gives us => Hello there! You awesome person you!


// Callbacks are used in many JavaScript built in functions, such as map.
var dogs = ['Rex', 'Daisy', 'Fido'];
dogs.map(function(x) {
  return x + ' is a good dog!'
});
// In the above example, the function passed in to map is a callback function. They are often broken out like this:
mapTheDogs = function(dog) {
  return dog + ' is cool.'
};
// Now we can use map with our mapTheDogs function expression as the callback:
dogs.map(mapTheDogs);

/*
Callbacks can also be part of callback hooks.
 */

images.forEach(function (image) {
  var img = new Image();
  img.onload = function () { // this function <--- back at the line beginning is the callback hook
    doSomeStuffToThe image;
  }
});
