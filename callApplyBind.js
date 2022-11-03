// Topics discussed in this file : Binding, implicit binding, explicit binding, call, apply, bind and their polyfills

// <------------------------------------------- Binding ----------------------------------------------------->

// Binding: In JavaScript, a Lexical Environment is where our code is physically written. An Execution Context refers to the code that is currently running and everything else that helps run it. There can be lots of lexical environments available but the one that's currently running is managed by the Execution Context. Each of the Execution Context contains an Environment Record. As JavaScript engine executes the code, variables and function names gets added to the Environment Record. This phenomenon is known as Binding in JavaScript. Binding helps associate the identifiers(variables, function names) with the this keyword for an execution context. There are two types of binding :

// **** 1) Implicit Binding: When we invoke a method of an object, we use the dot(.) notation to access it. In implicit binding, we need to check the object adjacent to the method at the invocation time. This determines what 'this' is binding to.

// Uncomment
// let student = {
//     fullName : "David Warner",
//     rollNo : 7,
//     greet : function () {
//         console.log(`Hello, my name is ${this.fullName}`);
//     }
// }
// student.greet();

// Here 'this' is bound to the student object. We know this because we invoke the method greet() on the student object. So this.fullName is going to be 'David Warner'. This is implicit binding and this is done by JavaScript itself.

// **** 2) Explicit Binding: There can be many such environments (Execution Contexts) in a JavaScript application. Each execution context operates independently from the others. But at times, we may want to use stuff from one execution context in another. That is where explicit binding comes into play. In explicit binding, we can call a function with an object when the function is outside of the execution context of the object.
//There are three very special methods, call(), apply() and bind() that help us achieve explicit binding.

// <--------------------------------------------- call() ---------------------------------------------------->
// With the call() method, the context with which the function has to be called will be passed as a parameter to the call().

// Uncomment
// let admin = { name : 'Ovais' }
// function farewell() {
//     console.log(this.name);
// }
// farewell.call(admin);               // Ovais
// Here, 'this' will bind 'farewell' function to the 'admin' object because we have passed the 'admin' as a parameter to the call() method. In the above example, we have passed just one argument to call(). But we can also pass multiple arguments to call(), like this:

// Uncomment
// function printHobbies (hobby1, hobby2) {
//     console.log(this.name + ' likes ' + hobby1 + ' & ' + hobby2);
// }
// let person = {
//   name: 'Ovais',
// };
// let hobbies = ['Football', 'Coding'];
// printHobbies.call(person, hobbies[0], hobbies[1]);
// Here we have passed multiple arguments to the call() method. The first argument must be the object context with which the function has to be invoked. Other parameters could just be values to use.

// <------------------------------------------ apply() ------------------------------------------------------>

// This hectic way of passing arguments to the call() method one by one can be solved by another alternate method called apply(). It is exactly the same as call() but allows you to pass the arguments more conveniently.

// Uncomment
// function printHobbies(hobby1, hobby2, hobby3) {
//   console.log(this.name + " likes " + hobby1 + " , " + hobby2 + " & " + hobby3);
// }
// let person = {
//   name: "Ovais",
// };
// let hobbies = ['Football', 'Coding', 'Traveling'];
// printHobbies.apply(person, hobbies);
// Here we are able to pass an array of arguments, which is much more convenient than passing them one by one.

// *** Tip: When we only have one value argument or no value arguments to pass, use call(). When we have multiple value arguments to pass, we use apply().

// <------------------------------------------ bind() ------------------------------------------------------>

// The bind() method is similar to the call() method but with one difference. Unlike the call() method of calling the function directly, bind() returns a brand new function and we can invoke that instead.

// Uncomment
// function printHobbies (hobby1, hobby2) {
//     console.log(this.name + ' likes ' + hobby1 + ' & ' + hobby2);
// }
// let person = {
//   name: 'Ovais',
// };
// let hobbies = ['Football', 'Coding'];
// let boundFunc =  printHobbies.bind(person, hobbies[0], hobbies[1]);  // bind() returns a function
// boundFunc();                                                     // Output : Ovais likes Football & Coding

// Here the 'printHobbies.bind()' doesn't invoke the function 'printHobbies()' directly. It returns a new function, 'boundFunc' and we can invoke it as 'boundFunc'().

// ***** Binding by 'new' keyword
// A 'new' keyword is used to create an object from the constructor function.

//Uncomment
// let Footballer = function (name, position) {
//     this.name = name;
//     this.position = position;
//     this.introduce = function () {
//         console.log(`My name is ${this.name} and I am a ${position} in Football`);
//     }
// }

// let player1 = new Footballer('Cristiano Ronaldo', 'striker');
// let player2 = new Footballer('Luka Modric', 'midfielder');
// player1.introduce();
// player2.introduce();

// **** Very Important !!!
// We cannot use call, apply, and bind, methods on Arrow functions to change the value of this, because arrow functions don’t have their own this context,
// this inside arrow function will point to the outer/parent function in which it is present.
// So applying these methods on the arrow function will not make any effect.

//Learn more about 'this' keyword which is very important to know binding, in miscellaneous.js file