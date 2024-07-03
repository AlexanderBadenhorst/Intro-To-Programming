"use strict";

let ourFirstFunction = function () {
  console.log("Hello World!");
};
ourFirstFunction();

let sayHelloTo = function (name) {
  console.log("Hello " + name + "!");
};
sayHelloTo("Alexander");

let drawLenny = function (howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + "( ͡° ͜ʖ ͡°)");
  }
};
drawLenny(10);

let printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};

printMultipleTimes(5, ":)");
//creating function
let double = function (number) {
  return number * 2;
};
console.log(double(55));
//different ways to use/call function
console.log(double(5) + double(6));
console.log(double(double(3)));

let fithLetter = function (name) {
  if (name.length < 5) {
    return; //return value is undefined because it is shorter than 5
  }
  return "The fith letter of your name is " + name[4] + ".";
};

console.log(fithLetter("Alexander"));

let medalForScore = function (score) {
  if (score < 3) {
    return "Bronze";
  }

  if (score < 7) {
    return "Silver";
  }
  return "Gold";
};

console.log(medalForScore(1));
console.log(medalForScore(5));
console.log(medalForScore(10));
