// Topics discussed in this file : web storage API, local storage, session storage, cookies

// <----------------------------- ------------ Web Storage API ---------------------------------------------->

// The Web Storage API provides mechanisms by which browsers can store key/value pairs.The two mechanisms within Web Storage are Local Storage and Session Storage. This helps in boosting performance and providing better user experience. In web storage we store values in the form of key / value pair. Key/value pairs are always stored as strings. 'key' should be always different because we can't have 2 key/value pair stored with same name, if we do then value of second pair will overwrite previous one. We can see these storages in Chrome browser by opening developer tools ('Inspect') and then clicking the "Application" tab. 
// For e.g, Flipkart stores pin codes of user in the local storage, so next time when we open flipkart it will access the pin code and then show us products quickly as per our region. Accessing data from local storage is faster than making a network call to backend and getting data of user.

// <------------------------------------------ Local Storage ------------------------------------------------>

// The localStorage object stores the data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

// Storing / Setting
localStorage.setItem("name", "ovais");

// Retrieving / Getting
let userName = localStorage.getItem('name')
console.log(userName);                  // Ovais

// Deleting / Removing
// localStorage.removeItem('name2')  

// Clearing all data 
// localStorage.clear()   

// Get the number of key / value pair in the storage
console.log(localStorage);       // 1

// If we are sending an object, then we need to use stringify() method before storing.
// Uncomment
// let userData = {
//     name: 'Ovais Shaikh',
//     age: 21,
//     location: 'Mumbai',
//     skills: ['HTML','CSS','JavaScript','ReactJS','NodeJS','ExpressJS','MongoDB']
// }
// let stringifiedUserData = JSON.stringify(userData);         // converting object into string
// localStorage.setItem('userData', stringifiedUserData);      // storing in storage as a string
// let retrievedData = localStorage.getItem('userData');       // retrieving data back from storage    
// console.log('retrievedData', retrievedData);                // data is in string
// let convertedData = JSON.parse(retrievedData);              // converting string back to object
// console.log('convertedData', convertedData);                // data is in object form

// We can access data only if the origin of the current tab and the stored data is same. Same origin means their protocol (e.g, http or https), host/domain (e.g, flipkart.com) and port (e.g, 8080) should be same.

// <------------------------------------------ Session Storage ---------------------------------------------->

// Session Storage objects can be accessed using the sessionStorage read-only property. The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends. A unique page session gets created once a document is loaded in a browser tab. Page sessions are valid for only one tab at a time. Pages are only saved for the amount of time that the tab or the browser is open; they do not persist after the page reloads and restores. A new session is created each time a tab or window is opened. Each tab/window that is opened with the same URL creates its own sessionStorage. When we duplicate a tab, the sessionStorage from the original tab is copied to the duplicated tab. Closing a window/tab ends the session and clears sessionStorage objects.
 
// Methods of sessionStorage are same as localStorage 

// <---------------------------------------------- Cookies -------------------------------------------------->

// Cookies are small files of information that a web server generates and sends to a web browser. Web browsers store the cookies they receive for a predetermined period of time, or for the length of a user's session on a website. They attach the relevant cookies to any future requests the user makes of the web server. Cookies help inform websites about the user, enabling the websites to personalize the user experience. For example, e-commerce websites use cookies to know what merchandise users have placed in their shopping carts. In addition, some cookies are necessary for security purposes, such as authentication cookie. The cookies that are used on the Internet are also called "HTTP cookies." Like much of the web, cookies are sent using the HTTP protocol. It is also stored in same location as localStorage/sessionStorage. Just like storage, 'key' should be always different because we can't have 2 key/value pair stored with same name, if we do then value of second will overwrite previous one.

document.cookie = 'Character Name=Iron Man';                // creating a cookie

// creating a cookie with expiry date
document.cookie = 'Real Name=TonyStark; expires=' + new Date(2023, 1, 1).toUTCString(); 

console.log(document.cookie);                               // to see all cookies stored

// To learn more about cookies
// https://www.cloudflare.com/en-gb/learning/privacy/what-are-cookies/
// https://developer.chrome.com/docs/devtools/storage/cookies/?utm_source=devtools


// **** Difference Between Local Storage, Session Storage, And Cookies

//                                COOKIES                        LOCAL STORAGE                 SESSION STORAGE
// Capacity                         4kb                              10mb                           5mb
// Browsers                     HTML4/HTML5                          HTML5                         HTML5
// Accessible from              Any window                         Any window                     Same Tab
// Expires                      Manually set                         Never                      On tab close
// Storage location          Browser and server                    Browser only                 Browser only
// Sent with requests               Yes                               No                            No

