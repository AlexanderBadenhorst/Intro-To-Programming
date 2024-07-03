"use strict";

let words = [
    "javascript",
    "monkey",
    "amazing",
    'flowers',
    'umbrella',
    'wonderful'
    ];
    let word = pickWord();
    //preparing empty answer array with underscores
    //then the function right after.
    let answerArray = [];
    setupAnswerArray();

    let remainingLetters = word.length;
    let numberOfGuesses = 11;
    let userName = prompt("What is your name?");
    alert("Welcome to Hang Man " + userName + '!');
//starting the game loop
    let guess = "";
    while (remainingLetters > 0 && numberOfGuesses > 0) {
        showPlayerProgress();
        guess = getGuess();
        numberOfGuesses--;
        if (guess === null) {
            break;
        } else if (guess.length != 1) {
            alert("Guess a single letter.")
        } else {
            //start checking if guess is correct
            let correctGuesses = updateGameState();
            remainingLetters -= correctGuesses;

        }
    }
    showAnswerAndCongratulatePlayer();
function pickWord() {
        // Return a random word
        return words[Math.floor(Math.random() * words.length)];
    };

    function setupAnswerArray() {
        // Return the answer array
        for (let i = 0; i < word.length; i++) {
            answerArray[i] = "";
        }

    };

    function showPlayerProgress() {
        // Use alert to show the player their progress
        alert(answerArray.join(" "));
    };

    function getGuess() {
        // Use prompt to get a guess
        return prompt("Guess a single letter or click cancel to exit.");
    };

    function updateGameState() {
        // Update answerArray and return a number showing how many
        // times the guess appears in the word so remainingLetters
        // can be updated
        guess = guess.toLowerCase();
        let correctGuesses = 0;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "") {
                    answerArray[j] = guess;
                    correctGuesses++;
                } else {
                    alert("You have already guessed this letter!");
                    break;
                }
            }
        }
        return correctGuesses;
    };

    function showAnswerAndCongratulatePlayer() {
        // Use alert to show the answer and congratulate the player
        if (remainingLetters === 0) {
            alert(answerArray.join(" "));
            alert("CONGRATULATIONS " + userName + "!!!")
        } else if (numberOfGuesses === 0) {
            alert("You ran out of guesses " + userName + " ! The answer is " + word);
        } else {
            alert("Game over.You quit the game " + userName + "! The answer is " + word);
        }
    };