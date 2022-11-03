// Topics discussed in this file : DOM, selectors, create and remove elements, manipulate attributes, classlist

// /* DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic. The DOM views an HTML document as a tree of nodes. A node represents an HTML element. Our document is called the root node and contains one child node which is the <html> element. The <html> element contains two children which are the <head> and <body> elements. Both the <head> and <body> elements have children of their own. We can access these elements in the document and make changes to them using JavaScript. This is called DOM Manipulation */

// // <--------------------------------- Selectors(Accessing DOM elements) ---------------------------------->

// // ** Single Selectors **

// // 1) Id (Access DOM element with the id)
// document.getElementById('container');

// // 2) QuerySelector (Access DOM element with class, id)
// document.querySelector('.student');
// document.querySelector('#location');

// // ** Group Selectors **
// //Group selectors returns a collection of all elements with a specified tag/class/query. use '[0]' or '[1]' to access any particular element.

// // 3) TagName (Access DOM elements with the same tag e.g div, h1)
// document.getElementsByTagName('li');
// document.getElementsByTagName('li')[2];

// // 4) ClassName (Access DOM elements with the same class)
// document.getElementsByClassName('student');
// document.getElementsByClassName('student')[0];

// // 5) QuerySelectorAll (Access DOM elements with the same class or id)
// document.querySelectorAll('.student');
// document.querySelectorAll('.student')[1];

// // <------------------------------- Create Element and Append it to DOM ---------------------------------->

// let newDiv = document.createElement('div');
// newDiv.style.color = 'red';
// newDiv.innerText = 'Hello';
// document.getElementById('container').appendChild(newDiv);

// // <--------------------------------- Remove Element from DOM ---------------------------------->

// let element = document.querySelector('#some-element');
// element.parentNode.removeChild(element);

// // <--------------------------------- Manipulate Attributes ---------------------------------->
// element.hasAttribute('name')                // checks for existence.
// element.getAttribute('name')                // gets the value.
// element.setAttribute('name', 'value')       // sets the value.
// element.removeAttribute('name')             // removes the attribute.

// // <--------------------------------- Classlist ---------------------------------->

// element.classList.item(index); // Returns the item in the list by its index, or undefined if index is greater than or equal to the list's length
// element.classList.contains('token'); // Returns true if the list contains the given token, otherwise false.
// element.classList.add('newToken'); // Adds the specified token(s) to the list.
// element.classList.remove('token'); // Removes the specified token(s) from the list.
// element.classList.replace('oldToken', 'newToken'); // Replaces token with newToken.
// element.classList.supports('token'); // Returns true if a given token is in the associated attribute's supported tokens.
// element.classList.toggle('token'); // Removes token from the list if it exists, or adds token to the list if it doesn't.
// element.classList.entries(); // Returns an iterator, allowing you to go through all key/value pairs contained in this object.