"use strict";

let pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

let generateRandomInsult = function () {
  let randomBodyParts = ["Face", "Nose", "Hair"];
  let randomAdjectives = ["Smelly", "Boring", "Stupid"];
  let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

  let randomString =
    "Your " +
    pickRandomWord(randomBodyParts) +
    " is like a " +
    pickRandomWord(randomAdjectives) +
    " " +
    pickRandomWord(randomWords) +
    "!!!";
  return randomString;
};
generateRandomInsult();
console.log(generateRandomInsult());
