// Topics discussed in this file : Events, Type of Events, Event bubbling / Capturing / Propagation / Delegation, Stop event Propagation

// Events are actions or occurrences that happen in the system we are programming, which the system tells us, so that our code can react to them.
// For example, if the user clicks a button on a webpage, we might want to react to that action by displaying an information box.

// <----------------------------------------- Types of events ----------------------------------------------->

// Mouse:
// onclick : The event occurs when the user clicks on an element
// oncontextmenu : User right-clicks on an element to open a context menu
// ondblclick : The user double-clicks on an element
// onmousedown : User presses a mouse button over an element
// onmouseenter : The pointer moves onto an element
// onmouseleave : Pointer moves out of an element
// onmousemove : The pointer is moving while it is over an element
// onmouseover : When the pointer is moved onto an element or one of its children
// onmouseout : User moves the mouse pointer out of an element or one of its children
// onmouseup : The user releases a mouse button while over an element

// Keyboard:
// onkeydown : When the user is pressing a key down
// onkeypress : The moment the user starts pressing a key
// onkeyup : The user releases a key

// Frame:
// onabort : The loading of a media is aborted
// onbeforeunload : Event occurs before the document is about to be unloaded
// onerror : An error occurs while loading an external file
// onhashchange : There have been changes to the anchor part of a URL
// onload : When an object has loaded
// onpagehide : The user navigates away from a webpage
// onpageshow : When the user navigates to a webpage
// onresize : The document view is resized
// onscroll : An element’s scrollbar is being scrolled
// onunload : Event occurs when a page has unloaded

// Form:
// onblur : When an element loses focus
// onchange : The content of a form element changes (for <input>, <select>and <textarea>)
// onfocus : An element gets focus
// onfocusin : When an element is about to get focus
// onfocusout : The element is about to lose focus
// oninput : User input on an element
// oninvalid : An element is invalid
// onreset : A form is reset
// onsearch : The user writes something in a search field (for <input="search">)
// onselect : The user selects some text (for <input> and <textarea>)
// onsubmit : A form is submitted

// Drag:
// ondrag : An element is dragged
// ondragend : The user has finished dragging the element
// ondragenter : The dragged element enters a drop target
// ondragleave : A dragged element leaves the drop target
// ondragover : The dragged element is on top of the drop target
// ondragstart : User starts to drag an element
// ondrop : Dragged element is dropped on the drop target

// Clipboard:
// oncopy : User copies the content of an element
// oncut : The user cuts an element’s content
// onpaste : A user pastes content in an element

// Media:
// onabort : Media loading is aborted
// oncanplay : The browser can start playing media (e.g. a file has buffered enough)
// oncanplaythrough : When browser can play through media without stopping
// ondurationchange : The duration of the media changes
// onended : The media has reached its end
// onerror : Happens when an error occurs while loading an external file
// onloadeddata : Media data is loaded
// onloadedmetadata : Meta Metadata (like dimensions and duration) are loaded
// onloadstart : Browser starts looking for specified media
// onpause : Media is paused either by the user or automatically
// onplay : The media has been started or is no longer paused
// onplaying : Media is playing after having been paused or stopped for buffering
// onprogress : Browser is in the process of downloading the media
// onratechange : The playing speed of the media changes
// onseeked : User is finished moving/skipping to a new position in the media
// onseeking : The user starts moving/skipping
// onstalled : The browser is trying to load the media but it is not available
// onsuspend : Browser is intentionally not loading media
// ontimeupdate : The playing position has changed (e.g. because of fast forward)
// onvolumechange : Media volume has changed (including mute)
// onwaiting : Media paused but expected to resume (for example, buffering)

// Animation:
// animationend : A CSS animation is complete
// animationiteration : CSS animation is repeated
// animationstart : CSS animation has started

// Other:
// transitionend : Fired when a CSS transition has completed
// onmessage : A message is received through the event source
// onoffline : Browser starts to work offline
// ononline : The browser starts to work online
// onpopstate : When the window’s history changes
// onshow : A <menu> element is shown as a context menu
// onstorage : A Web Storage area is updated
// ontoggle : The user opens or closes the <details> element
// onwheel : Mouse wheel rolls up or down over an element
// ontouchcancel : Screen touch is interrupted
// ontouchend : User finger is removed from a touch screen
// ontouchmove : A finger is dragged across the screen
// ontouchstart : Finger is placed on touch screen

// For more events, check out ...... https://developer.mozilla.org/en-US/docs/Web/Events

// <----------------------------------------- EventListener ----------------------------------------------->
// An event listener in JavaScript is a way that we can wait for user interaction like a click or keypress and then run some code whenever that action happens. This function takes a minimum of two parameters. The first parameter is just a string which is the name of the event to listen to. The second parameter is a function that has one single argument which is the event argument, commonly called 'e'. This function is called every time the event occurs and the event object 'E' contains information about the event.
const button = document.querySelector("#btn");
const para = document.querySelector("#para");
button.addEventListener("click", (e) => {
  para.innerHTML = "Button is clicked";
});
// button.addEventListener('click', myFunction);                //we can also refer to an external "named" function:

// we can add many event handlers to one element.
// **** we can easily remove an event listener by using the removeEventListener() method. e.g 
// button.removeEventListener('click', myFunction);
// button.removeEventListener('click', myFunction, { once : true });   // if we want event to run only once
// removing event on some conditions:
// let count = 0
// const controller = new AbortController()
// button.addEventListener("click", () => {
//   count++
//   console.log(count)
//   if (count >= 3) {
//     controller.abort()
//   }
// }, { signal: controller.signal })
// First we are creating a new AbortController. We then take that AbortController and pass the signal property of it to the signal property of the options object for our addEventListener function. This connects our event listener to that AbortController so if we abort it will remove the event listener. Then finally in our code we are calling the abort method on our AbortController when the count is greater than or equal to 3 which will remove the event listener.

// <----------------------------- Event Propagation (Bubbling and Capturing) -------------------------------->
// Event Propagation determines in which order the elements receive the event. There are two ways to handle this event propagation order of HTML DOM is Event Bubbling and Event Capturing.

// |                /\
// |                |
// |                |
// \/               |
// capturing      Bubbling  

// ********* Event Bubbling **************
// When an event is triggered on an element it will bubble that event up the document tree to all the elements the element is inside of. In our example when the child is clicked it will also trigger a click event listener on the parent element since the child is inside the parent element. This even goes one step further and triggers a click event listener on the document itself as well. 

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

document.addEventListener('click', () => {
    console.log('Document bubble');
})

parent.addEventListener("click", () => {
  console.log("Parent bubble");
});

child.addEventListener("click", () => {
  console.log("Child bubble");
});

//If we click inside of the child element:
//Output : 
// Child bubble
// Parent bubble
// Document bubble

// ** Important 
// One important thing to know about event bubbling is that not all events bubble up. Events like the focus event which fire when an element receives focus do not bubble up. Generally events that do not bubble make sense not to bubble since they only pertain to the individual element the event fires on such as the focus event.

// ********* Event Capturing **************
// Bubble phase which is the default phase where event listeners fire, but events also have another phase called the capture phase which happens first. The capture phase is just like the bubble phase but the event starts at the top level element, in our case the document, and works its way inward. This means in our example if we click on the child element we will trigger a capture event listener for the document, then the parent, then the child. We will then enter the bubble phase and trigger bubble event listeners for the child, then the parent, then the document. It is also called trickle down.
// So far we have only covered how to setup event listeners for the bubble phase, but if we want to have a capture event listener then we need to use the third parameter of the addEventListener function. This third parameter is an options object that has a capture property which when set to true will label this event as a capture event.

// Uncomment lines below till 'Output'

// parent.addEventListener("click", () => {
//     console.log("Parent capture");
//   }, true);
  
// child.addEventListener("click", () => {
//     console.log("Child capture");
// }, true);

// document.addEventListener('click', () => {
//     console.log('Document capture');
// }, true)

//Output : 
// Document capture
// Parent capture
// Child capture
// Child bubble
// Parent bubble
// Document bubble

// As we can see all the capture event listeners we created fire first and then the bubble event listeners fire next.

// <----------------------------- Stopping Event Propagation -------------------------------->

// It may seem strange to have these two phases of events but the reason for this is so that we can respond to events in the order we need. One common use case for using a capture event is to catch an event before it gets to the children and actually stop it.

parent.addEventListener("click", e => {
    console.log("Parent Capture 2")
    e.stopPropagation()
}, true )
  
child.addEventListener("click", () => {
    console.log("Child Bubble 2")         //this will never run due to stopPropagation()
})

// By using the stopPropagation method on the event object we are able to stop the event from continuing its capturing and bubbling which means if there are any other event listeners in the chain that would fire they do not. In the above example only Parent Capture will be logged since we stop the event from propagating after the parent capture event listener.
// Another method, stopImmediatePropagation is available on the event object and this works a bit differently. If we use the stopImmediatePropagation then the event will not only stop propagation to the child/parent elements through the bubble and capture phases, but it will also stop other events on the element from triggering as well. It is important to note that the event listeners on the same element will trigger in the order they are defined so if we want to stop other event listeners from firing with this method they must be defined after the listener that stops propagation.

// <------------------------------------------ Event Delegation -------------------------------------------->

// Event Delegation is a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the '.target' property of the event object.

// const buttons = document.querySelectorAll("button")
// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     console.log("Clicked Button")
//   })
// })
// const newButton = document.createElement("button")
// document.body.append(newButton)

// In the above code we are selecting all the buttons on our page and adding an event listener to listen for a click on those buttons. Then after all that we are adding a brand new button to the page. This new button does NOT have any click event listener attached to it since it was added to the page after our event listeners were added.
// With event delegation we set up wer event listener on a parent element, such as the document, and then inside that parent element we check to see if the event was fired by the elements we care about before running wer event code.

// document.addEventListener("click", e => {
//   if (e.target.matches("button")) {
//     console.log("Clicked Button")
//   }
// })
// const newButton = document.createElement("button")
// document.body.append(newButton)

// Since the click event bubbles up to the parent elements we know that eventually any click event on our page will make it to the document. We are then checking in the document to see if the target of the event matches the selector button. This selector we pass to matches is just a CSS selector similar to what we pass to querySelector.
// By writing our code like this we ensure that any button on our page, even newly added buttons, will work properly when clicked. If we click on something that is not a button, though, the e.target.matches code will return false which means nothing will be logged.

// ***** Dynamically adding eventlistener 
// Essentially, anytime we are dealing with adding elements to a page dynamically it pays to write an event listener on the parent to delegate that event when the correct criteria is met. This is actually such a common use case we can have a simple helper function to do this.

// function addGlobalEventListener(type, selector, callback, options) {
//   document.addEventListener(type, e => {
//     if (e.target.matches(selector)) callback(e)
//   }, options)
// }
// addGlobalEventListener("click", ".btn", () => {
//   console.log("Clicked Button")
// }, { once: true })