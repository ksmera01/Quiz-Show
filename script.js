
// Selecting the timer
var timeEl = document.getElementById("timer");
// Selecting the Start Button
var startButton = document.getElementById("startButton");
// // Selecting the Question Options
var questionSection = document.getElementById("questionOptions");
// // Selecting the Button Options
// var buttonSection = document.getElementById("buttonOptions");
// var questionsArray = ["What number did Phillies player Chase Utley wear?", "Who was the Phillies manager during the 2008 World Series?", "What is the name of the Phillies stadium?", "How many Super Bowl Championships have the Philadelphia Eagles won?", "In what year did the Philadelphia Flyers last win a Stanley Cup?"]
// var answerArray = [26, 32, 11, 6];
var score = secondsLeft - secondsElapsed;
var secondsElapsed = 0

// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

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
}

startButton.addEventListener("click", myFunction);
function myFunction() {
    setTime()
    if (secondsLeft === 0) {
        clearInterval(timerInterval);

    }
}
// function nextQuestion() {
//     for (let i = 0; i < questionsArray.length; i++) {
//         var followUpQuestion = document.querySelector("p");
//         followUpQuestion.textContent = questionsArray[i];
//     }

// for (var j = 0; j < favTVshows.length; j++) {

//     // ...and create alert messages listing out each show in our array.
//     alert(favTVshows[j]);
// }
// var followUpQuestion = document.querySelector("p");
//     // followUpQuestion.textContent = questionsArray[i];
// }

    //   mainEl.appendChild(imgEl);

    // }

    // setTime();

