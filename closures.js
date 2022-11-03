// Topics discussed in this file : Closure, Advantages and Disadvantages

// <--------------------------------------------- Closures -------------------------------------------------->

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
// One more way to define closure: Closures are functions that have access to the variables that are present in their scope chain even if the outer function ceases to exist.

function outer() {                      // outer function
    let outerVar = 3;                   // variable in outer scope
    function inner() {                  // inner function
        console.log(outerVar);          // accessing outer variable in inner function
    }
    return inner;                       // returning inner function with it's lexical scope
}

let temp = outer();                     // temp will store 'inner function'
// console.log(temp);
temp();         // Output : 3           // we call inner function which has access to it's outer variable

// Important : Closures do not store static values. Instead, they store references to the variables present inside the scope chain. In this way, even if the outer function dies, the inner function, that is a closure, still has access to its parent variables.

// ******* Advantages of closure
// 1) Encapsulation of data / Private variables and methods
const counter = () => {
    let count = 0;
    return {
        increment() {
            count++;
            console.log("Incremented : " + count);
        },
        decrement() {
            count--;
            console.log("Decremented : " + count);
        },
        value() {
            console.log(count);
        }
    }
}

console.log("------Counter1--------");
let counter1 = counter();      
counter1.increment();
counter1.increment();
counter1.decrement();

console.log("------Counter2--------");
let counter2 = counter();
counter2.increment();
counter2.decrement();

// Here, there is a single lexical environment that is shared by the three functions: counter.increment, counter.decrement, and counter.value. They formed the closure with same lexical environment. The lexical environment contains a private variable called 'count'. We can't access these count directly. Instead, we can access them using the three public functions that are returned.
// Notice how the two counters maintain their independence from one another. Each closure references a different version of the privateCounter variable through its own closure. Each time one of the counters is called, its lexical environment changes by changing the value of this variable. Changes to the variable value in one closure don't affect the value in the other closure.

// 2) It is used in function currying (see miscellaneous file to know currying)
// 3) Memoization
// 4) They help maintain modular code.

// ******* Disadvantages of closure
// 1) The variables declared inside a closure are not garbage collected.
// 2) Too many closures can slow down your application. This is actually caused by duplication of code in the memory.


// Very Important Closure Question !!!!!!
function x() {
    for(var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}
x();
//Make changes so that it prints :
// 1    // after 1 sec
// 2    // after 2 sec
// 3    // after 3 sec
// 4    // after 4 sec
// 5    // after 5 sec

// 1st solution : use 'let' instead of 'var' because let is block scoped so each time it will point to new number
// function y() {
//     for(let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
// }
// y();

//2nd solution : we can only use var, so now we will form a new closure for every number
// function z() {
//     for(var i = 1; i <= 5; i++) {
//         function close(num) {
//             setTimeout(() => {
//                 console.log(num);
//             }, num * 1000)
//         }
//         close(i);
//     }
// }
// z();