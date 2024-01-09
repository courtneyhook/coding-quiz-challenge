//variables from the DOM

var timeElement = document.getElementById("#timer");

//varibales in global scope
var countdown = 100;

function startTimer() {
  var countTimer = setInterval(function () {
    countdown--;
    timeElement.textContent = countdown;

    if (countdown === 0) {
      clearInterval(countTimer);
    }
  }, 1000);
}

startTimer();
