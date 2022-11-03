// Topics discussed in this file : Prototype, Prototypal inheritance, prototypal chain

// <--------------------------------- Prototype and Prototypal Inheritance ---------------------------------->

// *** In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype.Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. 

// *** The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. We use '__proto__' as a setter/getter for prototype. 

let human = {
    age: 40,
    walk() {
        console.log('I can walk');
    },
    
}

let superHuman = {
    fly() {
        console.log('I can fly');
    },
    __proto__: human           //adding 'human' in prototype, now we can use methods and variables of 'human'
}

let batman = Object.create(superHuman);
batman.fly();                               // Output: 'I can fly'               
batman.walk();                              // Output: 'I can walk'   (accessing method of 'human')
console.log(batman.age);                    // Output: 40             (accessing variable of 'human')

// We are accessing variable and methods of human in object with the prototype of superhuman. 
// 'age' and 'walk()' is being inherited to superhuman by human. This is called prototypal inheritance. First it will check in it's own prototype(superhuman), if not found then it will go to human. This is also called prototypal chain in which at the end, last prototype will be pointing to 'null'. If we are accessing something which is not in the prototype chain, then it will return 'undefined'

// ** Advantage : It helps us to write less code and also helps in saving memory
// ** Disadvantage : Objects cannot inherit from multiple prototypes and it cannot flow in circles.
// e.g Obj1 has a prototype of Obj2 and Obj2 has a prototype of 1. This creates a loop(circle) which is not allowed.

// *** One more good example: 

function Person () {                                // constructor function
    this.team = 'India',
    this.profession = 'Cricketer'
}

// creating objects
const virat = new Person();
const rohit = new Person();

Person.prototype.gender = 'male';                   // adding property to constructor function

console.log(rohit.gender);                          // Output : male    inheriting the property from prototype
console.log(virat.gender);                          // Output : male    inheriting the property from prototype
console.log(rohit.team);                            // Output : India

// For more info : https://www.programiz.com/javascript/prototype