"use strict";
let secret = Math.floor(Math.random() * 20);
let answer = prompt("Please guess the secret number (1-20)");
var guess = parseInt(answer);

if (guess === secret) {
    disp = "Correct Guess!";
} else if (guess > secret) {
    disp = "Incorrect, too high";
  } else if (guess < secret) {
    disp = "Incorrect, too low";
  } else {
    disp = "“Sorry, incorrect Guess!";
  }
