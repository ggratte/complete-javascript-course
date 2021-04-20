'use strict';

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // var is function scoped and it's scope will be the entire function and not only this block
      const firstName = 'Steven'; // You can declare a already existing variable as well. Since it find the variable in the current block it wont make a lookup and thereby you can say that child variable override parents.
      output = 'NEW OUTPUT!'; // Reassigning outer scop's variable
      const str = `Oh, and you're a millenial, ${firstName}`; // const are block-scoped and will only be accessed in the if statement
      console.log(str);

      function add(a, b) {
        // Functions are also block-scoped IN STRICT MODE. If we remove strict mode functions are functions scoped
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial); // Since the add function is called inside a block and is block-scoped we can't access it here
    // add(2, 3); console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991); */

/* console.log(me); // undefined before declaration
//console.log(job);     // let still in TDZ
//console.log(year);    // const still in TDZ

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2, 3)); // Functions can be called before the function declaration
//console.log(addExpression(2, 3)); // const still in TDZ
//console.log(addArrow(2, 3));      // var is hoisted as undefined and will get a "No function" error

function addDecl(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart(); // At this point numProducts is undefined since it's a var declaration. Undefined is along with 0 also a falsy value and will trigger this function if we forget to declare the var before calling this function. USE CONST AND LET INSTEAD WHICH DOESNT HOIST FALSY VALUES LIKE VAR DO

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // Only var declared variables can be accessed through the window object
console.log(x === window.y);
console.log(x === window.z);
 */

/* console.log(this); // As standard this will point at the window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991); // the this-keyword will be undefined when we call a function like this */

/* const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // The arrow function doesnt get it's own this-keyword. Instead it uses the lexical this-keyword which is inherited from the parent scope. In this case window for the global scope.
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // The this-keyword is now the object calling the function. Which is also logged in the console.
    console.log(2037 - this.year); // This means we can use the this-keyword to access elements inside this object.
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge; // When separating the function from the object and make it a regular function. It's this-keyword will as every other function in the global scope be undefined
f(); // Thereby we don't get access to any this.year */

/* var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //const self = this; // self or that

    // Solution 1
    //const isMillenial = function () {
    //  console.log(self); // Even though this function is called within a method the principle that functions this-keyword is undefined. This function would have the exactly same this-keyword if it was placed in the global scope.
    // console.log(this.year >= 1981 && this.year <= 1996);
    //  console.log(self.year >= 1981 && self.year <= 1996);
    //};
    //const self = this; // self or that

    // Solution 2
    const isMillenial = () => {
      // ARROW FUNCTIONS ARE A GREAT WAY TO ACCESS "THIS" WHEN YOU CREATE A FUNCTION INSIDE A METHOD
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    // NEVER EVER USE AN ARROW FUNCTION AS A METHOD(inside an object)
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge(); */
/* 
// Arguments keyword
const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpression(2, 5);
addExpression(2, 5, 8, 12); // We can see all arguments in the function even if they werent parameters. It's perfectly legally to input infinite amount of arguments for regular functions.

var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};
addArrow(2, 5, 8); // Argument keyword doesnt exist in arrow functions. It's not legal to put more arguments than the parameters.
 */
/* 
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(friend);
console.log(me);
 */

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

// marriedJessica = {};  // We still can't change the const primitive to point at a new object in the heap

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // This will only work on first level objects. Objects inside objects will maintain the old reference.
// object.assign ONLY CREATES A SHALLOW COPY
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage', jessica2); // The updated family will show here as well since we only made a copy of the first object. The inside object(in this case a string) still points at the same place in the heap as the original.
console.log('After marriage', jessicaCopy);
