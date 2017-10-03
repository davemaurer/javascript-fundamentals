// call(), apply() and bind() are all BUILT IN functions in JavaScript
// They controll what 'this' is when referring to an object in JS.


// All functions in JavaScript are given properties when they are invoked. They get a NAME property, which can be
// anonymous/optional, a CODE property that contains the invocable code inside the function, and all functions also
// get access to BUILT IN functions/methods. call, bind, and apply are three of them.

// Using bind()
// bind() is chained on to the end of a function (just the function, not a function call/invocation) to explicitly tell
// JavaScript what 'this' is when looking at properties.

var person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function() {

    var fullname = this.firstname + " " + this.lastname;
    return fullname;

  }
}

// above is a JS object with three properties. Two are strings, and the last is a function.

var logName = function(optionalarg1, optionalarg2) {

  console.log("Logged: " + this.getFullName());

}

// running logName(); like this will result in an error, getFullName is not a function, because in the scope of the logName
// function, getFullName is undefined, or, to put it another way, it doesn't exist in that context. We need to somehow get
// the person object created above inside of the logName function in order for that to work. Like below:

var logPersonName = logName.bind(person);
// The line above makes a copy of the logName function and binds the person object to it as 'this'.

logPersonName();

// You can also bind an object to 'this' directly when declaring a function, like this:

var logNameDirectly = function(arg1, arg2) {
  console.log("Logged using immediate binding: " + this.getFullName());

}.bind(person)

logNameDirectly();

// Using call()

// call() works just like using () to invoke a function, so unlike bind() which sets 'this' without invoking a function,
// call() actually invokes the function as it binds 'this' to an object.

logName.call(person); // will invoke the logName function we created above and bind the person object to 'this' at the same time.

// when using call() with arguments, the object you want 'this' bound to is always the first argument in the list.

logName.call(person, "arg1", "arg2");

// Using apply()

// apply() is used just like call(), but the arguments other than what you want 'this' bound to are expected in an array. So
// the object that will be bound to 'this' is still by itself, and anything else passed to the function needs to be in an array.
// Like this:

logName.apply(person, ["arg1", "arg2"]);

// If you want to use call() or apply() immediately, you can use an IIFE

(function(arg1, arg2) {
  console.log("Logged using immediate binding with apply(): " + this.getFullName());

}).apply(person, ["this", "that"]); // or .call(person, "this", "that")
