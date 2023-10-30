var countdownNumber = document.getElementById("time-remaining");
var quizStartbutton = document.getElementById("start-button");
var quizDataNumber = document.getElementById("quiz-content");
var lastQuestionCorrectorNot = document.getElementById("check-last-question");
var answerListContainer = document.querySelectorAll("li")
/*
var question1optionsArray = []
var question2optionsArray = []
var question3optionsArray = []
var question4optionsArray = []
var question5optionsArray = []
*/

var trueAnswersArray = ["script","The body section","function myFunction()","myFunction()","//This is a comment"];


var timeleft = 100;
function countdown() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        timeleft = timeleft - 1;
        countdownNumber.textContent = "Time Remaining: " + timeleft;

        if (timeleft === -1) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function that shows the Settlement interface
        }
    }, 1000);
}


quizStartbutton.addEventListener("click", function (event) {
    event.preventDefault();
    countdown();
    iterateOverQuizs();
  //  quizDataNumber.children[0].setAttribute('class', 'hidden-quiz')
  //  quizDataNumber.children[1].setAttribute('class', 'revealed-quiz')
});

//var testingTheAnswer = function () {}

var iterateOverQuizs = function () {  
   var index = 0;
    quizDataNumber.children[index].setAttribute('class', 'hidden-quiz');
    quizDataNumber.children[index + 1].setAttribute('class', 'revealed-quiz');
   
  

    if (index <6 ) {
        answerListContainer.addEventListener("click",function(event){
            event.preventDefault();
            var element = event.target;
            if (element.matches("li")) {
                var checkAnswer = element.getAttribute("textcontent")
                if (trueAnswersArray.include(checkAnswer)) { index = index +1;
                    lastQuestionCorrectorNot.textContent = "Last Question= correct!"           
                } else if (!trueAnswersArray.include(checkAnswer)) {index =index +1;
                    lastQuestionCorrectorNot.textContent = "Last Question= correct!"
                }
            }    
        })   
    } 
    if (index === 6) { return settlementScreen();
     //call a function fot the settlement screen
    }
    }

var settlementScreen = function(){


}    


/*  randomnize an array
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
*/

//change the class of an element;
//element.setAttribute("class", "value");

//to hide an element in css:   selector {display:none;}

//to interupt an timer,  clearinterval(var);

//string.include()