let randBodyParts = ["Face","Hair","Eyebrows","Nose","Teeth", "Ears"];
let randAdjectives = ["Stinky","Dirty","Ugly","Old","Faded","Sad"];
let animals = ["Donkey","Llama","Seal","Whale","Monkey","Dodo"];
let animalBodyParts = ["Head","Body","Tail","Face","Teeth"];

let randBodyPart = randBodyParts[Math.floor(Math.random() *6)];
let randAdjective = randAdjectives[Math.floor(Math.random() *6)];
let animal = animals[Math.floor(Math.random() *6)];
let animalBodyPart = animalBodyParts[Math.floor(Math.random() *5)];

let randomInsult = "Your "+randBodyPart+" is more "+randAdjective+" than a(n) "+animal+"'s "+animalBodyPart+"!";
randomInsult
