Live link:
https://smash003.github.io/Emergency_Hotline-A5/


Answers:
Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: “getElementById” selects the element with the provided ID. Because IDs are unique, it returns only one element. On the other hand, “getElementByClassName” selects all components that have the same class. 
“querySelector” Selects only the first matching element. But “querySelectorAll” selects all matching elements.

Q2. How do you create and insert a new element into the DOM?
Ans: 	Create:
		let Div = document.createElement(“div”);
	Insert: 
		document.body.appendChild(Div);
    
Q3. What is Event Bubbling and how does it work?
Ans:  When an element is clicked and the event starts on that element and then travels upwards to its parent, then the parent’s parent, and so on, that is called event bubbling.

Q4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Instead of adding event listeners to many child elements, we can add a single listener to the parent and let events bubble up; this is called Event Delegation.

Q5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: "preventDefault()" stops the browser’s default action and "stopPropagation()" stops the event from bubbling.
