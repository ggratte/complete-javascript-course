// 'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //  OLD ES5 style
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', 10);

// // skip an argument
// createBooking('LH123', undefined, 1000); // Undefined is the same as no argument at all an it will resort to deafult

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 246832855,
// };

// const checkIn = function (flighNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 246832855) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function
// const transformer = function (str, fn) {
//   //Functions passed as an argument are called callback functions
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callback all the time
// const high5 = function () {
//   console.log('🦾');
// };

// document.body.addEventListener('click', high5); // High five is here a callback function and the addEventlistener is a the higher order function

// ['Jonas', 'Marta', 'Adam'].forEach(high5);

// Abstraction means that we hide some details of the code implementation because we don't really care about all the details. That makes it easier to focus on higher level structure

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Higher Order Function')('Callback Function');

// const greetA = greeting => name => console.log(`${greeting} ${name}`);

// greetA('jonas')('cool');

// const calcAge3 = birthYear => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1992, 'Jonas'));

// const yearsUntilRetirement2 = birthYear => 65 - (2037 - birthYear);

// console.log(yearsUntilRetirement2(1992));

// bind method is similar to call but it only binds the function to a this-keyword and doesnt call it right away

// const addTaxRate = function (rate) {
//   return function (value) {
//     console.log(`${rate * value + value}`);
//   };
// };

// const calcVAT23 = addTaxRate(0.23);

// calcVAT23(100);

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const legalAnswers = [...this.options.keys()];
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`)
//     );
//     if (legalAnswers.includes(answer)) {
//       this.answers[answer]++;
//       this.displayResults();
//     } else {
//       alert('Answer out of range.');
//     }
//   },
//   displayResults(type = 'array') {
//     if (type.toLowerCase() === 'array') console.log(this.answers);
//     if (type.toLowerCase() === 'string') console.log(this.answers.join(', '));
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// //;
// //poll.displayResults('string');
// const test = {
//   answers: [1, 5, 3, 9, 6, 1],
//   Data2: [1, 5, 3, 9, 6, 1],
// };

// poll.displayResults.call(test, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
