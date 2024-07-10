var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");
// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);
// create a new Date object
var d = new Date();
// call the displayDate() function
displayDate();

function displayDate() {
  todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
  // find out the day of the week
  var dayOfWeek = d.getDay();
  /* set a variable, called youShould, with a different
  string based on what day of the week it is */
  var youShould;
  switch (dayOfWeek) {
    case 0:
      youShould = "This day is for resting. Take the load off ";
      break;
    case 1:
      youShould = "Nose to the grindstone!";
      break;
    case 2:
      youShould = "Back at it again. Live in the moment";
      break;
    case 3:
      youShould = "Remember to take care of yourself, please.";
      break;
    case 4:
      youShould = "The world is full of wonder. Try capture some";
      break;
    case 5:
      youShould = "Ensure all responsobilities have been taken care of";
      break;
    case 6:
      youShould = "Do something you truly enjoy, just for yourself";
      break;
    default:
      youShould = "Ooops! Something is not lekker...";
      break;
  }
  // output the value of youShould into the thingToDo div
  document.getElementById("thingToDo").innerHTML = youShould;
}
