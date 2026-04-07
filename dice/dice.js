/* Jordan Boykin */
"use strict";
const favoriteColor = prompt("What is your favorite color?");
 
const letsPlay = document.querySelector("h1");
letsPlay.style.color = favoriteColor;
 
const diceLabels = document.querySelectorAll(".dice p");
diceLabels.forEach(label => {
    label.style.color = favoriteColor;
});
 
function rollDie(dieNumber) {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
 
    const dieId = `img${dieNumber}`;
 
    const imgSrc = `images/dice${randomNumber}.png`;
 
    document.getElementById(dieId).src = imgSrc;
}
 
for (let i = 1; i <= 5; i++) {
    rollDie(i);
}

document.querySelector("button").addEventListener("click", function () {
    for (let i = 1; i <= 5; i++) {
        rollDie(i);
    }
});









