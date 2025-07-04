'use strict';

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greet = greeting => name => console.log(`${greeting} ${name}`);
// // };

// // const greeterHey = greet('Hey');

// // greeterHey('Jonas');
// // greeterHey('Steven');

// // greet('Hello')('Roa');
// // greet('Ayo')('Jessie');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(238, 'Rubick Lina');
// lufthansa.book(234, 'Will Smith');
// console.log(lufthansa);

// const pegasus = {
//   airline: 'Pegasus',
//   iataCode: 'PG',
//   bookings: [],
// };

// const book = lufthansa.book;

// // book(pegasus, 24, 'Alice Wonderlands');

// // .call method
// book.call(pegasus, 308, 'Alice Wonderlands');
// console.log(pegasus);

// const turkish = {
//   airline: 'Turkish Airlines',
//   iataCode: 'THY',
//   bookings: [],
// };

// book.call(turkish, 241, 'Efe Yilmaz');

// // .apply method
// const flightData = [534, 'Lincoln Johnsson'];
// book.apply(turkish, flightData);
// console.log(turkish);

// book.call(turkish, ...flightData);

// // .bind method
// const bookPG = book.bind(pegasus);
// const bookPG222 = book.bind(pegasus, 222); // As if we are setting flight num to 222; partial application

// bookPG222('Tyrell Wellick');
// const bookTHY = book.bind(turkish);
// const bookLH = book.bind(lufthansa);
// bookPG(655, 'Lebron James');

// // With eventlistners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// // const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));
// // const addVAT = addTax.bind(null, 0.23);

// const addTax = function (rate) {
//   return function (value) {
//     return console.log(value + value * rate);
//   };
// };

// addTax(0.23)(100);

// Coding Challenge #1

// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀

// const poll = {
//   question: 'What is you favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     const answer = Number(
//       prompt(this.question + '\n' + this.options.join('\n'))
//     );

//     if (typeof answer === 'number') {
//       if (answer <= this.answers.length && answer >= 0) {
//         this.answers[answer]++;
//       }
//     }
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults: function (type = 'array') {
//     if (typeof type === 'string') {
//       if (type === 'string') {
//         console.log(this.answers.join(', '));
//       } else if (type === 'array') {
//         console.log(this.answers);
//       }
//     }
//   },
// };

// const poll = {
//   question: 'What is you favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     const answer = Number(
//       prompt(this.question + '\n' + this.options.join('\n'))
//     );
//   },
// };

// const displayResults = function (answers, type = 'array') {
//   if (typeof type === 'string') {
//     if (type === 'string') {
//       console.log(answers.join('- '));
//     } else if (type === 'array') {
//       console.log(answers);
//     }
//   }
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// displayResults.call(poll, [5, 2, 3], 'string');

// displayResults.call(poll, [1, 5, 3, 9, 6, 1], 'string');

// displayResults.call(poll, [1, 5, 3, 9, 6, 1]);

// IIFE: Immediately Invoked Function Expression(A FUNCTION THAT RUN ONLY ONCE)

// (function () {
//   console.log('this will only run once!');
//   var x = 34;
// })();

// // console.log(x)   -   Uncaught ReferenceError: x is not defined

// (() => console.log('This will ALSO never run again!'))();

// // Closures

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log('Passenger Count: ' + passengerCount);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);
// Any function always has access to the variable environment of the execution context in which the function was created

// Example 1: Function Rebirth
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 50;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// // Reassigning f function
// h();
// f();
// console.dir(f);

// Example 2: A Timer

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

function hello(callback = null) {
  console.log('Hello');
  callback();
}

function goodbye() {
  console.log('goodbye');
}

function one() {
  console.log('one');
}

function two() {
  console.log('two');
}

hello(one);
