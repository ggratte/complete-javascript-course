'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// const user = 'Steven Thomas Williams';
// const createUsernames = function (user) {
//   return user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0].toUpperCase())
//     .join('');
// };

// console.log(createUsernames(user));

// const createUsernames2 = function (accs) {
//   let usernames = [];
//   accs.forEach(function (username) {
//     usernames.push(
//       username.owner
//         .toLowerCase()
//         .split(' ')
//         .map(name => name[0].toUpperCase())
//         .join('')
//     );
//   });
//   return usernames;
// };

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

// const calcDisplaySummary = function (movements) {
//   const incomes = movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const out = movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)}€`;

//   const interestRate = 0.012;

//   const interest = movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * interestRate > 1 ? deposit * interestRate : 0))
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interestRate = account.interestRate / 100;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * interestRate > 1 ? deposit * interestRate : 0))
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

// Even handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Display movements
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('delete');

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// // SPLICE // Mutates the original array by removing elements and return them
// console.log(arr.splice(2));
// console.log(arr);
// // We often use slice to remove elements.
// const arr2 = ['a', 'b', 'c'];
// console.log(arr2.splice(-1));
// console.log(arr2);

// const arr3 = ['0', '1', '2', '3', '4', '5', '6'];
// console.log(arr3.splice(1, 2)); // Splice workds different than slice here since the first argument is index but second is how many element it will remove
// console.log(arr3); // ["0", "3", "4", "5", "6"]

// // REVERSE - Also mutates the original array
// const arr4 = ['0', '1', '2', '3', '4', '5', '6'];
// console.log(arr4.reverse()); // ["6", "5", "4", "3", "2", "1", "0"]
// console.log(arr4); // ["6", "5", "4", "3", "2", "1", "0"]

// // CONCAT - Doesnt mutate the original
// const arr5 = [1, 2, 3];
// const arr6 = [4, 5, 6];
// const concatenated = arr5.concat(arr6);
// console.log(concatenated); // [1, 2, 3, 4, 5, 6]
// // same as - use your prefered
// console.log([...arr5, ...arr6]); // [1, 2, 3, 4, 5, 6]

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// Achive the same as above. The major difference with forEach vs for of loop is that you can't use break
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// // forEach also works for Maps and Sets

// // Maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${value} ${key}`);
// });

// // Sets
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// // For sets there is no key but instead of leaving this value empty it also passes the value as argument in order to keep the forEach method consistent
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${value}: ${key}`);
// });

// const dataJulia = [3, 5, 2, 12, 7];
// const dataKate = [4, 1, 15, 8, 3];
// const dataJuliaRemovedCats = dataJulia.slice(1, -2);
// // console.log(dataJuliaRemovedCats);

// // const commonData = [...dataJuliaRemovedCats, ...dataKate];
// // console.log(commonData);

// // const mergeData = function (...arrays) {
// //   console.log(arrays);
// //   let mergedData = [];
// //   arrays.forEach(function (array) {
// //     mergedData.push(...array);
// //   });
// //   return mergedData;
// // };

// const mergeArrays = function (arr2d) {
//   let mergedArr = [];
//   arr2d.forEach(function (arr) {
//     mergedArr.push(...arr);
//   });
//   return mergedArr;
// };

// const presentAge = function (...arrays) {
//   const mergedData = mergeArrays(arrays);
//   mergedData.forEach(function (years, i) {
//     if (years > 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${years} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// presentAge(dataJuliaRemovedCats, dataKate);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// // // accumulator -> SNOWBALL
// // const balance = movements.reduce(function (acc, curr, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + curr;
// // }, 0);

// const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);

// console.log(balance);

// Maximum value with reduce
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const topValue = movements.reduce(
//   (acc, mov) => (mov > acc ? mov : acc),
//   movements[0]
// );
// console.log(topValue);

//Coding challange #2

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age > 2 ? age * 4 + 16 : age * 2));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(adults);
//   const avgAge = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return avgAge;
// };
// //const avg1 = calcAverageHumanAge(testData1);
// const avg2 = calcAverageHumanAge(testData2);
// console.log(avg2);

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age > 2 ? age * 4 + 16 : age * 2));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(adults);
//   const avgAge = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return avgAge;
// };
// const avg1 = calcAverageHumanAge(testData1);
// const avg2 = calcAverageHumanAge(testData2);
// console.log(avg2);

// Code challenge #3

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age > 2 ? age * 4 + 16 : age * 2))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// const avg1 = calcAverageHumanAge(testData1);
// const avg2 = calcAverageHumanAge(testData2);
// console.log(avg1, avg2);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     mov * eurToUsd;
//     console.log(arr);
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// // EQUALITY - This method needs to be specific about what to search for
// console.log(movements.includes(-400));

// // CONDITION - This method can use any rule that can be defined within a boolean function
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// // EVERY - Only returns the array if all elements returns true for the statement
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// // FLAT method
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// // Flat only goes one level deep as default
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat());
// // But we can also add an argument
// console.log(arrDeep.flat(2));

// // MAP method
// // My own try without map
// const accountMovements = [];
// accounts.forEach(acc => accountMovements.push(acc.movements));
// console.log(accountMovements);
// const allMov = accountMovements.flat();
// console.log(allMov);

// // With map
// const accountMovements2 = accounts.map(acc => acc.movements).flat();
// console.log(accountMovements2);
// const overallBalance = accountMovements2.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // Refacturing above
// const overallBalance2 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// // It turned out that map and flat was used a lot together and thereby flatmap was introduced to increase performance
// // Refacturing above with flatmap - flatmap ONLY GOES 1 LEVEL DEEP
// const overallBalance3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance3);

// // Sorting .sort() method MUTATES THE ORIGINAL ARRAY

// // Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);
// // By default sort will convert all numbers to strings which creates unwanted behavior for numbers
// console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]
// // Instead we can pass a callback function
// // return < 0 A, B
// // return > 0, B, A
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

// // Simplified way
// movements.sort((a, b) => a - b);
// console.log(movements);

const arr = [1, 2, 3, 4, 5, 6, 7];

// // Empty arrays + fill method
// const x = new Array(7);
// console.log(x); // [empty × 7]
// // The only method that can be used on this object is fill - FILL MUTATE THE ARRAY
// x.fill(1, 3, 5); // first arguments sets the content, second and third is the start and end index
// console.log(x); // [empty × 3, 1, 1, empty × 2]
// x.fill(1);
// console.log(x); // [1, 1, 1, 1, 1, 1, 1]

// arr.fill(23, 2, 6);
// console.log(arr); // [1, 2, 23, 23, 23, 23, 7]

// // Array.from

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const randomNumber = (Maximum = 10) => Math.floor(Math.random() * Maximum + 1);
// console.log(randomNumber(5));
// const dice100x = Array.from({ length: 100 }, () => randomNumber(100));
// console.log(dice100x);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// ///////////////////////////////
// // Array Method Practice

// // 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, deposit) => acc + deposit);

// console.log(bankDepositSum);
// console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov > 0));

// // 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// console.log(numDeposits1000);

// const numDeposits1000_2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => (mov >= 1000 ? ++acc : acc), 0);

// console.log(numDeposits1000_2);
// console.log(accounts.flatMap(acc => acc.movements));

// // 3.

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     {
//       deposits: 0,
//       withdrawals: 0,
//     }
//   );

// console.log(deposits, withdrawals);

// // 4.
// // this is a nice title -> This Is a Nice Title

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a nice title'));

///////////////////////////////////////
// Coding Challenge #4

/* Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion. */

//TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog['recFood'] = Math.trunc(dog.weight ** 0.75 * 28)));

const sarasDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarasDog.curFood > sarasDog.recFood);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

const eatingOK = dog => Math.abs(dog.curFood - dog.recFood) < 0.1 * dog.recFood;
// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));
// 6
console.log(dogs.some(eatingOK));
// 7
console.log(dogs.filter(eatingOK));

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
