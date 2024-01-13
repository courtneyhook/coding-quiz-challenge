//declare DOM variables
var quizQuestion = document.getElementById("quiz-question");
var chooseA = document.getElementById("choice-a");
var chooseB = document.getElementById("choice-b");
var chooseC = document.getElementById("choice-c");
var chooseD = document.getElementById("choice-d");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var questionFeedback = document.getElementById("feedback");
//variables
var highScore = 0;
var time = 100;
var questionIndex = 0;
var score;

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
  "choiceA1",
  "choiceB2",
  "choiceC3",
  "choiceD4",
  "choiceA5",
  "choiceB6",
  "choiceC7",
  "choiceD8",
  "choiceA9",
  "choiceB10",
  "choiceC11",
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
  nextQuestion();
}

function nextQuestion() {
  if (questionIndex === questions.length) {
    score = time;
  }
  enableChoices();
  feedback.textContent = "";
  quizQuestion.textContent = questions[questionIndex][0];
  chooseA.textContent = questions[questionIndex][1];
  chooseB.textContent = questions[questionIndex][2];
  chooseC.textContent = questions[questionIndex][3];
  chooseD.textContent = questions[questionIndex][4];
}

function checkAnswerA() {
  if (questions[questionIndex][1] === answers[questionIndex]) {
    correctAnswer();
  } else {
    incorrectAnswer();
  }
}

function checkAnswerB() {
  if (questions[questionIndex][2] === answers[questionIndex]) {
    correctAnswer();
  } else {
    incorrectAnswer();
  }
}

function checkAnswerC() {
  if (questions[questionIndex][3] === answers[questionIndex]) {
    correctAnswer();
  } else {
    incorrectAnswer();
  }
}

function checkAnswerD() {
  if (questions[questionIndex][4] === answers[questionIndex]) {
    correctAnswer();
  } else {
    incorrectAnswer();
  }
}

function disableChoices() {
  chooseA.disabled = true;
  chooseB.disabled = true;
  chooseC.disabled = true;
  chooseD.disabled = true;
}

function enableChoices() {
  chooseA.disabled = false;
  chooseB.disabled = false;
  chooseC.disabled = false;
  chooseD.disabled = false;
}
function correctAnswer() {
  disableChoices();
  questionIndex++;
  questionFeedback.textContent = "Correct!";
  setTimeout(nextQuestion, 1000);
}

function incorrectAnswer() {
  disableChoices();
  time = time - 15;
  questionIndex++;
  questionFeedback.textContent = "Incorrect";
  if (questionIndex === questions.length) {
    score = time;
    console.log(score);
    clearInterval(timeIntertval);
  }
  setTimeout(nextQuestion, 1000);
}

startButton.addEventListener("click", startQuiz);
chooseA.addEventListener("click", checkAnswerA);
chooseB.addEventListener("click", checkAnswerB);
chooseC.addEventListener("click", checkAnswerC);
chooseD.addEventListener("click", checkAnswerD);
