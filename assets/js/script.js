var countdownNumber = document.getElementById("time-remaining");
var quizStartbutton = document.getElementById("start-button");
var quizDataNumber = document.getElementById("quiz-content");
var lastQuestionCorrectorNot = document.getElementById("check-last-question");
var answerListContainer = document.querySelector("li")
var index = 0;
/*
var question1optionsArray = []
var question2optionsArray = []
var question3optionsArray = []
var question4optionsArray = []
var question5optionsArray = []
*/

var trueAnswersArray = ["script", "The body section", "function myFunction()", "myFunction()", "//This is a comment"];

var timeleft = 10;
function countdown() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        timeleft = timeleft - 1;
        countdownNumber.textContent = "Time Remaining: " + timeleft;

        if (timeleft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            
            // Calls function that shows the Settlement interface
           
            return index = 5;  
        }
    }, 1000);
}
console.log(index)
console.log(quizDataNumber.children[5])
quizStartbutton.addEventListener("click", function (event) {
    event.preventDefault();
    countdown();
    iterateOverQuizs();
});

//var testingTheAnswer = function () {}

var iterateOverQuizs = function (index) {
    quizDataNumber.children[index].setAttribute('class', 'hidden-quiz');
    quizDataNumber.children[index + 1].setAttribute('class', 'revealed-quiz');
    if (index < 6) {
        answerListContainer.addEventListener("click", function (event) {
            event.preventDefault();
            var element = event.target;
            if (element.matches("li")) {
                var checkAnswer = element.getAttribute("textcontent")
                if (trueAnswersArray.includes(checkAnswer)) {
                    index = index + 1;
                    lastQuestionCorrectorNot.textContent = "Last Question= correct!"
                } else if (!trueAnswersArray.includes(checkAnswer)) {
                    index = index + 1;
                    lastQuestionCorrectorNot.textContent = "Last Question= wrong"
                }
            }
        })
    }
    else { clearInterval(timerInterval);
        return;
        //call a function fot the settlement screen
    }
}

var settlementScreen = function () {}

function saveHighScore() {
    // Save related form data as an object
    var highscoreRecord = {
      nameOrinitial :nameOrinitial.value,
      score: timeleft.value,
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem('highScoreHistory', JSON.stringify(highscoreRecord));
  }

function showHighScore(){}


/*  randomnize an array
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
*/

//change the class of an element;
//element.setAttribute("class", "value");

//to hide an element in css:   selector {display:none;}

//to interupt a timer,  clearinterval(var);

//string.includes()