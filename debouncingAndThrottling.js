// Topics discussed in this file : Debouncing, throttling, difference, use cases and polyfills of both

// <------------------------------------------ Debouncing -------------------------------------------------->

let input = document.getElementById('input');
input.placeholder = 'Input for debouncing/throttling';

// There are many events in JS that trigger super quickly e.g, scrolling page, resizing window, moving mouse etc. In many cases, we don't need to capture every single intermediate step, but only interested in capturing the end state (when the user finishes scrolling, or finishes resizing the window).

// One real life example: There is an app which has a search bar like netflix. In this user wants to search for a movie called 'avengers'. Now there will be an event listener which will call api on every 'keyDown' or 'keyUp' in the search bar. So to just search avengers there will be 8 api calls ('a','av','ave','aven','aveng','avenge','avenger' and 'avengers'). Making so many unnecessary api calls will make our application slow and will also waste users data. Therefore, to tackle this problem we use 'DEBOUNCING'

// Debouncing is a strategy that lets us improve performance by waiting until a certain amount of time has passed before triggering an event. When the user stops triggering the event, our code will run.

// this 2 variables will count how many times the function is called when, you can see this in the console
let normalTimes = 1;                    
let debounceTimes = 1;

let debounceFunc = debounce(func2 ,500);            // 'func2' will run after 500ms (we can give our own time)

// this function will run only once and it will return a function which will be assigned to 'debounceFunc'
function debounce(cbFunc, delay) {   
    let timerId;
    return ((...args) => {         
        // If function is called within given 'delay' time then it will clear previous timeout and start new timeout             
        if (timerId) clearTimeout(timerId);                  
        timerId = setTimeout(() => {
            cbFunc(...args);
        }, delay)
        
        //One more method of debouncing: 
        // let context = this; 
        // args = arguments;
        // if (timerId) clearTimeout(timerId); 
        // timerId = setTimeout( () => {
        //     dbFunc.apply(context, args);
        // } ,delay);
    })
}

function func() {
    console.log(`Normal function ran ${normalTimes++}`);
}
function func2() {
    console.log(`Debounce function ran ${debounceTimes++}`);
}

input.addEventListener('keydown', func);
input.addEventListener('keydown', debounceFunc);

// Type in the input box something fast and see how many times each function is called in the console. You can see that 'debounceFunc' will run less compared to normal func and it will run only when there is a delay of 500ms in typing. It will not do unnecessary api calls. This will smooth our application a lot, when there are lot of api call in our application.

// To learn more about debouncing : https://www.joshwcomeau.com/snippets/javascript/debounce/

// <------------------------------------------- Throttling -------------------------------------------------->

// Throttling is used to call a function after every millisecond or a particular interval of time, only the first click is executed immediately. Just like debouncing, it also helps to limit the number of times function will run or api calls. Main difference between debouncing and throttling is that : in debouncing function will run only if user has stopped calling for a particular amount of time. In throttling function will be always called once in a specified amount of time. 

// We use throttling where user is calling a function many times and super quickly, at that time we want to limit the calls but also give user something so we run the function once in every specified amount of time. 
// e.g, Infinite scrolling in twitter: In twitter api call is made in every scroll but it is very fast so we had to limit the api calls. But at the same time we want to show something to the user, so we make api calls once in specified amount of time. 

// Uncomment variables and functions below
                
let throttleTimes = 1;

let throttleFunc = throttle(func3 ,500);            // 'func3' will always run once after 500ms

function throttle(cbFunc, delay) {    
    let lastTime;
    return ((...args) => {         
        // if the difference between last time and current time is greater than the specified delay time then the function will run once 
        let currentTime = new Date().getTime();  

        if(currentTime - lastTime > delay) return;

        lastTime = currentTime;
        return cbFunc(...args)
    })
}

function func3() {
    console.log(`Throttle function ran ${throttleTimes++}`);
}

input.addEventListener('keydown', throttleFunc);

// Now type something fast in the input and you will notice that throttle function will always run after specified amount of time(here we have given 500ms).