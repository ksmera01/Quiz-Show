
// Selecting the timer
var timeEl = document.getElementById("timer");
// Selecting the Start Button
var startButton = document.getElementById("startButton");
// // Selecting the Question Options
var questionSection = document.getElementById("questionOptions");
// // Selecting the Button Options
var buttonSection = document.getElementById("buttonOptions");
var questionsArray = ["What number did Phillies player Chase Utley wear?", "Who was the Phillies manager during the 2008 World Series?", "What is the name of the Phillies stadium?", "How many Super Bowl Championships have the Philadelphia Eagles won?", "In what year did the Philadelphia Flyers last win a Stanley Cup?"]
// var answerArray = [26, 32, 11, 6];
var showInitialsForm = document.getElementById("form");
var score = secondsLeft - secondsElapsed;
var secondsElapsed = 0;
var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
        secondsElapsed++

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    questionSection.textContent = "All Done. Your Score is: " + score;
    buttonSection.setAttribute("class", "d-block form-group");
}

function displayQuestion() {
    questionSection.textContent = questionsArray[0];
}

function displayUserOptions() {

}

startButton.addEventListener("click", myFunction);
function myFunction() {
    setTime();
    document.getElementById("startButton").style.visibility = 'hidden';
    displayQuestion();

}




