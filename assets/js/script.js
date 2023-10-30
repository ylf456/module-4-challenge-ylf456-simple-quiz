var countdownNumber = document.getElementById("time-remaining");
var quizStartbutton = document.getElementById("start-button");
var quizDivNumber = document.getElementById("quiz-content");
var lastQuestionCorrectorNot = document.getElementById("check-last-question");
var answerListContainer = document.querySelector('li')
var index = 0;
var checkAnswer;
//var nameOrinitial = document.getElementById()
/*
var question1optionsArray = []
var question2optionsArray = []
var question3optionsArray = []
var question4optionsArray = []
var question5optionsArray = []
*/

var trueAnswersArray = ["script", "The body section", "function myFunction()", "myFunction()", "//This is a comment"];

var timeleft = 170;

// Sets interval in variable
var timerInterval = setInterval(function () {
    timeleft--;
    countdownNumber.textContent = "Time Remaining: " + timeleft;

    if (timeleft === 0 || timeleft <0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function that shows the Settlement interface
        quizDivNumber.children[index].setAttribute('class', 'hidden-quiz')
        index = 6;
        return iterateOverQuizs();
    }
}, 1000);

var iterateOverQuizs = function () {
    quizDivNumber.children[index].setAttribute('class', 'hidden-quiz')
    if (trueAnswersArray.includes(checkAnswer) && index < 5) {
        
        quizDivNumber.children[index + 1].setAttribute('class', 'revealed-quiz')
        index++;
        lastQuestionCorrectorNot.textContent = "Last Question= correct!"
    } else if (!trueAnswersArray.includes(checkAnswer) && index < 5) {
       
        quizDivNumber.children[index + 1].setAttribute('class', 'revealed-quiz')
        index++;
        timeleft = timeleft - 10;
        lastQuestionCorrectorNot.textContent = "Last Question= wrong"
    } else  { 
        quizDivNumber.children[index].setAttribute('class', 'revealed-quiz')
        clearInterval(timerInterval); }
}


quizStartbutton.addEventListener("click", function (event) {
    event.preventDefault(); 
    quizDivNumber.children[index].setAttribute('class', 'hidden-quiz')
    quizDivNumber.children[index + 1].setAttribute('class', 'revealed-quiz')
    index++;
    timerInterval();
});

answerListContainer.addEventListener("click", function (event) {
    event.preventDefault();
    var element = event.target;
    checkAnswer = element.getAttribute("textcontent")
    if (element.matches("li")) { iterateOverQuizs() }
    
})

var settlementScreen = function () { }

function saveHighScore() {
    // Save related form data as an object
    var highscoreRecord = {
        nameOrinitial: nameOrinitial.value,
        score: timeleft.value,
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem('highScoreHistory', JSON.stringify(highscoreRecord));
}

function showHighScore() { }


/*  randomnize an array
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
*/

//change the class of an element;
//element.setAttribute("class", "value");

//to hide an element in css:   selector {display:none;}

//to interupt a timer,  clearinterval(var);

//string.includes()