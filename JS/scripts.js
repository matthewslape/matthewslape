/**Check Check */
console.log("OK");

// Store Background Classes
const backgrounds = ["bg0", "bg1", "bg2"];

// Get Random Number
var numRand;
numRand = Math.floor(Math.random() * backgrounds.length);

// Get element
let pageBackground = document.querySelector("body");

// Set class name from stored values
pageBackground.className = backgrounds[numRand];
