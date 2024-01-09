var quizQuestion = [
  {
    question: "Which is NOT a data type in JavaScript?",
    answers: [
      { choice: "string", correct: false },
      { choice: "number", correct: false },
      { choice: "attribute", correct: true },
      { choice: "boolean", correct: false },
    ],
  },
  {
    question: "What HTML tag is used for Javascript?",
    answers: [
      { choice: "<script>", correct: true },
      { choice: "<js>", correct: false },
      { choice: "<java>", correct: false },
      { choice: "<javascript>", correct: false },
    ],
  },
  {
    question: "Which symbol is a strict comparison?",
    answers: [
      { choice: " === ", correct: true },
      { choice: " = ", correct: false },
      { choice: " == ", correct: false },
      { choice: " != ", correct: false },
    ],
  },
];

//variables from the DOM

var timeElement = document.getElementById("timer");
var displayQuestion = document.getElementById("quiz-question");

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

displayQuestion.textContent = quizQuestion.question[0];
