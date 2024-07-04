"use strict";

let myFirstName;
let favouriteFood;
let birthday;
let timeOfDay;
let book = "JavaScript For Kids For Dummies";
console.log(book);

book = "The Call Of The Wild";
console.log(book);

//////////DATA TYPES////////
//STRINGS
console.log("I am a string".length);
console.log("I am a string".indexOf("am"));

//NUMBERS
console.log("10" + 10);
console.log("10" * 10);

//BOOLEANS
console.log("");
console.log(1 < 10);
console.log(100 > 2000);
console.log(2 === 2);
console.log(false === false);
console.log(40 >= 40);
console.log("");
console.log(0);
console.log(false);
console.log("apples" === "oranges");
console.log("apples" === "apples");
/*
//PROMPTS
let myName = prompt("What is your name?");
function sayHi(myName){
    return `Hello there, ${myName}!`;
}
alert(sayHi(myName));
*/
//DOCUMENT.WRITE

//document.write("How are you?<br>I'm great! Thanks!<br>That's awesome!");
//document.write("I'm great! Thanks!<br>");
//document.write("That's awesome!");

//COMBINING INPUT AND OUTPUT
let toName = "Alexander";
let fromName = "The Grammy Awards";
let letterBody = "We are pleased to inform you that your song, 'Can't Stop Coding!,' has been voted the Best Song of All Time by the awarding committee.";
document.write("Dear " + toName + ",<br><br>" +letterBody + "<br><br>","Sincerely,<br>"+fromName);
//document.write(letterBody + "<br><br>");
//document.write("Sincerely,<br>");
//document.write(fromName);

