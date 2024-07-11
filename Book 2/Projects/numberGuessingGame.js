"use strict";
let secret = Math.floor(Math.random() * 20);
let remainingGuesses = 5;
let answer; 
let finalMessage = document.getElementById("finalMessage");
let message = document.getElementById("message1");

guess();

//Actual game loop
while(answer != secret && remainingGuesses > 0){
  remainingGuesses--;
  if(isNaN(answer)){
  exitGame();
  break;
  } else if(answer < secret){
    alert("Incorrect, too low! Try again");
    guess();
  } else if (answer > secret){
    alert("Incorrect, too high! Try again");
    guess();
  }
}
endGame();

//Getting an answer variable
function guess(){
  answer = parseInt(prompt("Please guess a number between 1 and 20"));
}

//Function to end the game
function endGame(){
  if(answer === secret){
    alert("Correct! The secret number is: " + secret);
  } else if( remainingGuesses === 0){
    alert("Sorry! You have run out of guesses. The correct number was: "+ secret)
  } else{
    alert("The random number was: "+ secret)
  }
  finalMessage.innerHTML = "Refresh this page to play again!";
}
//Function to exit the game
function exitGame(){
  let play = prompt("Unrecognised input. Do you wish to exit the game? Type Yes or No")

  if(play === null){
    message.innerHTML = "Thanks for playing. Goodbye!";
    endGame();
  }

  play = play.toLowerCase();

  if(play === "yes"){
    message.innerHTML = "Thanks for playing. Goodbye!";
    endGame();
  } else if(play === "no"){
    guess();
  } else{
    exitGame();
  }
}