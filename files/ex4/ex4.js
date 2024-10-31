document.querySelector('#button').addEventListener('click', function (event) {
    console.log("inner:");
    console.log("target: " + event.target);
    console.log("currentTarget: " + event.currentTarget);
    console.log("thist: " + this);
    ///*4.*/event.stopPropagation(); // Stoppt das Event-Bubbling
});

document.querySelector('#outerArea').addEventListener('click', function (event) {
    console.log("outer:");
    console.log("target: " + event.target);
    console.log("currentTarget: " + event.currentTarget);
    console.log("thist: " + this);
});

/*1. 
Expected Console Output: When clicking on the button within #outerArea, 
two event listeners are executed: one for the button (#button) and one for the outer div (#outerArea). 
The console output will look as follows:
inner:
target: [Button-Element]
currentTarget: [Button-Element]
thist: [Button-Element]
outer:
target: [Button-Element]
currentTarget: [Div-Element]
thist: [Div-Element]

-The inner listener on the button is triggered first.
-The outer listener on #outerArea is triggered afterward due to event bubbling.
*/

/* 2.
No, becaues of blubbering both the eventlisteners for the buttons and its parrent were executed.
*/

/*3.
    - target: Refers to the element where the event originally occurred. 
      In this case, when clicking on the button, target will always be 
      the button itself (#button), regardless of whether we're in the button's 
      or the outer container's event listener.

    - currentTarget: Refers to the element to which the event listener is attached. 
      For the button's own event listener, currentTarget will be the button itself. 
      For the outer container's listener (#outerArea), currentTarget will be the outer div, 
      even though the actual target of the event is the button.

    - this: In event listeners, this is set to currentTarget by default. So, this will point 
      to the element to which the listener is attached. In the button’s listener, this will 
      refer to the button. In the outer container’s listener, this will refer to #outerArea. 

      */

