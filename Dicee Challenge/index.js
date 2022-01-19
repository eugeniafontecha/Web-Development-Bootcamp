
// get random number for player 1 and set the corresponding dice image
var randomNumber1 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// get random number for player 2 and set the corresponding dice image
var randomNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩"
} else {
    document.querySelector("h1").textContent = "Draw!"
}