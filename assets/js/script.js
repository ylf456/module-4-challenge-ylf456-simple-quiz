var countdownNumber = document.getElementById("time-remaining");
var quizStartbutton = document.getElementById("start-button");
var quizDivNumber = document.getElementById("quiz-content");
var lastQuestionCorrectorNot = document.getElementById("check-last-question");
var answerListContainer = document.querySelectorAll('li')
var index = 0;
var checkAnswer;
var timerInterval;

var trueAnswersArray = ["script", "The body section", "function myFunction()", "myFunction()", "//This is a comment"];

var timeleft = 200;

// Sets interval in variable
function startimer() {
    timerInterval = setInterval(function () {
        timeleft--;
        countdownNumber.textContent = "Time Remaining: " + timeleft;
        if (timeleft <= 0) {
            clearInterval(timerInterval);
            quizDivNumber.children[index].setAttribute('class', 'hidden-quiz')
            index = 6;
            return iterateOverQuizs();
        }
      //  if (index === 6) { clearInterval(timerInterval); }
    }, 1000);
}

var iterateOverQuizs = function () {   
    index++;
    quizDivNumber.children[index-1].setAttribute('class', 'hidden-quiz')
    
   // console.log(index); shows the index of current page

    if (trueAnswersArray.includes(checkAnswer) && index < 6) {
        quizDivNumber.children[index].setAttribute('class', 'revealed-quiz')
        
        lastQuestionCorrectorNot.textContent = "Last Question= correct!"
    } else if (!trueAnswersArray.includes(checkAnswer) && index < 6) {
        quizDivNumber.children[index].setAttribute('class', 'revealed-quiz')
        
        timeleft = timeleft - 10;
        lastQuestionCorrectorNot.textContent = "Last Question= wrong"
    } else if (index === 6) {
        quizDivNumber.children[index].setAttribute('class', 'revealed-quiz');
        clearInterval(timerInterval);
        return;
    } 
}

quizStartbutton.addEventListener("click", function (event) {
    event.preventDefault();
    quizDivNumber.children[0].setAttribute('class', 'hidden-quiz');
    quizDivNumber.children[1].setAttribute('class', 'revealed-quiz');
    index++;
    startimer();
   // console.log(index); index should be 1 to show the first quiz question
});

answerListContainer.forEach((item) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        var element = event.target;
        checkAnswer = element.textContent
        if (element.matches("li")) { iterateOverQuizs() }
    })
})

var getulElement = document.getElementById('score-list');
var getNameInput = document.getElementById('score-form-input');
var submitButton = document.getElementById('submit-score-button');
var ScoreRecordArray = [];
var clearHistoryButton = document.getElementById('clearAllHistory')

function initialRenderScoreHistory() {
    var ScoreRecordRetrivedfromLS = JSON.parse(localStorage.getItem("ScoreRecordinLS"));
    if (ScoreRecordRetrivedfromLS !== null) {
        ScoreRecordArray = ScoreRecordRetrivedfromLS;
    }
    // This is a helper function that will render todos to the DOM
    renderRecord();
}

function renderRecord() {
    // Clear todoList element 
    getulElement.innerHTML = "";
    // Render a new li for each todo
    for (var i = 0; i < ScoreRecordArray.length; i++) {
        var ScoreRecord = ScoreRecordArray[i];
        var li = document.createElement("li");
        li.textContent = ScoreRecord;
        li.setAttribute("data-index", i);
        getulElement.appendChild(li);
    }
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var scoreInputText = getNameInput.value.trim();
    if (scoreInputText === "") { return; }
    ScoreRecordArray.push("Name=" + scoreInputText + "," + "Score=" + timeleft);
    getNameInput.value = ""
    storeScore();
    renderRecord();
    quizDivNumber.children[6].setAttribute('class', 'hidden-quiz');
    quizDivNumber.children[0].setAttribute('class', 'revealed-quiz');
    lastQuestionCorrectorNot.textContent = "";
    countdownNumber.textContent= "Time Remaining:";
    timeleft = 200;
    return index = 0;
}
)

function storeScore() {
    localStorage.setItem("ScoreRecordinLS", JSON.stringify(ScoreRecordArray));
}

clearHistoryButton.addEventListener("click", function (event) {
    event.preventDefault();
    var element = event.target
    if (element.matches("#clearAllHistory")) {
        ScoreRecordArray = [];
        renderRecord();
        return storeScore();
    }
})

initialRenderScoreHistory();

var getShowhistory = document.getElementById('ShoworHideHistory')


getShowhistory.addEventListener("click", function (event) {
    event.preventDefault();
    var element = event.target
    if (element.matches("#ShoworHideHistory")) {
        var state = element.getAttribute("data-state");
        if (state === "toShow") {
            element.dataset.state = "toHide";
            element.textContent = "Hide History";
            getulElement.setAttribute("class", "score-list-show")
        } else if (state === "toHide") {
            element.dataset.state = "toShow";
            element.textContent = "Show History";
            getulElement.setAttribute("class","score-list-hide")
        }
    }
})



/*  randomnize an array
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
*/

//change the class of an element;
//element.setAttribute("class", "value");

//to hide an element in css:selector {display:none;}

//to stop a timer,  clearinterval(var);

//string.includes()

