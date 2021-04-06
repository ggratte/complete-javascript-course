'use strict';
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'New name'
console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)

let jonas_matilda = 'JM'; // Can only contain numbers, letters, _ or $
let name = 'Jonas' // Kind of reserved keyword but still legal to use... But dont use it
let Person = 'Jonas'  // Dont start with big character. Legal but a convention
let PI = 3.1415  // All uppercase are reserved for contant that we know wont change

let myFirstJob = 'Programmer';  // descriptive naming
let CurrenyJob = 'Teacher';     // descriptive naming


let javascriptIsFun = true;
console.log(true)

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
// console.log(typeof Jonas);  // Without quotations it will be interpreted as a variable

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
javascriptIsFun = 23;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);  // That the engine says that null is an object is regarded as a bug or an error in javascript. Not corrected for legacy reasons.
// Should be of type null(The same as with undefined)


// We use let keyword to express variables that can be changed later

let age = 30;
age = 31;               // This is called reassigning or mutating a value to a variable

const birhYear = 1991;  // Create a variable that we cannot reassign(immutable)
birhYear = 1990;        // This raise Error

const job;              // Since we can't change the variable it can't be declared empty(not legal) Error: Missing initializer in const declaration

// Use const by default and only let when we want to change the variable

// var should be completely ignored. It's the old way of defining variables. You should know about it for legacy reasons. prior to ES6.

var job = 'programmer';
job = 'teacher'

lastName = 'Gratte';    // It works to not declare the variable at all but it's a terrible way since this variable becomes global
// Always declare variable properly!
console.log(lastName);

// Operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firstName = 'Jonas';
const lastName = 'Gratte';
console.log(firstName + ' ' + lastName);

// Assignment operator

let x = 10 + 5  // In this line we actually have 2 operators. = and +
// + is assinged before the = according to compiling rules
console.log(x)

// Other assignment operators

x += 10;
console.log(x);

x *= 10;
console.log(x);

x++;
console.log(x);

x--;
x--;
console.log(x);

// Comparison operators: >, <, >=, <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;   // The comparison operator vill return a boolean that can be stored

console.log(now - 1991 > now - 2018)  // Simple doing all the things in one line



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)

// Javascript has a order of which operators are executed

let x, y;
x = y = 25 - 10 - 5;        // Equal operators are assigned from right to left
console.log(x, y);          // If it was left to right x would still be undefined

const averageAge = (ageJonas + ageSarah) / 2 
console.log(ageJonas, ageSarah, averageAge);



const markWeight = 78;
const markHeight = 1.69;

const markWeightTest2 = 95;
const markHeightTest2 = 1.88;

const johnWeight = 92;
const johnHeight = 1.95;

const johnWeightTest2 = 85;
const johnHeightTest2 = 1.76;

const markBmi = markWeight / markHeight ** 2
const johnBmi = johnWeight / johnHeight ** 2
const BmiMarkHigher = markBmi > johnBmi
console.log(markBmi, johnBmi, BmiMarkHigher);

const markBmiTest2 = markWeightTest2 / markHeightTest2 ** 2
const johnBmiTest2 = johnWeightTest2 / johnHeightTest2 ** 2
const BmiMarkHigherTest2 = markBmiTest2 > johnBmiTest2
console.log(markBmiTest2, johnBmiTest2, BmiMarkHigherTest2);



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

// template literals. New easier way to write strings

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

// multi line strings with template literals

console.log('String with \n\
multiple \n\
lines');            // This was the old way

console.log(`String with 
multiple 
lines`);            // NEW BETTER WAY

const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// If else is a "controlled structure"


const birthYear = 1998;
let century;                // A variable that we define inside a block will not be accessible outside. Therefore we adress it undefined here.

if(birthYear <= 2000) {
    century = 20;       
} else {
    century = 21;
}

console.log(century);



const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBmi = markWeight / markHeight ** 2
const johnBmi = johnWeight / johnHeight ** 2


if (markBmi > johnBmi) {
    console.log(`Mark has the higher BMI`) 
} else {
    console.log(`John has the higher BMI`) 
}

// Template literal to write boths BMI

console.log(`Marks BMI is ${markBmi}
Johns BMI is ${johnBmi}`)



// type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));   // Number() returns NaN(actually more exact an invalid number) if string cant be converted to number.

// This proves that it's an invalid number
console.log(typeof(Number('Jonas'))) // Type is still number even if value is NaN

console.log(String(23)); // Convert number to string

// type coercion

console.log('I am ' + 23 + ' years old')    
console.log('I am ' + '23' + ' years old')  //These are the same since + operator converts numbers to strings

console.log('23' - '10' - 3);       //Minus operator converts strings to numbers
console.log('23' * '2');            // * operator converts to number
console.log('23' / '2');            // / operator converts to number
console.log('23' / '2');            // > operator converts to number

console.log('23' + '10' + 3);       //Plus is the only operator that converts numbers to strings

let n = '1' + 1;    // '11'
n = n - 1           // 10  
console.log(n);     

console.log(2+3+4+'5');
console.log('10'-'4'-'3'-2+'5');



// 5 falsy values: 0, '', undefined, null, NaN
// The rest of values are truthy

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))
console.log(Boolean())
console.log(Boolean())

const money = 0;        // 0 is a falsy value and will be converted to false
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}


const age = 18;

if(age === 18) console.log('You just became an adult');

console.log(age === 18)       // === is strict equal which doesnt return true if both values arent of the same type 18 === '18' returns false

console.log(18 == '18')       // == is loose equal and thereby this returns true

// The loose equal can produce a lot of bugs and it's not recommended to use
// YOU BE BETTER OF IGNORING THAT THE LOOSE EQUAL EXIST
// USE THE STRICT EQUAL!!

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {      
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number!')
} else if (favourite === 9) {
    console.log('9 is also a cool number!')
} else {
    console.log('Number is not 23, 9 or 7!')
}

if(favourite !== 23) console.log('Why not 23?');        // !== not equal to(strict). Don't use loose(!=)



const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

/* if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
} 

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired)
console.log(hasDriversLicense && hasGoodVision && isTired)

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}



/* const dolphinsAVG = ((96 + 108 + 89) / 3)

const koalasAVG = ((88 + 91 + 110) / 3)

if(dolphinsAVG > koalasAVG) {
    console.log('Dolphins won!')
} else if (koalasAVG > dolphinsAVG) {
     console.log('Koalas won!')
} else if (koalasAVG === dolphinsAVG) {
    console.log('Both Win the throphy')
};

console.log(`Dolphins AVG score: ${dolphinsAVG}
Koalas AVG score: ${koalasAVG}`) */

/*

const dolphinsAVG = ((77 + 11 + 101) / 3)

const koalasAVG = ((8 + 95 + 106) / 3)

if(dolphinsAVG > koalasAVG && dolphinsAVG >= 100) {
    console.log('Dolphins won!')
} else if (koalasAVG > dolphinsAVG && koalasAVG >= 100) {
     console.log('Koalas won!')
} else if (koalasAVG === dolphinsAVG && koalasAVG >= 100) {
    console.log('Both Win the throphy')
} else {
    console.log('No one won')
}
console.log(`Dolphins AVG score: ${dolphinsAVG}
Koalas AVG score: ${koalasAVG}`)


const day = 'saturday';

// This can be more readable than an else if block
// Switch statement is still less and less used for some reason
// In this case below it makes sense and feels better(authors opinion)

switch(day){
    case 'monday':  // day === 'monday'  Strict comparison
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'saturday':
        console.log('ENjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!')
}

// A bit shorter but less readable in this situation

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === "thursday") {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === "sunday") {
    console.log('ENjoy the weekend :D');
} else {
    console.log('Not a valid day!')
}



// Expression is something that produces a value
// Could be compared to a declaration of a word in spoken languages
3 + 4
1991
true && false && !false

// Statements doesnt produces a value
// Full sentences that translates or actions 
// This else if statement for example doesnt produce a value
// Whenever something end with a ; thats a statment

if (23>10) {
    const str = '23 is bigger';  // The string is an expression
}

// This full line is the statement and an expression that produces a value goes within the {}
console.log(`I'm ${2037 - 1991} years old.`);



// Conditional operator is as the name suggest an operator
// An operator always produces a value and is thereby an expression
// This makes the conditiol operator useful since it returns a value
// Conditional operator is also called ternary operator 

const age = 14; 

const drink = age >= 18 ? 'wine': 'water';
console.log(drink);

// The same function with 6 lines instead of 1
let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2)

// With the ternery(condition operator) we can use it inside template literals

console.log(`I want to drink ${age >= 18 ? 'wine': 'water'}!`);



const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
*/

// Javascript Fundamentals - Part 1

/* // LECTURE: Values and Variables
let country1 = 'Sweden'
let continent1 = 'Europe'
let population1 = 10
console.log(country1, continent1, population1)

// LECTURE: Data Types
let isIsland1 = false
let language;
console.log(typeof(isIsland1));
console.log(typeof(population1));
console.log(typeof(country1));
console.log(typeof(language));

// LECTURE: let, const and var
const continent = 'Europe'
const country = 'Sweden'
const isIsland = false
let population = 10
language = 'Swedish'
// isIsland = true

// LECTURE: Basic Operators

population = population / 2
population++;
console.log(population > 6)
console.log(population < 33)

console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}`)

// LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} below average`)
}

4
console.log('9' - '5')
617
console.log('19' - '13' + '17')
23
console.log('19' - '13' + 17)
false
console.log('123' < 57)
1143
console.log(5 + 6 + '4' + 9 - 4 - 2)

// LECTURE: Equality Operators: == vs. ===

let numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

if (numNeighbours === 1) {  // When we use strict equal we cant use string input
    console.log('Only 1 border')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
console.log('No border')
} */
    
// LECTURE: Logical Operators

let language = 'en'
let population = 10
let isIsland = false
let country = 'Sweden'

if (language === 'en' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`)
}
else {
    console.log(`${country} does not meet your criteria`)
}


// LECTURE: The switch Statement

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D')
        break;
};


// LECTURE: The Conditional (Ternary) Operator

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);