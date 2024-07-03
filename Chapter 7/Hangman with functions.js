"use strict";

let words = [
  "javascript",
  "monkey",
  "amazing",
  "flowers",
  "umbrella",
  "wonderful",
];
let word = pickWord();
let answerArray = [];
setupAnswerArray();

let remainingLetters = word.length;
let numberOfGuesses = 11;
let userName = prompt("What is your name?");
alert("Welcome to Hang Man " + userName + "!");
let guess = "";
while (remainingLetters > 0 && numberOfGuesses > 0) {
  showPlayerProgress();
  guess = getGuess();
  numberOfGuesses--;
  if (guess === null) {
    break;
  } else if (guess.length != 1) {
    alert("Guess a single letter.");
  } else {
    let correctGuesses = updateGameState();
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer();
function pickWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray() {
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
}

function showPlayerProgress() {
  alert(answerArray.join(" "));
}

function getGuess() {
  return prompt("Guess a single letter or click cancel to exit.");
}

function updateGameState() {
  guess = guess.toLowerCase();
  let correctGuesses = 0;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      if (answerArray[j] === "_") {
        answerArray[j] = guess;
        correctGuesses++;
      } else {
        alert("You have already guessed this letter!");
        break;
      }
    }
  }
  return correctGuesses;
}

function showAnswerAndCongratulatePlayer() {
  if (remainingLetters === 0) {
    alert(answerArray.join(" "));
    alert("CONGRATULATIONS " + userName + "!!!");
  } else if (numberOfGuesses === 0) {
    alert("You ran out of guesses " + userName + " ! The answer is " + word);
  } else {
    alert(
      "Game over.You quit the game " + userName + "! The answer is " + word
    );
  }
}
