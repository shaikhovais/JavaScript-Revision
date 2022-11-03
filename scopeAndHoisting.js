// Topics discussed in this file : Scope, shadowing and hoisting

// <----------------------------------------- Scope -------------------------------------------------->

// // Scope determines the accessibility of variables, objects, and functions from different parts of the code.

// // Types of scop in JavaScript:

// // ******** Block Scope **********
// // Variables declared inside a '{ }' block cannot be accessed from outside the block
// // Variables declared inside a '{ }' block using 'let' and 'const' cannot be accessed from outside the block. Therefore, let and const are called block scoped. Variables declared inside a '{ }' block using 'var' can be accessed from outside the block.

// {
//     let x = 1;
//     const y = 2;
//     var z = 3;
// }
// // x and y can NOT be used here
// // z can be used here

// // ******** Function Scope and Local Variables **********
// // Variables declared within a JavaScript function, become LOCAL to the function. Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function. Variables declared with var, let and const are quite similar when declared inside a function. They all have Function Scope

// // code here can NOT use carName
// function myFunction() {
//     var carName = "Volvo";
//     // code here CAN use carName
// }  
// // code here can NOT use carName

// // Using function scope, we can actually create new variables with the same name as a variable in an outer scope without changing or reassigning the original value. When we try to access first it will search it's local environment, if not found then it will search in it's parents.
// let ans = "10";
// function func() {
//     let ans = 12;
//     console.log(ans);           // 12
// }
// func()
// console.log(ans);               // 10

// // ******** Global Scope **********
// // A variable declared outside a function, becomes GLOBAL. A global variable has Global Scope. All scripts and functions on a web page can access it. Variables declared with var, let and const are quite similar when declared outside a block. They all have Global Scope.
// var global1 = 1;        //global variable
// let global2 = 2;        //global variable
// const global3 = 3;      //global variable
// function func() {
//     // All 3 global variables are accessible here
// }

// // ** Automatically Global
// // If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable. This code example will declare a global variable bikeName, even if the value is assigned inside a function: 
// bike();
// // code here can use carName
// function bike() {
//   bikeName = "Harley-Davidson";
// }

// // Notes:
// // In "Strict Mode", undeclared variables are not automatically global.
// // Do NOT create global variables unless you intend to.
// // The lifetime of a JavaScript variable starts when it is declared.
// // Function (local) variables are deleted when the function is completed.
// // In a web browser, global variables are deleted when you close the browser window (or tab).
// // Function arguments (parameters) work as local variables inside functions.

// // <----------------------------------------- Shadowing -------------------------------------------------->

// When a variable is declared in a inner scope having the same name defined on its outer scope and when we call the variable from the inner scope, then we get the value defined in the inner scope. This is known as Shadowing or Variable Shadowing. In JavaScript, the introduction of let and const in ES6 along with block scoping allows variable shadowing. Shadowing doesn't work on 'var' variables.

var d = 1;
let e = 2;
const f = 3;

{
    // New value assigned
    var d = 11;
    let e = 22;
    const f = 33;

    console.log(d);             // 11       
    console.log(e);             // 22
    console.log(f);             // 33
}

console.log(d);                 // 11       shadowing didn't work on 'var' variables
console.log(e);                 // 2        
console.log(f);                 // 3

// Illegal Shadowing: Now, while shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow 'var' variable by 'let' variable but cannot do the opposite. So, if we try to shadow 'let' variable by 'var' variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.” 

var u = 1;
let v = 2;

{
    let u = 11;                 // Legal Shadowing 
    console.log(u);             // 11


    // var v = 22;                 // Illegal Shadowing
    // console.log(v);             // This will give syntax error
}


// // <----------------------------------------- Hoisting -------------------------------------------------->

// // Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
// x = 5; // Assign 5 to x
// console.log(x);         //output : 5
// var x; // Declare x     (Declaration is sent on top therefore we are able to initialize it on line 65 and acces on line number 67, only works with 'var') 

// // Variables defined with 'let' and 'const' are hoisted to the top of the block, but not initialized. Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// // Using a let variable before it is declared will result in a ReferenceError. 
// // The variable is in a "temporal dead zone" from the start of the block until it is declared. A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value. It starts from the beginning of the block’s local scope and ends on initialization of variable.
// iron = 23;
// // let iron;       // Reference error

// // Using a 'const' variable before it is declared, is a syntax errror, so the code will simply not run.
// man = 23;
// // const man;      // Syntax error
// // *** All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized. If the JavaScript engine still can’t find the value of let or const variables at the line where they were declared, it will assign them the value of undefined or return an error (in case of const).

// // *** JavaScript only hoists declarations, not initializations.
// rain = 14;
// console.log(rain);          // 14
// console.log(bow);           // undefined
// var rain;
// var bow = 2;
// // logging 'bow' will give 'undefined' because only the declaration (var rain, var bow), not the initialization ( = 2) is hoisted to the top. Because of hoisting, bow has been declared before it is used, but because initializations are not hoisted, the value of bow is undefined.
// // But why undefined?
// // When JavaScript engine finds a var variable declaration during the compile phase, it will add that variable to the lexical environment and initialize it with undefined and later during the execution when it reaches the line where the actual assignment is done in the code, it will assign that value to the variable.

// // ******* IMPORTANT *******
// // To avoid bugs, always declare all variables at the beginning of every scope and try to use let and cont. Since this is how JavaScript interprets the code, it is always a good rule. The introduction of let and const resolves this issue by throwing an error when attempting to use a variable before declaring it or attempting to declare a variable more than once. 'let' and 'const' are also hoisted but not in 'global scope' like 'var', they are hoisted in a separate place called 'script'