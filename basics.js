// Topics discussed in this file : how to add js, comments, Input/Output, statements and expressions, datatypes, variables, loops, decision making statements, functions, global functions, object, operators, number and maths, date and time

// <--------------------------------- 3 Ways to add JavaScript ---------------------------------->

// 1) Embedding Code using Script tag 
// <script>  
// document.write("Welcome");  
// </script>  

// 2) Internal
// <a href="#" onClick="alert('Welcome !');">Click Me</a>  

// 3) External File
// <script src="script.js">

// <--------------------------------- Comments ---------------------------------->
/* Multi line
comment */
// One line


// <--------------------------------- Basic input output ---------------------------------->
console.log("Hello World");             // write to the browser console
document.write("Welcome");              // write to the HTML
alert("This is an alert");              // output in an alert box
confirm("Are you sure?");               // yes/no dialog, returns true/false depending on user click
prompt("Your age?","0");                // input dialog. Second argument is the initial value

// <--------------------------------- Statements and expressions ---------------------------------->

// Expression: Any unit of code that can be evaluated to a value is an expression.
// e.g, 3, 5 * 10, true, "hello"

// A statement is an instruction to perform a specific action. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. JavaScript programs are actually a sequence of statements.
// e.g, let num = 2; if(...) {...} else {...}, for(....) {...}

// **** Very important to understand react (You will understand only if you know react !!)
// Curly brackets '{' and '}' allow us to embed bits of JavaScript within our JSX, but we can only include expressions and not statements.
//e.g, 
// function CountdownClock({ secondsRemaining }) {              //This will work
//     return (
//       <div>
//         Time left:
//         {Math.round(secondsRemaining / 60)} minutes!         // Expression
//       </div>
//     );
// }

// function CountdownClock({ secondsRemaining }) {              // This will not work
//     return (
//       <div>
//         {if (secondsRemaining > 0) {                         // If else is statement, not expression. 
//           `${secondsRemaining} seconds left`                 // It will throw syntax error
//         } else {
//           "Time expired!"
//         }}
//       </div>
//     );
//   }
    
// TIP: If we want to embed if/else logic in our JSX, we need to use a ternary operator expression:

// <--------------------------------- Datatype ---------------------------------->

// There are two data types in JavaScript.

// 1) Primitive data type :
// String : represents textual data	e.g, 'hello', "hello world!" etc
// Number : an integer or a floating-point number e.g, 3, 3.234, 3e-2 etc.
// BigInt : an integer with arbitrary precision e.g, 900719925124740999n , 1n etc.
// Boolean : Any of two values: true or false e.g, true and false
// undefined : a data type whose variable is not initialized e.g, let a;
// null : denotes a null value e.g, let a = null;
// Symbol : data type whose instances are unique and immutable e.g, let value = Symbol('hello');
// To learn more about 'Symbol' : https://javascript.info/symbol

// 2) Non-primitive (reference) data type or Complex types :
// Object : An object is a complex data type that allows us to store collections of data, e.g, 
let obj = {
    firstName: "Shaikh",
    lastName: "Ovais",
    age: '21'
}
// Array : Arrays are a special type of objects. It is a special variable, which can hold more than one value. e.g,     
let fruits = ['Mango', 'Apple', 'Banana', 'Watermelon'];        //typeof 'array' gives 'object'
// Function : Function is a block of code designed to perform a particular task. e,g 
function sum(num1, num2) {
    return num1 + num2;
}

// Primitive data types: The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types. Size depends on type of data structure
// Non-primitive data types: The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. Size is not fixed

// JavaScript is a dynamically typed (loosely typed) language. JavaScript automatically determines the variables' data type for you.
// It also means that a variable can be of one data type and later it can be changed to another data type. For example,
let data;                               // data is of undefined type
data = 5;                               // data is of integer type
data = "JavaScript Programming";        // data is of string type

//Learn more https://www.programiz.com/javascript/data-types

// <--------------------------------- Variables ---------------------------------->
let notDefinedVariable;             // default value of unassigned variable is 'undefined'
var myInteger = 12;                 // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482;    // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myFloat = 5.5;                  // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22;    // 64-bit floating-point number
let myStr = "Ovais";                // string
let myStr2 = "Hi" + " " + "Ovais";  // = "Hi Ovais"   this is also called concatenation of strings
let myStr3 = 1 + 2 + "3";           // = "33"
let myArray = [2,3,5,8];            // array typeof(array) will give object
let myBoolean = false;              // boolean
let myRegEx = /()/;                 // RegEx typeOf(g) will give 'object'
let myFunc = function(){};          // function
let myObj = {                       // object
    name: "Ovais",
    nickname: "Ovi"
}
let myNull = null;                     // typeof(null) will give object

let type = typeof(myObj);
console.log(type);

// <--------------------------------- Initialization, Declaration ---------------------------------->

let myVariable;                     // Declaration
myVariable = 12;                    // Initialization / Assigning
console.log(myVariable);            // Accessing
myVariable = 100;                   // Reassigning
const cris = "32";                  // Declaration and initialization
// 'const' variable should be ALWAYS initialized at their declaration or else they will give SYNTAX ERROR

// <--------------------------------- Loops ---------------------------------->
let arr = [1,2,3,4];

// 1) normal for loop
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

// 2) for in (loops through the properties of an object)
let person = {name: "ovais", age: "21", city: "mumbai"};
for (const key in person) {
    console.log(person[key]);
}

// 3) for of (loops through the values of an iterable object. e.g array)
for (const element of arr) {
    console.log(element);
}

// 4) while loop (loops through a block of code while a specified condition is true)(entry controlled loop means it will check for condition before running)
let index = 0;
while(index < 3) {
    console.log(arr[index]);
    index++;
}

// 5) do-while loop (also loops through a block of code while a specified condition is true but it will run)(exit controlled loop means it will check for condition after running)
index = 0;
do {
    console.log(arr[index]);
    index++;
} while (index < 3);

//Reserved keywords in loops : break (it will break the loop), continue (it will skip to next iteration)


// <--------------------------------- Decision Making Statements ---------------------------------->
// 1) if / if ... else / if ... else if / nested if
let num = 2;
if(num > 0) {
    console.log("Positive number");
} else {
    console.log("Negative number");
}

// 2) Switch statement
let grade = 'B';
switch (grade) {
    case 'A':                       //it will check if grade === 'A'
        console.log("Passed");
        break;
    case 'B':
        console.log("Just passed");
        break;
    default:                        //default will run if no case is matched
        console.log("Failed");
        break;
}


// <--------------------------------- Functions ---------------------------------->

function normalAddFunc(a, b) {               //Normal function
    return a + b; ; 
}

let arrowAddFunc = (a, b) => a + b;          //Arrow function (Learn more about arrow function in es6 file)

let sum = arrowAddFunc(1, 2);
console.log("sum ", sum);

((a, b) => {console.log(5 + 5)})();             //IIFE functions (Learn more about IIFE in miscellaneous)

// <--------------------------------- Global Functions ---------------------------------->

console.log('eval("2+2") :', eval('2+2'));  //evaluates JavaScript code represented as a string. output : '4'
console.log('eval(new String("2+2")) :', eval(new String('2+2')));      //output: '2 + 2'

console.log('String(23) :', String(23));                     // convert a number to string
console.log('(23).toString() :',(23).toString());            // convert a number to string
console.log('Number("23") :', Number("23")); // converts string to number, if string consists of only numbers

console.log(isFinite(7));                  // return true if variable is finite. output : true
console.log('isNan(ab) : ', isNaN('ab'));  // returns true only if the argument is not a number. output : true

console.log('parseInt(232) :', parseInt("23"));                 // parses a string and returns an integer
console.log('parseFloat(232.21) :', parseFloat("232.21"));      // parses a string and return float
parseInt("3 months");       // returns the first number: 3
parseFloat("3.5 days");     // returns 3.5
            

// <--------------------------------- Object ---------------------------------->

let student = {                        // object name
    firstName: "Virat",                // list of properties and values
    lastName: "Kohli",
    age: 30,
    height: 170,
    fullName : function() {            // object function
        return this.firstName + " " + this.lastName;
    }
}; 
student.age = 21;                      // setting value
console.log(student.age);
let studentName = student.fullName();  // call object function
console.log(studentName);

// <--------------------------------- Operators ---------------------------------->

let a = 3;          //'=' is called assignment operators
let b = 2;
//Arithmetic operators
console.log('Numbers are :', a, ',', b);
console.log('a + b :', a + b);                      // Addition : '5'
console.log('a - b :', a - b);                      // Subtraction : '1'
console.log('a * b :', a * b);                      // Multiplication : '6'
console.log('a / b :', a / b);                      // Division : '1.5'
console.log('a % b :', a % b);                      // Modulo/Remainder : '1.5'

let c = '2';
let d = 2;
//Equality operators
console.log('c :', c, 'd :', d);
console.log('c == d :', c == d);                    // equals : 'true' (checks for only value)
console.log('c === b :', c === d);                  // strict equals : 'false'  (check for value as well as data type e.g 2 == '2' is true but 2 === '2' is false because first is a number and second is string)
console.log('c != d :', c != d);                    // not equals : 'false' (checks for only value)
console.log('c !== d :', c !== d);                  // strict not equals : 'true'

//Comparison operators
console.log('a > b :', a > b);                       // greater than : 'true'
console.log('a >= b :', a >= b);                     // greater than or equals to : 'true'
console.log('a < b :', a < b);                       // smaller than : 'false'
console.log('a <= b :', a <= b);                     // smaller than or equals to : 'false'

//Increment/Decrement operators
console.log('++a :', ++a);                           // Decrement by 1 : '4'    (post increment)
console.log('--a :', --a);                           // Decrement by 1 : '3'    (post decrement)
console.log('a++ :', a++);                           // Increment by 1 : '3'    (pre increment)
console.log('a-- :', a--);                           // Decrement by 1 : '4'    (pre decrement)

//Logical Operators
console.log('a && b :', a && b);                      // Logical 'AND' : '2'
console.log('a || b :', a || b);                      // Logical 'OR' : '3'

//Bitwise operators

//The typeof operator returns the type of a variable or an expression:
console.log(typeof(12));                // string
console.log(typeof("23"));              // number

// <--------------------------------- Numbers and Maths ---------------------------------->
let pi = 3.1415;

pi.toFixed(0);              // returns 3 (It converts a number to a string. The toFixed() method rounds the string to a specified number of decimals)
pi.toFixed(2);              // returns 3.14

pi.toPrecision(2)           // returns 3.1  (It formats number to a specified length. A decimal point and nulls are added (if needed), to create the specified length)
pi.valueOf();               // returns the primitive value of a string.

Number.MAX_VALUE            // largest possible JS number
Number.MIN_VALUE            // smallest possible JS number
Number.NEGATIVE_INFINITY    // -Infinity
Number.POSITIVE_INFINITY    // Infinity

Math.round(4.4);        // = 4 (It rounds a number to the nearest integer. 2.49 will be rounded down (2), and 2.5 will be rounded up (3))
Math.round(4.5);        // = 5

Math.pow(2,8);          // = 256  (2 to the power of 8)
Math.sqrt(49);          // = 7 (square root) 
Math.abs(-3.14);        // = 3.14  (absolute, positive value)

Math.ceil(3.14);        // = 4 (rounded up)
Math.floor(3.99);       // = 3 (rounded down)

Math.sin(0);            // = 0 - sine
Math.cos(Math.PI);      // OTHERS: tan,atan,asin,acos,
Math.log(1);            // = 0  natural logarithm 
Math.exp(1);            // = 2.7182pow(E,x)

Math.min(0, 3, -2, 2);  // = -2 (returns the lowest value in arguments)
Math.max(0, 3, -2, 2);  // = 3  (returns the highest value in arguments)

Math.random();                      // return a random number between 0 and 1
Math.floor(Math.random() * 5) + 1;  // random integer, from 1 to 5


// <--------------------------------- Date and Time ---------------------------------->

let date = new Date();

console.log("getDate() :", date.getDate());                  // day as a number (1-31)
console.log("getDay() :", date.getDay());                    // weekday as a number (0-6)
console.log("getFullYear() :", date.getFullYear());          // four digit year (yyyy)
console.log("getMonth() :", date.getMonth());                // month (0-11)
console.log("getHours() :", date.getHours());                // hour (0-23)
console.log("getMilliseconds() :", date.getMilliseconds());  // milliseconds (0-999)
console.log("getMinutes() :", date.getMinutes());            // minutes (0-59)
console.log("getSeconds() :", date.getSeconds());            // seconds (0-59)
console.log("getTime() :", date.getTime());                  // milliseconds since 1970
