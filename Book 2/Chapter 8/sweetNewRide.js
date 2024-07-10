"use strict";

var dreamCar = {
  make: "Toyota",
  model: "Hilux",
  color: "Bronze",
  year: 2024,
  bodyStyle: "Bakkie",
  price: 967500,
};

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML =
  dreamCar.make + " " + dreamCar.model;
document.getElementById("cab").style.borderRadius = "4px";
document.getElementById("body").style.borderRadius = "4px";
