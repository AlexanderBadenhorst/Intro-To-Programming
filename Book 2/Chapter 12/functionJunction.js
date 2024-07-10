"use strict";

var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

//can't figure out the reset button
/*  var resetButton = document.getElementById("resetButton").reset();
 resetButton.addEventListener("click", resetTrain);
  */

function speedUp() {
  if (trainSpeed > 10) {
    trainSpeed -= 10;
  }
  console.log("train speed: " + trainSpeed);
  clearInterval(animation);
  animation = setInterval(frame, trainSpeed);

  function frame() {
    trainPosition += 2;
    train.style.left = trainPosition + "px";
    console.log(trainPosition);
    checkPosition(trainPosition);
  }
}

function checkPosition(currentPosition) {
  if (currentPosition === 360) {
    alert("CRASH!");
    consle.log("CRASH!");
    clearInterval(animation);
  }
}

function stopTrain() {
  if (trainPosition < 360) {
    clearInterval(animation);
  }
  //reset button??
  /* function resetTrain(currentPosition){
    if(currentPosition >260){
    reset(currentPosition);
    }
  } */
}
