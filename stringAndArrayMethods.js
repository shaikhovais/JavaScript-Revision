// Topics discussed in this file : String methods and array methods 

// <----------------------------------------- String Methods ------------------------------------------------>

let str = "My name is Cristiano Ronaldo.";
let str2 = "I play football for Portugal."

let str3 = 'I love \n football';   // \n new line
console.log("new line : ", str3);

console.log("length : ", str.length);              // string length : '29'

console.log("indexOf(a) : ", str.indexOf("a"));  // find index of first substring, -1 if doesn't contain : '4'
console.log("lastIndexOf(a) : ", str.lastIndexOf("a"));       // find index of last substring : '24'
console.log("indexOf(a) search from 5th position: ", str.indexOf("a", 5));  // find index of first substring from position given : '17'

//IMPORTANT : This methods will return the new value, it will not change the original value!!!

console.log("toUppercase() : ", str.toUpperCase()); // convert to upper case : 'MY NAME IS CRISTIANO RONALDO.'
console.log("toLowercase() : ", str.toLowerCase()); // convert to lower case : 'my name is cristiano ronaldo.'

let subStr = str.substring(11);      //Returns the substring at the specified location, if end is not given then it will return complete string from start position
console.log("substring(11) : ", subStr);        //'Cristiano Ronaldo'

let concatStr = str.concat(" ",str2);         // str + " " + str2
console.log("concat()", concatStr);           // 'My name is Cristiano Ronaldo. I play football for Portugal.'

let slicedStr = str.slice(11, 20);            // cuts out "Cristiano", negative values count from behind
console.log("slice() : ", slicedStr);         // 'Cristiano'

let replacedStr = str.replace("Cristiano","Ovais");       // find and replace, takes regular expressions
console.log("replace() : ", replacedStr);                 // 'My name is Ovais Ronaldo.'

console.log("charAt(1) : ", str.charAt(1));               // character at index: "1", '0' based indexing : 'y'
console.log("str[1] : ", str[1]);                         // unsafe, str[2] = "i" doesn't work : 'y'
console.log("charCodeAt(0) : ", str.charCodeAt(0));       // character code at index given : '77'

console.log("split(' ') : ", str.split(" "));         // splitting a string on ' ', and gives an array of all splitted substrings. it will return an array of substring e.g ['My', 'name', 'is', 'Cristiano', 'Ronaldo.']
console.log("split('') : ", str.split(""));           // splitting all characters in string e.g ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'C', 'r', 'i', 's', 't', 'i', 'a', 'n', 'o', ' ', 'R', 'o', 'n', 'a', 'l', 'd', 'o', '.']

let repeatedStr = str.repeat(3);
console.log(repeatedStr);

let num = 12;        
console.log("toString(10) : ", num.toString(10));  // number to decimal(10), hex(16), octal (8) or binary (2)
console.log("toString(2) : ", num.toString(2));


// <----------------------------------------- Array Methods ------------------------------------------------>
let cricketers = ["Sachin", "Dhoni", "Virat", "Irfan", "Rohit"];
console.log('Arrays is : ', cricketers);

console.log("toString() : ", cricketers.toString());   // convert to string : "Sachin,Dhoni,Virat,Irfan,Rohit"
console.log("join(' * ') : ", cricketers.join(" * ")); // joins all element : "Sachin * Dhoni * Virat * Irfan * Rohit"

cricketers.pop();                                    // remove last element
console.log("pop() : ", cricketers);                 // ['Sachin', 'Dhoni', 'Virat', 'Irfan']
cricketers.push("Bumrah");                           // add new element to the end
console.log("push(Bumrah) : ", cricketers);          // ['Sachin', 'Dhoni', 'Virat', 'Irfan', 'Bumrah']

cricketers.shift();                                  // remove first element
console.log("shift() : ", cricketers);               // ['Dhoni', 'Virat', 'Irfan', 'Bumrah']
cricketers.unshift("Kapil");                         // add new element to the beginning
console.log("unshift('Kapil') : ", cricketers);      // ['Kapil', 'Dhoni', 'Virat', 'Irfan', 'Bumrah']

console.log(cricketers.includes('Virat'));           // returns true if the given element in the argument is present in array

delete cricketers[0];                                // change element to undefined/empty (not recommended)
console.log("delete cricketers[0] : ", cricketers);  // [empty, 'Dhoni', 'Virat', 'Irfan', 'Bumrah']
cricketers.shift();

cricketers.splice(2, 0, "Yuvraj", "Shami");      // add elements (where, how many to remove, element list)
console.log(cricketers);                         // ['Dhoni', 'Virat', 'Yuvraj', 'Shami', 'Irfan', 'Bumrah']

let slicedCricketers = cricketers.slice(2,5);    // Returns a copy of a section of an array.
console.log(slicedCricketers);                   // ['Yuvraj', 'Shami']   

let footballers = ['Neymar', 'Ronaldo', 'Messi'];
let basketballPlayers = ['Jordan', 'Shaq', 'Kobe'];
let sportPlayers = cricketers.concat(footballers, basketballPlayers);  // returns concatenated array
console.log("concat(footballers, basketballPlayers) : ", sportPlayers); // ['Dhoni', 'Virat', 'Yuvraj', 'Shami', 'Irfan', 'Bumrah', 'Neymar', 'Ronaldo', 'Messi', 'Jordan', 'Shaq', 'Kobe']

cricketers.sort();                            // sort string alphabetically
console.log("sort() : ", cricketers);

cricketers.reverse();                         // reverse the array
console.log("reverse() : ", cricketers);

let numbers = [1,4,2,4,6,3,5,8,2];

console.log('find() :', numbers.find((num) => num > 5));      // returns the first element that fulfills the condition

console.log('findIndex() :', numbers.findIndex((num) => num > 5)); // returns the index of first element that fulfills the condition

console.log(numbers.some((num) => num > 4));   // returns true if condition is fulfilled for some element
console.log(numbers.every((num) => num > 4));  // returns true if condition is fulfilled for every element


let newNumbers = numbers.map((num) => num * 10);        // creates a new array by transforming every element in an array individually. 
console.log("map() :", newNumbers);

newNumbers = newNumbers.filter((num) => num < 50);      // creates a new array filled with elements that pass the condition provided in the function.
console.log("filter() :", newNumbers);

newNumbers = numbers.reduce((acc, curr) => acc + curr); // it takes all the elements in an array and reduces them into a single value.
console.log("reduce() :", newNumbers);
//polyfills of this methods are there in polyfills.js file

numbers.sort(function(a, b){return a - b});   // numeric sort ascending
console.log("sort(function(a, b){return a - b}) : ", numbers);
numbers.sort(function(a, b){return b - a});   // numeric sort descending
console.log("sort(function(a, b){return b - a}) : ", numbers);

numbers.forEach((num, index) => numbers[index] = num * 100);    // calls a callback function once for each element in an array, in order.
console.log(numbers);                                 // [800, 600, 500, 400, 400, 300, 200, 200, 100]        

// **** Very Important Interview Question : Difference between forEach and map method
// 1) The returning value — The forEach() method returns undefined, while map() returns a new array with the transformed elements.
// 2) Ability to chain other methods —The map()method is chainable. This means that you can chain other methods (like reduce(), sort(), filter(), and so on), after executing the map() method in an array. This is something you can’t do with forEach() because, as you can guess, it returns undefined.
// 3) Mutability — Mutability means “Capacity or ability to change.” The map() method returns an entirely new array with transformed elements and the same amount of data. In the case of forEach(), even if it returns undefined, it can mutate the original array with the callback. Therefore, we see clearly that map() relies on immutability and forEach() is a mutator method.