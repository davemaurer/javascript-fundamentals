// call(), apply() and bind() are all BUILT IN functions in JavaScript
// They controll what 'this' is when referring to an object in JS.


// All functions in JavaScript are given properties when they are invoked. They get a NAME property, which can be
// anonymous/optional, a CODE property that contains the invocable code inside the function, and all functions also
// get access to BUILT IN functions/methods. call, bind, and apply are three of them.

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

