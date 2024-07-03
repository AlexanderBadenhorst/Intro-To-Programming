"use strict";

//array of words
let words = ["javascript", "monkey", "amazing", "pancake", "dollar", "rocket"];

//gets random word index (choses random word)
let word = words[Math.floor(Math.random() * words.length)].toLowerCase();

//answer array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
let numberOfGuesses = 10;

while (remainingLetters > 0 && numberOfGuesses > 0) {
  alert(answerArray.join(" "));

  let guess = prompt(
    "Guess a letter, or click Cancel to stop playing."
  );
  numberOfGuesses--;
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    guess = guess.toLowerCase()
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
