'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Since ES6 we can also compute the keys using []

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  /* [`day ${3 + 3}`] */ [weekdays[5]]: {
    // The computation can be anything
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Old way
  openingHours: openingHours,
  // ES6 enchanced object literals. You dont need to add both key and key-value when you nest an object with the same name as the original inside.
  openingHours,

  // Old way
  orderOld: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // New easier way to write methods with slightly easier syntax. Doesnt need the function word
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', adress }) {
    console.log(
      `Order reveived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(...otherIngredients);
  },
};

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.toLowerCase().slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('GöRan Gratte');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
// console.log('JOnas'.padStart(25, '+')); // ++++++++++++++++++++JOnas
// console.log(message.padStart(25, '+').padEnd(30, '+')); // +++++++++++Go to gate 23!+++++

// const maskCreditCard = function (number) {
//   const str = number + ''; // An easy way to convert a number to a string(number+string=string)
//   const last = str.slice(-4);
//   console.log(last.padStart(str.length, '*'));
// };

// maskCreditCard(588553);
// maskCreditCard('4343582458588553');

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// let s1 = '2 + 2';
// console.log(eval(s1));
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('jonas'.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const fixCapitalization = function (firstName) {
//   const passengerLower = firstName.toLowerCase();
//   const passengerCorrect =
//     passengerLower[0].toUpperCase() + passengerLower.slice(1);
//   console.log(passengerCorrect);
// };

// fixCapitalization('AgdagAdagaA');

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// // Inefficient way
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// // Cleaner way
// const normalizedEmail = loginEmail.toLowerCase().trim(); // Since loginEmail.toLowerCase() is a string we can add additional string methods right away and dont need to make a new value in between
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// function compareEmail(email, loginEmail) {
//   const loginEmailCorrected = loginEmail.toLowerCase().trim();
//   console.log(
//     `${loginEmailCorrected === email ? 'Correct email' : 'Wrong email'}`
//   );
// }

// compareEmail(email, loginEmail);
// compareEmail(email, 'wrong@email.com');

// // Replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate')); // All passengers come to boarding gate 23. Boarding door 23! // This only replaces the first instance
// console.log(announcement.replaceAll('door', 'gate')); // Use this to replace multiple instances

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); // false
// console.log(plane.startsWith('Air')); // true

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // Practice exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };
// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks an a gun for protection');
// const plane = 'A320';

// console.log(plane[0]); // B
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]); // B

// console.log(airline.length); // 16
// console.log('B737'.length); // 4

// console.log(airline.indexOf('r')); // 6  // This returns the index of the first instance
// console.log(airline.lastIndexOf('r')); // 10
// console.log(airline.indexOf('portugal')); // -1  // Case sensitive
// console.log(airline.indexOf('Portugal')); // 8

// // Slice does not change the original string(primitives are immutable). Slice returns a new string.
// console.log(airline.slice(4)); // Air Portugal // The argument is the position at where the slicing will start
// console.log(airline.slice(4, 7)); // Air // The second argument is at which index it will stop(not include)

// // Use slice and indexOf combined to find words
// console.log(airline.slice(0, airline.indexOf(' '))); // TAP // (First substring until first space)
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //  Portugal  // (Last substring after last space instance) + 1 removes the actual space index

// console.log(airline.slice(-2)); // al
// console.log(airline.slice(1, -1)); // AP Air Portuga

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 💥');
//   else console.log('You got lucky 😄');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // Why does methods works on strings which are primitives??
// // The reason is that javascipt converts the string primitive into a new string object when we call a method on it
// // This process is called boxing because it takes our string and puts it into a box which is our object
// // Thats the reason why no method can change the string and only return new values

// console.log(new String('jonas'));
// console.log(typeof new String('jonas')); // object // Whenever we call a method it gets converted to an object

// console.log(typeof new String('jonas').slice(1));

// Maps are like objects but the key can be of any type
// Maps can't contain mehtods

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Maps are also iterables
// // Since maps has the same structure as objects we can iterate on them the same way. But since maps is an iterable(and object is'nt) we dont need to use the object.entries
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}, ${value}`);
// }

// const answer = Number(prompt('Your answer:'));
// //console.log(question.get(false));
// console.log(question.get(answer === question.get('correct')));

// // Convert map to array
// console.log([...question]); // These two returns exactly the same
// console.log([...question.entries()]); // These two returns exactly the same
// 2;
// // To use the methods below we need to convert them into new arrays
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal')); // Set method also returns the updated map allwos us to chain

// rest
//   .set('categories', [('Italian', 'Pizzeria', 'Vegetarian', 'Organic')])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open :D')
//   .set(false, 'We are closed :(');

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.get('name'));
// console.log(rest.get(true));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// rest.set([1, 2], 'Test'); // We can also use arrays or objects as map keys
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([1, 2])); // This doesnt work since [1,2] is an object and not a primitive. Objects are unique and cannot point to other objects like primitives
// // To make this work we need to create a variable to point at the object and then use that variable
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// Property NAMES
// const properties = Object.keys(openingHours); // Returns an array with the key values
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours); // Returns an array with the properties for each value
// console.log(values);
// console.log(typeof values);

// // Entire object
// const entries = Object.entries(openingHours); // Returns an array with nested arrays for each key-value pair
// console.log(entries);

// // Key, value
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close ${close}`);
// }

// Property VALUES

/* if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);

// console.log(restaurant.openingHours.mon.open); //restaurant.openingHours.mon is undefined and we get error
// WITH optional chaining
console.log(restaurant.openingHours.mon?.open); //If the property that is before this questionmark doesnt exist(not null or undefined. string or 0 is ok) it returns undefined

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
  openingHours.mon;
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty'); */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '' these will be true when working with the nullish coalescing operator ??)
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // This now returns the second value even if it's 0

// console.log('---- OR ----');

// // Use ANY data type, return ANY data type, short-curcuiting
// // || will return the first thruthy value or the last one if all is falsy
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Returns the first thruthy value

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// // Short curcuits when any value is false
// // && will return the FIRST FALSY value or the last thruthy if all are truthy
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Pizza', 'Spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// 1) Destructuring

// Rest is used to pack elements into an array

// const arr = [1, 2, ...[3, 4]]; // SPREAD since it's on the RIGHT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]; // REST operator since it's on the LEFT side of =
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...restOpenHours } = restaurant.openingHours;
// console.log(restOpenHours);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2, 1);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr]; // Spread operator(instead of bad example above)
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array as shallow copy(easier to use than object.assign for shallow copy)
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

// const combined = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(combined);

// spread operator works on all iterables
// Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// Real world example

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Since ES2018 we can also use spread operator to create new objects
// const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// Spread operators can only be used to create an array or passing values into a function
// For example we cannot use spread operator in a string literal
// console.log(`${...str} Schmedtmann`); // This is not a place where the program expects values separated by commas. Thereby you can't use spread operator

// restaurant.orderDelivery({ adress: 'via del Sole, 21', starterIndex: 2 });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Deconstructing and creating new variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values for objects
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); // we need to wrap the assignment since we can't start a new line with a curly bracket
// console.log(a, b);

// Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/* const arr = [2, 3, 4];
const a = arr[0];

// Deconstruct an array

const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second); */

// If we want to select multiple elements of choice we can leave "holes"
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables

// let [main, , secondary] = restaurant.categories;

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Recieve 2 return value from a function

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// // Destructuring in nested array
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(typeof team);
  //console.log(teamStr);
}

//console.log(Object.entries(game.scored));
// const scorers = {};
// // for (const [index, scorer] of Object.entries(game.scored)) {
// //   scorers[scorer] ? (scorers[scorer] = 1) : (scorer[scorer] += 1);
// // }

// for (const scorer of Object.values(game.scored)) {
//   scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
//   //   if (!scorers[scorer]) {
//   //     scorers[scorer] = 1;
//   //   } else scorers[scorer]++;
// }

// console.log(scorers);
// const [players1, players2] = game.players;
// console.log(players1, players2);
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const [...allplayers] = [...players1, ...players2];
// console.log(allplayers);
// const [...players1Final] = [...players1, 'Thiago', 'Countinho', 'Perisic'];
// console.log(players1Final);
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...playersScored) {
//   console.log(...playersScored);
//   console.log(playersScored.length);
// };

// printGoals('hey', 'Hopp');
// printGoals(...game.scored);

// console.log(
//   game.odds.team1 > game.odds.team2 || game.odds.team2 > game.odds.team1
// );

// console.log(game.odds.team1 > game.odds.x || 'team1' || 'team2');

// team1 < team2 && console.log('team1 has the best chance to win');
// team1 > team2 && console.log('team2 has the best chance to win');

// // for (const [index, scorer] of Object.entries(game.scored))
// for (const [index, player] of game.scored.entries()) {
//   // We use game.scored.entries() to get entries inside arrays
//   console.log(`Goal: ${index + 1} by ${player}`); // If this was an object we use Object.entries(game.scored)
// }

// const odds = Object.values(game.odds);
// let total = 0;
// for (const odd of odds) {
//   total += odd;
// }
// const avg = total / odds.length;
// console.log(avg);

// console.log(game.team1);
// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(`Odd of victory ${game[team] || 'draw'}`, odd);
// }

// We pass an iterable inside the set to create a new one
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// // Since strings are also iterables we can pass in a string
// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();         // Deletes all elements
// console.log(ordersSet);
// // console.log(ordersSet[0]); // There is no way to get values out of a set. If you need it you should use an array

// for (const order of ordersSet) console.log(order); // Looping is possible as in any other iterable

// // Sets are often used to remove duplicates
// // Example

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// // If we have an array this is another way to see the unique objecs inside
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('jonasschmedtmann').size);

// Set are a newer and more straight forward object introduced in ES6 but it's mostly used for removing duplicates or work with unique values. Beside that you can continue to work with arrays
// When you need to store the order and instances always use arrays. As well as when you need to manipulate data inside. Arrays has access to many more methods

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];

// console.log(events);

// const eventsSet = new Set();
// for (let eventx of gameEvents.values()) {
//   eventsSet.add(eventx);
// }

// const events2 = [...eventsSet];
// console.log(events2);

// console.log(gameEvents.delete(64));
// console.log(gameEvents);

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [time, event] of gameEvents) {
//   console.log(`${time < 45 ? '[FIRST' : '[SECOND'} HALF] ${time}: ${event}`);
// }
