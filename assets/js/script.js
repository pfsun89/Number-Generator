// Return random integer between 0 and 12
// Math.floor turns it into a whole integer
// Math.random generates a random number
// Multiply it by 13 to give it a range between 0 and 12. Not 13 because 0 counts a number value
document.getElementById("number").innerHTML = Math.floor(Math.random() * 13);