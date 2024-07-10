var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var nose = document.getElementById("nose");
//var rightArm = document.getElementById("rightArm");
var mouth = document.getElementById("mouth");
rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
nose.addEventListener("click", moveRightLeftNse);
//rightArm.addEventListener("click", moveUpDown);
mouth.addEventListener("click", moveUpDownMth);

function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;
  var id = setInterval(frame, 10) // draw every 10ms
  function frame() {
    robotPart.style.top = top + '%';
    top++;
    if (top === 20) {
      clearInterval(id);
    }
  }
}

function moveUpDownMth(e) {
  var robotPart = e.target;
  var top = 0;
  var id = setInterval(frame, 10) // draw every 10ms
  function frame() {
    robotPart.style.top = top + '%';
    top++;
    if (top === 70) {
      clearInterval(id);
    }
  }
}

function moveRightLeft(e) {
  var robotPart = e.target;
  var left = 0;
  var id = setInterval(frame, 10) // draw every 10ms
  function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 70) {
      clearInterval(id);
    }
  }
}
function moveRightLeftNse(e) {
  var robotPart = e.target;
  var left = 0;
  var id = setInterval(frame, 10) // draw every 10ms
  function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 50) {
      clearInterval(id);
    }
  }
}