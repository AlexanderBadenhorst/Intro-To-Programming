"use strict";
let secret = Math.floor(Math.random() * 20);
let answer = prompt("Please guess the secret number (1-20)");
var guess = parseInt(answer);

if (guess === secret) {
    alert("Correct Guess!");
}
else{
    let newAnswer = prompt("Please guess again");
    let guess2 = parseInt(newAnswer);
while(guess2 > secret || guess2 < secret){
     if (guess2 > secret) {
        alert("Incorrect, too high");
        let guess2  = prompt("Please guess again");
      } else (guess2 < secret) 
        alert("Incorrect, too low");
        let guess2 = prompt("Please guess again");
      }
}