// Topics discussed in this file : Module pattern, IIFE, BOM, Currying, 'this' keyword, Higher Order Functions, use strict, 

// <------------------------------------------ Module pattern ----------------------------------------------->

// The Module Pattern is one of the important patterns in JavaScript. It is a commonly used Design Pattern which is used to wrap a set of variables and functions together in a single scope.
// Uncomment
// function EmployeeDetails() {
//   var name = "Mayank";
//   var age = 30;
//   return {
//     name: name,
//     age: age,
//   };
// }
// var newEmployee = EmployeeDetails();
// var userName = newEmployee.name;
// var userAge = newEmployee.age;

// <------------------------------------------------- IIFE -------------------------------------------------->
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// Uncomment
// (() => {
//   console.log("Hello, I am inside IIFE"); // output: Hello, I am inside IIFE
// })();

// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
// First part is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// *** Use cases
// 1) Avoid polluting the global namespace : Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.
// Uncomment
// (() => {
//   // some initiation code
//   let firstVariable;
//   let secondVariable;
// })();
// firstVariable and secondVariable will be discarded after the function is executed.

// 2) The module pattern : We can use IIFE to create private and public variables and methods.
// Uncomment
// const createAccountWithBalance = (balance) =>
//   ((copyBalance) => {
//     let balance = copyBalance; // This variable is private
//     const accountCreated = () => {
//       // This method is private
//       console.log(`Your account has been created with balance ${balance}`);
//     };
//     accountCreated();
//     return {
//       withdraw(amount) {
//         // This method is public
//         if (balance >= amount) {
//           balance -= amount;
//           return `${amount} has been withdrawn from your account and your balance is ${balance}`;
//         }
//         return "Insufficient money in you bank account";
//       },
//     };
//   })(balance);
// const firstAccount = createAccountWithBalance(100); // "Your account has been created with balance 100"
// console.log(firstAccount.balance); // undefined; this variable is private
// console.log(firstAccount.withdraw(20)); // "20 has been withdrawn from your account and your balance is 80"
// console.log(firstAccount.withdraw(30)); // "30 has been withdrawn from your account and your balance is 50"
// console.log(firstAccount.accountCreated); // undefined; this method is private
// const secondAccount = createAccountWithBalance(20); // "Your account has been created with balance 20"
// console.log(secondAccount.withdraw(30)); // "Insufficient money in you bank account"
// console.log(secondAccount.withdraw(20)); // "20 has been withdrawn from your account and your balance is 0"

// <------------------------------------ Browser Object Model (BOM) ----------------------------------------->

// The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.The window object is supported by all browsers. It represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object. Global functions are methods of the window object.

// e.g window.document.getElementById('container'), window.close(), window.addEventListener('click', func)

// <------------------------------------------- Currying ---------------------------------------------------->
// Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline. In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled. Currying transforms a function with multiple arguments into a sequence/series of functions each taking a single argument. 
// Why it’s useful ? 1) Currying helps to avoid passing the same variable again and again. 
// 2) It helps to create a higher order function
// Uncomment
// function getSum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// let sum = getSum(1)(2)(3); //It's different than 'getSum(1,2,3)'
// console.log(sum);

// let getTotal = (a) => (b) => (c) => a + b + c; //with the help of arrow function we can also write it in one line
// let total = getTotal(1)(2)(3);
// console.log(total);

// Infinite Currying             function to add 'n' numbers
// Uncomment
// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(a + b);
//     } else {
//       return a;
//     }
//   };
// }
// console.log(add(1)(2)(3)(4)(5)());      // we need to pass '()' at the end to call the function

// Good Example of currying :
// Uncomment
// let evaluate = (operation) => (a) => (b) => {
//   if (operation === "add") {
//     return a + b;
//   } else if (operation === "multiply") {
//     return a * b;
//   } else if (operation === "divide") {
//     return a / b;
//   } else if (operation === "subtract") {
//     return a - b;
//   } else {
//     return "Invalid operation";
//   }
// };

// let result = evaluate("add")(2)(3);
// console.log(result);

// <--------------------------------------- 'this' Keyword ------------------------------------------------>
// In JavaScript, the 'this' keyword refers to an object. It is also called as reference to execution context.

// Which object depends on how 'this' is being invoked (used or called).
// The 'this' keyword refers to different objects depending on how it is used:

// 1) In an object method, 'this' refers to the object.
// Uncomment
// let person = {
//   firstName: "Virat",
//   secondName: "Kohli",
//   printFullName: function () {
//     console.log(this.firstName + " " + this.secondName); // 'this' is referring to 'person' object
//   },
// };
// person.printFullName(); // Virat Kohli

// 2) When used alone, 'this' refers to the global object. Because 'this' is running in the global scope. In a browser window the global object is [object Window]:
// Uncomment
// console.log(this); // global / window object
// In strict mode, when used alone, 'this' also refers to the global object:

// 3) In a function, 'this' refers to the global object. In a function, the global object is the default binding for 'this'.
// Uncomment
// function temp() {
//   console.log(this); // global / window object
// }
// temp();

// 4) In a function, in strict mode, 'this' refers to undefined. Because JavaScript strict mode does not allow default binding.
// Uncomment
// "use strict";               // move this line to top to run JavaScript in 'strict mode'
// function temp2 () {
//   console.log(this);        // undefined
// }
// temp2()

// 5) In an event, 'this' refers to the element that received the event.
// Uncomment
// document.body.innerHTML += `         
// <button onclick="this.style.display='none'">
// Click to Remove Me!
// </button>`;
//click on the button and it will disappear

// 6) Methods like call(), apply(), and bind() can refer 'this' to any object.
// Learn more about it in callApplyBind file

// In constructor this points to newly created instance / object

// Uncomment
// function User(name) {
//   this.name = name;       // we are creating a property in empty object
//   console.log(this);      // Output : User {name: 'Ovais'}
// }
// let user1 = new User('Ovais');

// 7) 'this' in Arrow Function: The arrow function doesn't define its own execution context. No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function. In other words, the arrow function resolves this lexically. Contrary to a regular function, the indirect invocation of an arrow function using myArrowFunc.call(thisVal) or myArrowFunc.apply(thisVal) doesn't change the value of this: the context value is always resolved lexically.
// Learn more about 'this' in arrow function in 'es6.js' script.

// 'this' keyword never points to a function but the context of the function.

// 'this' Precedence
// To determine which object this refers to; use the following precedence of order.
// 1) Is 'this' in a function being called using bind()?
// 2) Is 'this' in a function being called using apply()?
// 3) Is 'this' in a function being called using call()?
// 4) Is 'this' in an object function (method)?
// 5) Is 'this' in a function in the global scope.

// <--------------------------------------- Higher Order Functions ------------------------------------------>

// Higher order functions are functions which takes functions as an input or returns a function. Function which is passed in higher order function is called as callback function, which we may call sometime later in our higher order function. All this is possible because in JavaScript, functions are treated as first class citizen in JavaScript. Treating functions as first class citizens means treating functions as values, passing to another function or returning a function from function. 
// e.g of higher order function

// Uncomment
// function greet(callbackFunc) {
//     console.log('Hello everyone.');
//     callbackFunc();
// }

// function introduce () {
//     console.log('My name is SuperMan');
// }

// greet(introduce);               // passing 'introduce()' function as an argument in 'greet()' function

// Few more examples of higher order functions are map(), filter(), reduce(), etc. This functions also take a callback function as arguments.

// <------------------------------------------------ use strict --------------------------------------------->

// "use strict" keyword defines that JavaScript code should be executed in "strict mode". It was introduced in ES5. Strict mode makes it easier to write "secure" JavaScript. It changes previously accepted "bad syntax" into real errors. 
// e.g, In normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties. In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

// ***** The "use strict" directive is only recognized at the beginning of a script or a function. It is a good practice to declare in the beginning of a script. Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode).

// To see things that are not allowed in strict mode, check this link:
// https://www.w3schools.com/js/js_strict.asp

// <------------------------------------------------  --------------------------------------------->
