// <----------------------------------------- Let and Const ------------------------------------------------>

// ** Let **
// Variables defined with let cannot be re-declared.    

// They must be declared before using and they have block scope.
let x = 10;         // Here x is 10
{
    let x = 2;      // Here x is 2
}
// Here x is 10

//Let variables can be reassigned to any value
let a = 2;
a = 5;          //reassigning

// ** Const **
// Similar to let variables, const cannot be re-declared and they are also block scoped

// Const variables cannot be reassigned.
const b = 2;
// b = 4;           //this will give error 'TypeError: Assignment to constant variable.'

// <----------------------------------------- Arrow functions ----------------------------------------------->
// It allows you to create functions in a cleaner way compared to regular functions.
function sum(a, b) {            //normal function
    return a + b;
} 
let sumArrow = (a,b) => a + b;  //arrow function

// Notes for Arrow Function:
// 1. 'function' keyword NOT needed
// 2. let/const variableName = (argument) => {function body} 
// 3. we can omit the return keyword and the curly brackets only if the function is a single statement.
// 4. brackets NOT needed in SINGLE parameter function's argument
// 6. It cannot be used as constructors or generators
// 7. It should not be used to create methods inside objects.

// We assign arrow function to a variable therefore in hoisting it acts as a variable and not as a function, therefore we should always declare it before calling.

//** Scoping / this keyword in arrow function
// In a normal function the 'this' keyword is scoped based on the context of where the function is called. Arrow functions on the other hand scope the 'this' keyword based on where the function is defined. So whenever you call this, it refers to its parent scope.

function Person() {                         // 'this' in regular function
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {
        // this is accessible
        console.log(this.age);

        function innerFunc() {
            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }
        innerFunc();
    }
}
let z = new Person();
z.sayName();

//Output :
// 25
// undefined
// Window {}

// Here, this.age inside this.sayName() is accessible because this.sayName() is the method of an object.
// However, innerFunc() is a normal function and this.age is not accessible because this refers to the global object (Window object in the browser). Hence, this.age inside the innerFunc() function gives undefined.

function Person() {                             // 'this' in arrow function
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {
        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }
        innerFunc();
    }
}
const y = new Person();
y.sayName();

//Output :
// 25
// 25

// Here, the innerFunc() function is defined using the arrow function. And inside the arrow function, this refers to the parent's scope. Hence, this.age gives 25.


// <-------------------------------------- Default parameter values ----------------------------------------->
// ES6 allows function parameters to have default values.
function myFunction(x, y = 10) {
    // y is 10 if no value is passed
    return x + y;
  }
  myFunction(5); // will return 15


// <------------------------------ Template literals (Template strings) ------------------------------------>
// Template literals allow embedded expressions, multi-line strings and string interpolation. 
// With template literals, you can use both single and double quotes inside a string. Template literals are the string literals enclosed by the backtick ( ` ) and can contain placeholders indicated by dollar sign curly braces.

let firstName = "Shaikh";
let lastName = "Ovais";
// let fullName = 'Welcome ' + firstName + ' ' + lastName + '!'           // es5
let fullName = `Welcome ${firstName} ${lastName}!`;                       // es6
console.log(fullName);      // Output: Welcome Shaikh Ovais!


// <------------------------------------------ Destructuring ------------------------------------------------>
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variable.

let obj = {p: 42, q: true};             // es6
let {p, q} = obj;                       // names of variables should be same as keys in the object
console.log(p); // 42
console.log(q); // true


// <------------------------------------ Spread And Rest Operator ------------------------------------------>
// Spread and Rest are basically opposites to each other. They both use ' … ' (three dots) notation. Spread syntax expands an array into separate elements, while a rest syntax condenses array elements into a single element(array).

//Here spread operator expands an iterable (like an array) into separate elements
const cars1 = ["Saab", "Volvo","BMW"];          // spread operator
const cars2 = ["Fiat", "Toyota"];
const combined = [cars1, ...cars2];
console.log(combined);

//Here rest operator is allowing a function to treat an indefinite number of arguments as an array
function sum(...args) {                         // rest operator
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}  
let ans = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(ans);


// <------------------------------------ Promises ------------------------------------------>
// Learn promises in complete detail in asyncJS