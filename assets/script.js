//declare DOM variables
var quizQuestion = document.getElementById("quiz-question");
var chooseA = document.getElementById("choice-a");
var chooseB = document.getElementById("choice-b");
var chooseC = document.getElementById("choice-c");
var chooseD = document.getElementById("choice-d");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var questionFeedback = document.getElementById("feedback");
var gameScore = document.getElementById("game-score");
var userInitials = document.getElementById("initials");
var submitName = document.getElementById("submit");
var viewHighScore = document.getElementById("high-scores");
var leader = document.getElementById("leader");
var back = document.getElementById("go-back");

//variables
var highScore = 0;
var highScorer = "";
var time = 100;
var questionIndex = 0;
var score;
var user;

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
$("#reset-score").hide();
$("#submit").hide();
$("#initials").hide();
$("#go-back").hide();
$("#leader").hide();
$("#leader-score").hide();

//this function will get called when the start button is clicked
function setTimer() {
  var timeIntertval = setInterval(function () {
    //Every one second, the time will subtract a number and update the text content
    time--; //subtract a second
    timer.textContent = `Time Remaining: ${time}`; //update text content
    //if the time is zero the counting will stop by calling clearInterval on the variable that holds the function
    if (time <= 0) {
      clearInterval(timeIntertval);
      timer.textContent = "Time Remaining: 0";
      gameOver();
    }
    if (questionIndex === questions.length) {
      clearInterval(timeIntertval);
      gameOver();
    }
  }, 1000);
}

//when the start button is clicked, the first question is shown
function displayQuestion() {
  $("#quizQuestion").show();
  $("#choice-a").show();
  $("#choice-b").show();
  $("#choice-c").show();
  $("#choice-d").show();
}

//when this function starts the question and choices should show up, the timer should start, the start button should hide
function startQuiz() {
  highScore = localStorage.getItem("High Score");
  highScorer = localStorage.getItem("High Scorer");
  console.log(highScore);
  console.log(highScorer);
  setTimer();
  startButton.style.display = "none";
  displayQuestion();
  nextQuestion();
}

//when the previous question is checked, it will call this function
function nextQuestion() {
  enableChoices();
  feedback.textContent = "";
  quizQuestion.textContent = questions[questionIndex][0];
  chooseA.textContent = questions[questionIndex][1];
  chooseB.textContent = questions[questionIndex][2];
  chooseC.textContent = questions[questionIndex][3];
  chooseD.textContent = questions[questionIndex][4];
}

//this will call if the user chooses A
function checkAnswerA() {
  if (questions[questionIndex][1] === answers[questionIndex]) {
    correctAnswer();
    chooseA.style.backgroundColor = "#72b01d";
  } else {
    incorrectAnswer();
    chooseA.style.backgroundColor = "#bc4749";
  }
}

//this will call if the user chooses B
function checkAnswerB() {
  if (questions[questionIndex][2] === answers[questionIndex]) {
    correctAnswer();
    chooseB.style.backgroundColor = "#72b01d";
  } else {
    incorrectAnswer();
    chooseB.style.backgroundColor = "#bc4749";
  }
}

//this will call if the user chooses C
function checkAnswerC() {
  if (questions[questionIndex][3] === answers[questionIndex]) {
    correctAnswer();
    chooseC.style.backgroundColor = "#72b01d";
  } else {
    incorrectAnswer();
    chooseC.style.backgroundColor = "#bc4749";
  }
}

//this will call if the user chooses D
function checkAnswerD() {
  if (questions[questionIndex][4] === answers[questionIndex]) {
    correctAnswer();
    chooseD.style.backgroundColor = "#72b01d";
  } else {
    incorrectAnswer();
    chooseD.style.backgroundColor = "#bc4749";
  }
}

//this will disable the choices for an interval of time for the feedback to be able to be dispayed
function disableChoices() {
  chooseA.disabled = true;
  chooseB.disabled = true;
  chooseC.disabled = true;
  chooseD.disabled = true;
}

//this will enable the choices when the next question is displayed
function enableChoices() {
  chooseA.disabled = false;
  chooseB.disabled = false;
  chooseC.disabled = false;
  chooseD.disabled = false;
  chooseA.style.backgroundColor = "#454955";
  chooseB.style.backgroundColor = "#454955";
  chooseC.style.backgroundColor = "#454955";
  chooseD.style.backgroundColor = "#454955";
}

//this will be called if the user answers correctly; it will give the feedback of correct, and advance to the next question
function correctAnswer() {
  disableChoices();
  questionIndex++;
  questionFeedback.textContent = "Correct!";
  if (questionIndex === questions.length) {
    gameOver();
  } else {
    setTimeout(nextQuestion, 1000);
  }
}
//this function runs when the time goes to zero or the user has answered all questions; it will display the final score and as for the user's name for the high score board
function gameOver() {
  hideQuestion();
  displaySubmit();
  if (time >= 0) {
    score = time;
    gameScore.textContent = `Your final score is ${score}.`;
  } else {
    time = 0;
    gameScore.textContent = "Your final score is 0.";
  }
}
//this will be called if the user answers incorrectly; it will give the feedback of incorrect, subtract 15 seconds from the time and advance to the next question
function incorrectAnswer() {
  disableChoices();
  time = time - 15;
  questionIndex++;
  questionFeedback.textContent = "Incorrect!";
  if (questionIndex === questions.length) {
    gameOver();
  } else {
    setTimeout(nextQuestion, 1000);
  }
}

function displaySubmit() {
  $("#initials").show();
  $("#submit").show();
}

//hides questions at the end of the game
function hideQuestion() {
  $("#quiz-question").hide();
  $("#choice-a").hide();
  $("#choice-b").hide();
  $("#choice-c").hide();
  $("#choice-d").hide();
  $("#feedback").hide();
}

//this function gets the user name and clears the input
function submitUser() {
  user = userInitials.value;
  userInitials.value = "";
  $("#initials").hide();
  $("#submit").hide();
  showLeaderBoard();
}

//this function records the current user and score as well as the high scorer and the high score
function showLeaderBoard() {
  localStorage.setItem("username", user);
  localStorage.setItem("score", score);
  if (score > highScore) {
    highScore = score;
    highScorer = user;
    localStorage.setItem("High Scorer", highScorer);
    localStorage.setItem("High Score", highScore);
  }
}

function highScoreList() {
  $("#high-scores").hide();
  $("#go-back").show();
  $("#start-game").hide();
  $("#leader").show();
  $("#leader-score").show();

  var whoLeads = localStorage.getItem("High Scorer");
  var leadScore = localStorage.getItem("High Score");
  leader.textContent = `The leader is ${whoLeads}`;
  document.getElementById(
    "leader-score"
  ).textContent = `The high score is ${leadScore}`;
}

function goBack() {
  $("#high-scores").show();
  $("#go-back").hide();
  $("#start-game").show();
  $("#leader").hide();
  $("#leader-score").hide();
}

startButton.addEventListener("click", startQuiz);
chooseA.addEventListener("click", checkAnswerA);
chooseB.addEventListener("click", checkAnswerB);
chooseC.addEventListener("click", checkAnswerC);
chooseD.addEventListener("click", checkAnswerD);
submitName.addEventListener("click", submitUser);
viewHighScore.addEventListener("click", highScoreList);
back.addEventListener("click", goBack);
