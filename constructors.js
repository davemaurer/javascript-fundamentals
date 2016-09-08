/*
Sources: https://john-dugan.com/object-oriented-javascript-pattern-comparison/

 */

/* Using new: Causes four things to happen.
1. A new object is created by the constructor function
2. That object-A gets linked to a different object-B
3. That object-A gets bound as the 'this' keyword within the constructor function call
4. JavaScript implicitly returns 'this' at the end of the constructor function's execution
   if no value is returned by it.

  Prototypal Inheritance
delegation is a more apt description
When a new object is created from a another object in JavaScript, it links back to the parent prototype's properties
and methods instead of copying them. So if the prototype properties or methods change, so do the new object's.
 */


// FACTORY PATTERN

function makeStory(plot, protagonist, antagonist) {
  var s = new Story();

  s.plot        = plot;
  s.protagonist = protagonist;
  s.antagonist  = antagonist;
  s.summarize   = function () {
    alert('This is a story about the hero ' + protagonist + 'and the villain ' + antagonist
          + 'where they ' + plot + '.');
  };
  return s;
}

var sadStory = makeStory('everyone dies', 'unlucky person', 'mean person');

sadStory.summarize;

/* Problems with the above ^^:
- Inefficient. All methods declared in the factory function are copied to every new object, whether they
will be used or not.
- Vague type determination: The factory function returns a new object, so it will be of the type: Object,
and will not indicated the new instance's context.
 */


// CONSTRUCTOR PATTERN

function Story (plot, protagonist, antagonist) {
  this.plot        = plot;
  this.protagonist = protagonist;
  this.antagonist  = antagonist;
  this.summarize   = function() {
    alert('This is a story about the hero ' + protagonist + 'and the villain '
          + antagonist + 'where they ' + plot + '.');
  };
}

var sadStory = new Story('everyone dies', 'unlucky person', 'mean person');

/*
The above Constructor pattern solves the type determination problem. As seen below.
 */
// With a Factory:
console.log(sadStory.constructor === Story) // -> false

// With a Constructor
console.log(sadStory.constructor === Story) // -> true

// The Constructor pattern is also inefficient, since all methods are still copied to all new object instances.


// COMBINATION CONSTRUCTOR (or) PROTOTYPE pattern

function Story (plot, protagonist, antagonist) {
  this.plot        = plot;
  this.antagonist  = antagonist;
  this.protagonist = protagonist;
}

Story.prototype.summarize = function () {
    alert('This is a story about the hero ' + protagonist + 'and the villain '
          + antagonist + 'where they ' + plot + '.');
};

var sadStory = new Story('everyone dies', 'unlucky person', 'mean person');

sadStory.summarize();

/*
 The above is almost always the best choice when using a constructor. You can also assign functions/methods to
a prototype object using object literal syntax, as below. This is useful when you want to assign a new object to
a prototype, but also keep the constructor relationship.
  */

Story.prototype = {
  constructor: Story,
  summarize: function () {
    alert('This is a story about the hero ' + protagonist + 'and the villain '
          + antagonist + 'where they ' + plot + '.');
  }
}

/*
 This is simpler and cuts out the longer/chained dot notation. It also cuts down on the repitition because
you can store all methods inside of one prototype declaration. BUT assigning a new object to a prototype
loses the ability to determine type. Dot notation is usually preferable for debugging and clear type assignment.
  */


// DYNAMIC PROTOTYPE pattern

function Story (plot, protagonist, antagonist) {
  this.plot        = plot;
  this.antagonist  = antagonist;
  this.protagonist = protagonist;

  if ( typeof this.summarize !== 'function' ) {
    Story.prototype.summarize = function () {
        console.log('This is a story about the hero ' + protagonist + ' and the villain '
              + antagonist + ' where they ' + plot + '.');
    };
  }
};

var sadStory = new Story('everyone dies', 'unlucky person', 'mean person');
var happyStory = new Story('everyone becomes friends', 'friendly person', 'lonely person');

sadStory.summarize();

/*
 The Dynamic Prototype pattern encapsulates all information needed within a constructor, and has unique
instance properties as well as shared prototypal properties and methods.
  */


// OLOO Pattern
var Story = {
  init: function (hero, villain, ending) {
    this.hero =    hero;
    this.villain = villain;
    this.ending =  ending;
  },
  sayCar: function() {
    console.log('This is the story of ' + hero + ' and ' + villain + ' that ends ' + ending '.');
  }
};

var sadStory = Object.create(Story)
var happyStory = Object.create(Story)

sadStory.init('goodguy', 'badguy', 'badly');
happyStory.init('friendly girl', 'lonely girl', 'well');

/*
 The OLOO pattern, short for OBJECTS LINKED TO OTHER OBJECTS, created by Kyle Simpson, simplifies the previous,
more class-based design patterns aboveby creating objects direclty from other objects, eschewing constructor
functions.
  */
