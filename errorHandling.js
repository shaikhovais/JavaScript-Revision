// Topics discussed in this file : try...catch block, finally, throw, custom error, type of errors, error object

// <----------------------------------------- Error Handling ------------------------------------------------>

// Errors Will Happen!!! : No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons. Usually, a script “dies” (immediately stops) in case of an error, printing it to console. But there is a way to handle it.

// *** JavaScript 'try' and 'catch' block : The try statement allows you to define a block of code to be tested for errors while it is being executed. The catch statement allows you to define a block of code to be executed, if an error occurs in the try block. The JavaScript statements try and catch come in pairs.

try {
    console.log(x);                         // we are trying to access a variable which is not defined
} catch(error) {
    console.log(error);                     // ReferenceError: x is not defined
}
console.log("hello");                       // This will run

// Since we are using try catch block, our code will continue even though there is error in our code. If we don't use try catch block then our program will stop at error and it won't run next lines. Uncomment next two lines and see.

// console.log(x);                 // Our program will stop here
// console.log('Hello');           // This line will not run

// *** Type Of Errors: 
// 1) EvalError : An error has occurred in the eval() function.
// Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.

// 2) RangeError : If we use a number that is outside the range of legal values.
// e.g, let num = 1;
//      num.toPrecision(500);   // A number cannot have 500 significant digits

// 3) ReferenceError : If we use (reference) a variable that has not been declared.
// e.g, console.log(sum)        // Accessing a variable which does not exist or not yet declared

// 4) SyntaxError : If we try to evaluate code with a syntax error.
// e.g, console.log('Hello';    // At the end of hello, ")" is missing

// 5) TypeError : If we use a value that is outside the range of expected types.
// e.g, let num2 = 3; 
//      num2.toUpperCase();     // We cannot convert a number to upper case

// 6) URIError : If we use illegal characters in a URI function.
// e.g, decodeURI("%%%");   // We cannot URI decode percent signs 

// *** Very Important : For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript. It won’t work if the code has parse time error (syntactically wrong or SyntaxError), for instance it has unmatched curly braces.

// try {                        // This will not work
//     {
//   } catch (err) {
//     alert("The engine can't understand this code, it's invalid");
// }

// The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code). That’s because the engine can’t understand the code. So, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.

// Catch block will only run if there is an error or else it will skip it

// *** Two more Important Keywords are 'finally' and 'throw'
// The 'finally' statement defines a code block to run regardless of the presence of error.
// The 'throw' statement defines a custom error.

// Uncomment next 7 lines
// try {
//     console.log(home);              // home is not defined so it will throw error 
// } catch (error) {
//     console.log(error);     
// } finally {
//    //regardless of there is error present or not, finally block will always run
//   console.log('Inside finally block'); 
// }

// *** The throw statement allows you to create a custom error. Technically you can throw an exception (throw an error). The exception can be a JavaScript String, a Number, a Boolean or an Object:

// Uncomment next 9 lines
// let json = '{ "age": 30 }';                             // incomplete data
// try {
//   let user = JSON.parse(json);                      
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");  // throwing our custom error
//   }
// } catch (error) {
//   console.log(error);                                   // SyntaxError: Incomplete data: no name
// }

// *** The Error Object : JavaScript has a built in error object that provides error information when an error occurs. The error object provides two useful properties: name and message.
// ReferenceError: x is not defined  
// (here, 'ReferenceError' is name and 'x is not defined' is message and we can access using error.name and error.message respectively)

// *** try...catch works synchronously
// If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:

// try {
//   setTimeout(function() {
//     noSuchVariable; // script will die here
//   }, 1000);
// } catch (err) {
//   alert( "won't work" );
// }

// That’s because the function itself is executed later, when the engine has already left the try...catch construct.
// To catch an exception inside a scheduled function, try...catch must be inside that function:

// setTimeout(function() {
//   try {
//     noSuchVariable; // try...catch handles the error!
//   } catch {
//     alert( "error is caught here!" );
//   }
// }, 1000);

// Few more things just for knowledge : 
// Rethrowing is a very important pattern of error handling: a catch block usually expects and knows how to handle the particular error type, so it should rethrow errors it doesn’t know.
// Even if we don’t have try...catch, most environments allow us to setup a “global” error handler to catch errors that “fall out”. In-browser, that’s window.onerror.

// You can read more about it in the blog link given below and I highly recommend you to read this amazing blog to know more about error handling in detail: 
// https://javascript.info/try-catch