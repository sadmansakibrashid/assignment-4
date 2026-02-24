1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: This are all dom selection method.getElementById
selects one element by it's unique id which we set.
getElementByClassName can select multiple element which have same class.class can be multiple but id is unique and one id can be use on one.it select all element with same class.querySelector select first element that matches css selector.querySelectorAll select all element that matches css selector.it return a NodeList.

2. How do you create and insert a new element into the DOM?
Ans:To create a new element we can do this:

const newDiv = document.createElement("div");

newChild.innertext = 'Hello World'

const parent = document.getElementById("container");

parent.appendChild(newDiv);

here we create a new element and set it innertext,then have to find the parend and append the child to the parent.In this way we can create and insert a new element into the dom.

3.What is Event Bubbling? And how does it work?
Ans:Event Bubbling is the process of how events move though the dom when some events occur like click.When you click an element the event starts at target element then bubbles up to parent Then to the parent's parent all the way up to document.
here how it works:
if i click a item then first the item clicked then it is on ol(order list)  which bubble up then it's parent is section and then it is on body .in this way event bubbling work.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation in javaScript is a technique where i can use one event listener to the parent element instead of using it multiple times.it works because of event bubbling from child to parent.
It is usefull because have to write less code so the code looks cleaner and simple and also memory efficient.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:stopPropagation() stops the function or the event to stop propagating from child to parent.it stops the event to the point or layer where it use it.means that layer will work but that layer parent not reach.Mainly It stops bubbling up.
On the other hand preventDefault() stops the event default behaviour for the event.it does not stop the event bubbling up the dom.