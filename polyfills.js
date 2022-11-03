// Topics discussed in this file : PolyFills of map, forEach, filter, reduce, call, apply and bind,

// <-------------------------------------------- Polyfills -------------------------------------------------->

// Polyfill is a way to modify or add new functions. It is basically a piece of code to add/modify the new functions. It is used to provide modern functionality to web browsers.

// 1) It is basically a piece of code to provide modern functionality to web browsers.
// 2) It is used to add/modify new functionalities.

// It’s like browser fallback what if your browser doesn’t provide the map( ) function then you will need to code your own map( ) function.

// We will be creating polyfills of some modern function and I am hoping that you know these functions already. If not then I will recommend you to first learn about the method of which we will be creating polyfills and then come back again. It is a very important topic for interviews.

// <----------------------------------------- Polyfill of map ---------------------------------------------->

// Uncomment
let arr = [1, 2, 3, 4, 5];

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    if (!callback || typeof callback !== "function") throw TypeError("callback function invalid");
    const myArr = [];
    for (const item of this) {
      myArr.push(callback(item));
    }
    return myArr;
  };
}

let newArr = arr.myMap((num) => num * 100);
console.log(newArr);                                // [100, 200, 300, 400, 500]

// <----------------------------------------- Polyfill of forEach ------------------------------------------->

// Uncomment
// let arr = [1, 2, 3, 4, 5];

// if (!Array.prototype.myForEach) {
//   Array.prototype.myForEach = function (callback) {
//     if (!callback || typeof callback !== "function") throw TypeError("callback function invalid");
//     for (const item of this) {
//       callback(item);
//     }
//   };
// }

// arr.myForEach();

// <----------------------------------------- Polyfill of filter -------------------------------------------->

// Uncomment
// let arr = [1, 2, 3, 4, 5];

// if (!Array.prototype.myFilter) {
//   Array.prototype.myFilter = function (callback) {
//     if (!callback || typeof callback !== "function") throw TypeError("callback function invalid");
//     const myArr = [];
//     for (const item of this) {
//       if (callback(item)) {
//         myArr.push(item);
//       }
//     }
//     return myArr;
//   };
// }

// let newArr = arr.myFilter((num) => num > 2);
// console.log(newArr);                                // [3, 4, 5]

// <----------------------------------------- Polyfill of reduce -------------------------------------------->

// Uncomment
// let arr = [1, 2, 3, 4, 5];

// if (!Array.prototype.myReduce) {
//   Array.prototype.myReduce = function (callback) {
//     if (!callback || typeof callback !== "function") throw TypeError("callback function invalid");
//     let accumulator;
//     let firstIndex;
//     if (arguments.length === 1) {
//       accumulator = this[0];
//       firstIndex = 1;
//     } else {
//       accumulator = initialValue;
//       firstIndex = 0;
//     }

//     for (let index = firstIndex; index < this.length; index++) {
//       accumulator = callback(accumulator, this[index], index);
//     }
//     return accumulator;
//   };
// }

// let sum = arr.myReduce((num,acc) => num + acc);
// console.log(sum);                                // 15

// To understand all of the above polyfills in details please check this blog :
// https://codecrunch.org/javascript-array-methods-polyfills-f2218fa15d2e

// <----------------------------------------- Polyfill of call -------------------------------------------->

// Uncomment
// let printName = function (age) {
//   console.log(`${this.firstName} ${this.lastName}. My age is ${age}`);
// };

// let user1 = {
//   firstName: "Ovais",
//   lastName: "Shaikh",
// };

// if (!Function.prototype.myCall) {
//   Function.prototype.myCall = function (context = {}, ...args) {
//     context.func = this;
//     context.func(...args);
//   };
// }

// printName.myCall(user1, 21);

// <----------------------------------------- Polyfill of apply -------------------------------------------->

// Uncomment
// let printName = function (age) {
//   console.log(`${this.firstName} ${this.lastName}. My age is ${age}`);
// };

// let user1 = {
//   firstName: "Ovais",
//   lastName: "Shaikh",
// };

// if (!Function.prototype.myApply) {
//   Function.prototype.myApply = function (context = {}, args = []) {
//     if (!Array.isArray(args)) {
//       throw new TypeError("CreateListFromArrayLike called on non-object");
//     }
//     context.func = this;
//     context.func(...args);
//   };
// }

// user1.myApply(user1, [21]);

// <------------------------------------------ Polyfill of bind --------------------------------------------->

// Uncomment
// let printName = function (age) {
//   console.log(`${this.firstName} ${this.lastName}. My age is ${age}`);
// };

// let user1 = {
//   firstName: "Ovais",
//   lastName: "Shaikh",
// };

// if (!Function.prototype.myBind) {
//   Function.prototype.myBind = function (context = {}, ...args) {
//     context.func = this;
//     return function(...newArgs) {
//         return context.func(...args, ...newArgs);
//     }
//   };
// }

// let newFunc = printName.myBind(user1);
// newFunc(21);

// Check this video for detailed explanation on call, apply, bind and their polyfills
// https://www.youtube.com/watch?v=VkmUOktYDAU


// **** For polyfills of debounce and throttling, check debouncingAndThrottling.js