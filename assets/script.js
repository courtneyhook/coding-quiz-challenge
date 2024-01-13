//declare DOM variables
var quizQuestion = document.getElementById("quiz-question");
var chooseA = document.getElementById("choice-a");
var chooseB = document.getElementById("choice-b");
var chooseC = document.getElementById("choice-c");
var chooseD = document.getElementById("choice-d");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-button");

//variables
var highScore = 0;
var time = 100;

// question set
var questions = [
  ["question1", "choiceA1", "choiceB1", "choiceC1", "choiceD1"],
  ["question2", "choiceA2", "choiceB2", "choiceC2", "choiceD2"],
  ["question3", "choiceA3", "choiceB3", "choiceC3", "choiceD3"],
  ["question4", "choiceA4", "choiceB4", "choiceC4", "choiceD4"],
  ["question5", "choiceA5", "choiceB5", "choiceC5", "choiceD5"],
  ["question6", "choiceA6", "choiceB6", "choiceC6", "choiceD6"],
  ["question7", "choiceA7", "choiceB7", "choiceC7", "choiceD7"],
  ["question8", "choiceA8", "choiceB8", "choiceC8", "choiceD8"],
  ["question9", "choiceA9", "choiceB9", "choiceC9", "choiceD9"],
  ["question10", "choiceA10", "choiceB10", "choiceC10", "choiceD10"],
  ["question11", "choiceA11", "choiceB11", "choiceC11", "choiceD11"],
];

var answers = [
  "answer1",
  "answer2",
  "answer3",
  "answer4",
  "answer5",
  "answer6",
  "answer7",
  "answer8",
  "answer9",
  "answer10",
  "answer11",
];

//before the game starts, the question and choices will be hidden
$("#quizQuestion").hide();
$("#choice-a").hide();
$("#choice-b").hide();
$("#choice-c").hide();
$("#choice-d").hide();

//this function will get called when the start button is clicked
function setTimer() {
  var timeIntertval = setInterval(function () {
    //Every one second, the time will subtract a number and update the text content
    time--; //subtract a second
    timer.textContent = `Time Remaining: ${time}`; //update text content
    //if the time is zero the counting will stop by calling clearInterval on the variable that holds the function
    if (time === 0) {
      clearInterval(timeIntertval);
    }
  }, 1000);
}

function displayQuestion() {
  $("#quizQuestion").show();
  $("#choice-a").show();
  $("#choice-b").show();
  $("#choice-c").show();
  $("#choice-d").show();
}
function startQuiz() {
  //when this function starts the question and choices should show up, the timer should start, the start button should hide
  setTimer();
  startButton.style.display = "none";
  displayQuestion();
}

startButton.addEventListener("click", startQuiz);
