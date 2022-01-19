
/******** Selecting Elements with JavaScript ********/

// by tag name. Returns array
document.getElementsByTagName("li")[2].style.color="purple";

// by class name. Returns array
document.getElementsByClassName("btn")[0].style.color = "red";

// by id
document.getElementById("title").innerHTML = "Good Bye";

// by selectors. 
// querySelector. Returns first element that satisfies the selector
document.querySelector("li a");
document.querySelector("#list a");
document.querySelector("li.item");
// querySelectorAll. Return an array with all the elements that satisfy the selector.
document.querySelectorAll("#list a")[0].style.color = "blue";

/* Exercise. Change the text color of the Google link inside the list */
document.querySelector("li a").style.color = "red";

/* Exercise. Change the button's background color to yellow */
document.querySelector(".btn").style.backgroundColor = "yellow";


/******** Interacting with CSS ********/

// returns list with all the element's classes
document.querySelector(".btn").classList;

// adds class to the element. We now define the invisible-class' style with css.
document.querySelector(".btn").classList.add("invisible");

// removes class from element.
document.querySelector(".btn").classList.remove("invisible");

// adds class if element doesn't have it, removes class if it has it
document.querySelector("#title").classList.toggle("huge");


/********* Text Manipulation and HTML inside JavaScript *********/

document.querySelector("h1").innerHTML = "<em> Good Bye </em>";


/********* Getting and Setting Attributes **********/

// returns map with all the element's attributes
document.querySelector("a").attributes;

// returns the value of the specified attribute
document.querySelector("a").getAttribute("href");

// sets the value of the attribute
document.querySelector("a").setAttribute("href","https://bing.com");


