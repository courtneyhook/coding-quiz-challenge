var quizQuestion = [
  [
    "What is not a datatype in JavaScript?",
    "string",
    "boolean",
    "variable",
    "number",
  ],
  [
    "Which of the following is not a comparison operator in JavaScript?",
    "==",
    "===",
    "!=",
    "=>",
  ],
  [
    "What is the output of the following code: \nvar x = 5;\nconsole.log(x--);",
    "x--",
    "5",
    "4",
    "6",
  ],
  ["Q4", "A1", "A2", "A3", "A4"],
  ["Q5", "A1", "A2", "A3", "A4"],
  ["Q6", "A1", "A2", "A3", "A4"],
  ["Q7", "A1", "A2", "A3", "A4"],
  ["Q8", "A1", "A2", "A3", "A4"],
  ["Q9", "A1", "A2", "A3", "A4"],
  ["Q10", "A1", "A2", "A3", "A4"],
  ["Q11", "A1", "A2", "A3", "A4"],
  ["Q12", "A1", "A2", "A3", "A4"],
  ["Q13", "A1", "A2", "A3", "A4"],
  ["Q14", "A1", "A2", "A3", "A4"],
];

var quizAnswer = [
  "variable",
  "=>",
  "4",
  "Q4A",
  "Q5A",
  "Q6A",
  "Q7A",
  "Q8A",
  "Q9A",
  "Q10A",
  "Q11A",
  "Q12A",
  "Q13A",
  "Q14A",
];
//variables from the DOM

var timeElement = document.getElementById("timer");
var displayQuestion = document.getElementById("quiz-question");
var chooseA = document.getElementById("choice-a");
var chooseB = document.getElementById("choice-b");
var chooseC = document.getElementById("choice-c");
var chooseD = document.getElementById("choice-d");

//variables in global scope
var countdown = 100;
var currentQuestion;

function startTimer() {
  var countTimer = setInterval(function () {
    countdown--;
    timeElement.textContent = countdown;

    if (countdown === 0) {
      clearInterval(countTimer);
    }
  }, 1000);
}

function showQuestion(i) {
  displayQuestion = "";
  displayQuestion = quizQuestion[i][0];
}
startTimer();

displayQuestion.textContent = quizQuestion[2][0];
chooseA.textContent = quizQuestion[2][1];
chooseB.textContent = quizQuestion[2][2];
chooseC.textContent = quizQuestion[2][3];
chooseD.textContent = quizQuestion[2][4];
