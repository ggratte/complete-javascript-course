'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//strict mode warns when we trying to use words that can be introduced in the future versions as well

// const interface = 'Audio';   
// const private = 543;  */


/* function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function (same meaning)
logger();
logger();
logger();
logger();

// The author likes to think of a function as a machine
// You give the food machine food and it returns processed food

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

/*  // Function declaration
// Can be called before we declare the function
const age1 = calcAge1(1991);    // Here we call the function before it's declared

function calcAge1(birthYear) {
    return 2037 - birthYear;
}


// Function expression
// Cannot be called before we declare the function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2) */

// Arrow function for ES6 forward
// This is also an expression since it returns a value
// Shorter to write since we dont need {} or return

/* const calcAge3 = birthYear => 2037 - birthYear

// Compared with this

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
// Call like regular functions
const age3 = calcAge3(1991);

// If we have more than one value in the function we can't ommit the return
// If we have more than one parameter we need to wrap paramters with ()

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1986, 'Göran')); */


/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice;
} */

/* const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}

const CalcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = CalcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement   // Return also break the if statement
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
    
    //return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike')); */

/* const averageFrom3 = (score1, score2, score3) => ((score1 + score2 + score3) / 3)

function checkWinner(dolphinsAVG, koalasAVG) {
    if (dolphinsAVG >= koalasAVG * 2) {
        console.log(`Dolphins won with ${dolphinsAVG} points`);
    } else if (koalasAVG >= dolphinsAVG * 2) {
        console.log(`Koalas won with ${koalasAVG} points`);
    } else {
        console.log('No team won');
    }
}

checkWinner(averageFrom3(44,23,72),averageFrom3(65,54,49));
checkWinner(averageFrom3(85,54,41),averageFrom3(23,34,27));
 */

/* const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

// We can mutate arrays even if we declare them as const
// We can't replace the entire array though. Like below

// friends = ['Bob', 'Alice']

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages); */

// Add elements to arrays

/* const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');  // The push value also returns the length value
console.log(friends);
console.log(newLength);

friends.unshift('John');  // Adds elements and also returns the length
console.log(friends);

// Remove elements from arrays

const removedFriend = friends.pop(); // Removes last and returns the removed element
console.log(friends);
console.log(removedFriend);

friends.shift(); // Removes first and return removed element

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('sadasa')); // Returns -1 if it can't find the element

console.log(friends.includes('Steven')); // Returns true if element exist
console.log(friends.includes('asd')); */


/* function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.2
    }
}

console.log(calcTip(100))

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals); */
/* 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

// Use this as default

console.log(jonas);
console.log(jonas.lastName)
console.log(jonas['lastName']);

// Use bracket notation when we need to compute an expression

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {job
    console.log('Wrong request!')
}

jonas.location = 'Portual';
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas); */

// Challange


/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`); */


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    /* calcAge: function(birthYear) {
        return 2037 - birthYear;
    } */

    /* calcAge: function ()
        return 2037 - this.birthYear; // This means the object that calls for this function. When we call jonas.calcAge this refer to jonas.
    } */
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
        },    // Here we also return a new value pair to this object which we can store for later.
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a': 'no'} driver's license`
    }
};


console.log(jonas.calcAge());
//console.log(jonas['calcAge'](1991));
console.log(jonas.age); // Now we can request the age from a stored value since the first function above also stored a new value
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

