// JavaScript File (script.js)

// Select the container div
const container = document.querySelector("#container");

// Create and append a <p> element with red text
const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I’m red!";
redParagraph.style.color = "red";
container.appendChild(redParagraph);

// Create and append an <h3> element with blue text
const blueHeading = document.createElement("h3");
blueHeading.textContent = "I’m a blue h3!";
blueHeading.style.color = "blue";
container.appendChild(blueHeading);

// Create a <div> with a black border and pink background
const pinkDiv = document.createElement("div");
pinkDiv.style.border = "1px solid black";
pinkDiv.style.backgroundColor = "pink";

// Create and append an <h1> inside the pink <div>
const pinkDivHeading = document.createElement("h1");
pinkDivHeading.textContent = "I’m in a div";
pinkDiv.appendChild(pinkDivHeading);

// Create and append a <p> inside the pink <div>
const pinkDivParagraph = document.createElement("p");
pinkDivParagraph.textContent = "ME TOO!";
pinkDiv.appendChild(pinkDivParagraph);

// Append the pink <div> to the container
container.appendChild(pinkDiv);
