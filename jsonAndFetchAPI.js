// Topics discussed in this file : JSON, API, REST API, fetch(), axios

// <---------------------------------------------- JSON ----------------------------------------------------->

// JSON stands for JavaScript Object Notation. It is a lightweight format for storing and transporting data. It is often used when data is sent from a server to a web page. JSON is a string whose format very much resembles JavaScript object literal format. We can include the same basic data types inside JSON as we can in a standard JavaScript object — strings, numbers, arrays, booleans, and other object literals. JSON is language independent.

// {
//     "companyName" : "Amazon",
//     "formed" : 1995,
//     "active" : true,
//     "employees":[
//         {"firstName":"John", "lastName":"Doe"},
//         {"firstName":"Anna", "lastName":"Smith"},
//         {"firstName":"Peter", "lastName":"Jones"}
//     ]
// }

// Check this out : https://www.instagram.com/p/Chd5XisMBeJ/?igshid=MDJmNzVkMjY%3D

// JSON Syntax Rules
// 1) Data is in name/value pairs
// 2) Name/Value pair is separated by a colon
// 3) JSON names require double quotes. (JavaScrip names do not)
// 4) Data is separated by commas
// 5) Curly braces hold objects
// 6) Square brackets hold arrays

// Why JSON ?
// The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects. Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

// JavaScript has a built in function for converting JSON strings into JavaScript objects:
// JSON.parse()

// JavaScript also has a built in function for converting an object into a JSON string:
// JSON.stringify()

// We can receive pure text from a server and use it as a JavaScript object. We can send a JavaScript object to a server in pure text format.

// To learn about JSON in more depth : https://www.w3schools.com/js/js_json_intro.asp

// <---------------------------------------------- API -------------------------------------------------->
// API stands for application programming interface, which is a set of definitions and protocols for building and integrating application software. For example, the weather bureau’s software system contains daily weather data. The weather app on our phone “talks” to this system via APIs and shows us daily weather updates on our phone. API architecture is usually explained in terms of client and server. The application sending the request is called the client, and the application sending the response is called the server. So in the weather example, the bureau’s weather database is the server, and the mobile app is the client. 

// There are multiple ways of creating API. Most popular and used is 'REST API' 
// REST API: REST stands for Representational State Transfer. These are the most popular and flexible APIs found on the web today. REST defines a set of functions like GET, PUT, DELETE, etc. that clients can use to access server data. Clients and servers exchange data using HTTP. The client sends requests to the server as data. The server uses this client input to start internal functions and returns output data back to the client. The main feature of REST API is statelessness. Statelessness means that servers do not save client data between requests. Client requests to the server are similar to URLs we type in our browser to visit a website. The response from the server is plain data, without the typical graphical rendering of a web page.

// For more details on API: https://aws.amazon.com/what-is/api/

// <---------------------------------------------- fetch() -------------------------------------------------->

// The Fetch API is a modern interface that allows us to make HTTP requests to servers from web browsers. The Fetch API is much simpler and cleaner compared to XLMHttpRequest. It uses the Promise to deliver more flexible features to make requests to servers from the web browsers. The fetch() method is available in the global scope that instructs the web browsers to send a request to a URL. It is asynchronous in nature.

// *** Sending a Request : The fetch() requires only one parameter which is the URL of the resource that we want to fetch. 
// e.g let response = fetch(url)

// The fetch() method returns a Promise so we can use the then() and catch() methods to handle it:
// fetch(url)
// .then(response => {
//     // handle the response
// })
// .catch(error => {
//     // handle the error
// });

// When the request completes, the resource is available. At this time, the promise will resolve into a Response object. The Response object is the API wrapper for the fetched resource. 

let url = 'https://jsonplaceholder.typicode.com/users/'
let response = fetch(url)
.then(response => response.json())              // resource is returned wrapped in Response Object
.then(json => console.log("normal fetch", json))
.catch(error => console.log(error))

// The Response object has a number of useful properties and methods to inspect the response. Response object has other methods such as json(), blob(), formData() and arrayBuffer() to handle the respective type of data.
// It also provides the status code and status text via the status and statusText properties. When a request is successful, the status code is 200 and status text is OK:

// ***** fetch() using async await 
async function getUsers(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log("async/await", data);
}
getUsers('https://jsonplaceholder.typicode.com/users/')

// <---------------------------------------------- Axios -------------------------------------------------->

// Axios is an open-source library for making HTTP requests and provides many great features, and it works both in browsers and Node.js. It is a promise-based HTTP client that can be used in plain JavaScript and advanced frameworks like React, Vue.js, and Angular.

// Installation:
// 1) If you are using any one of the package managers like npm or yarn.
// npm install axios / yarn add axios

// 2) The easiest way to include Axios is by using external CDN:
{/* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */}

// The following are the advantages of Axios:
// Axios performs automatic transformations and returns the data in JSON format.
// Better error handling
// Axios has a wide range of supported browsers.

// axios.get('someRandomUrl')                               // don't uncomment it, this is just an example
// .then(response => console.log(response.data))
// .catch(error => console.log(error))

// To know more about axios, check the documentation : https://axios-http.com/docs/api_intro

// We can also make HTTP request using jQuery
