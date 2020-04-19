
var timeEl = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var questionSection = document.getElementById("questionOptions");
// // Selecting the Button Options
// var buttonSection = document.getElementById("buttonOptions");
var questionsArray = ["What number did Phillies player Chase Utley wear?", "Who was the Phillies manager during the 2008 World Series?", "What is the name of the Phillies stadium?", "How many Super Bowl Championships have the Philadelphia Eagles won?"];
var showInitialsForm = document.getElementById("form");
var score = secondsLeft - secondsElapsed;
var secondsElapsed = 0;
var secondsLeft = 75;
var answerClicked;
var ans1;
var ans2;
var ans3;
var ans4;

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

function displayQuestion() {
    answerClicked = 99;
    ans1Function();


}

function displayUserOptions() {
    document.getElementById("answer1").style.visibility = 'visible';
    document.getElementById("answer2").style.visibility = 'visible';
    document.getElementById("answer3").style.visibility = 'visible';
    document.getElementById("answer4").style.visibility = 'visible';
}

startButton.addEventListener("click", myFunction);
function myFunction() {
    setTime();
    document.getElementById("startButton").style.visibility = 'hidden';
    displayQuestion();
    // displayUserOptions();

}

function ans1Function() {
    questionSection.textContent = questionsArray[0];
    document.getElementById("answer1").textContent = "26";
    document.getElementById("answer1").className = "visible btn btn-dark";
    document.getElementById("answer2").textContent = "32";
    document.getElementById("answer2").className = "visible btn btn-dark";
    document.getElementById("answer3").textContent = "11";
    document.getElementById("answer3").className = "visible btn btn-dark";
    document.getElementById("answer4").textContent = "6";
    document.getElementById("answer4").className = "visible btn btn-dark";
}

function ans2Function() {
    questionSection.textContent = questionsArray[1];
    document.getElementById("answer5").textContent = "Larry Bowa";
    document.getElementById("answer5").className = "visible btn btn-dark";
    document.getElementById("answer6").textContent = "Charlie Manuel";
    document.getElementById("answer6").className = "visible btn btn-dark";
    document.getElementById("answer7").textContent = "Terry Francona";
    document.getElementById("answer7").className = "visible btn btn-dark";
    document.getElementById("answer8").textContent = "Gabe Kapler";
    document.getElementById("answer8").className = "visible btn btn-dark";
}

function ans3Function() {
    questionSection.textContent = questionsArray[2];
    document.getElementById("answer9").textContent = "Yankee Stadium";
    document.getElementById("answer9").className = "visible btn btn-dark";
    document.getElementById("answer10").textContent = "Fenway Park";
    document.getElementById("answer10").className = "visible btn btn-dark";
    document.getElementById("answer11").textContent = "Camden Yards";
    document.getElementById("answer11").className = "visible btn btn-dark";
    document.getElementById("answer12").textContent = "Citizens Bank Park";
    document.getElementById("answer12").className = "visible btn btn-dark";
}

function ans4Function() {
    questionSection.textContent = questionsArray[3];
    document.getElementById("answer13").textContent = "2";
    document.getElementById("answer13").className = "visible btn btn-dark";
    document.getElementById("answer14").textContent = "1";
    document.getElementById("answer14").className = "visible btn btn-dark";
    document.getElementById("answer15").textContent = "3";
    document.getElementById("answer15").className = "visible btn btn-dark";
    document.getElementById("answer16").textContent = "4";
    document.getElementById("answer16").className = "visible btn btn-dark";
}
document.getElementById("answer1").addEventListener("click", getAnswer1);
document.getElementById("answer2").addEventListener("click", getAnswer2);
document.getElementById("answer3").addEventListener("click", getAnswer3);
document.getElementById("answer4").addEventListener("click", getAnswer4);

document.getElementById("answer5").addEventListener("click", getAnswer5);
document.getElementById("answer6").addEventListener("click", getAnswer6);
document.getElementById("answer7").addEventListener("click", getAnswer7);
document.getElementById("answer8").addEventListener("click", getAnswer8);

document.getElementById("answer9").addEventListener("click", getAnswer9);
document.getElementById("answer10").addEventListener("click", getAnswer10);
document.getElementById("answer11").addEventListener("click", getAnswer11);
document.getElementById("answer12").addEventListener("click", getAnswer12);

document.getElementById("answer13").addEventListener("click", getAnswer13);
document.getElementById("answer14").addEventListener("click", getAnswer14);
document.getElementById("answer15").addEventListener("click", getAnswer15);
document.getElementById("answer16").addEventListener("click", getAnswer16);

function getAnswer1() {
    ans1 = 0;
    document.getElementById("answer1").className = "invisible btn btn-dark";
    document.getElementById("answer2").className = "invisible btn btn-dark";
    document.getElementById("answer3").className = "invisible btn btn-dark";
    document.getElementById("answer4").className = "invisible btn btn-dark";
    ans2Function()

}

function getAnswer2() {

    ans1 = 1;
    document.getElementById("answer1").className = "invisible btn btn-dark";
    document.getElementById("answer2").className = "invisible btn btn-dark";
    document.getElementById("answer3").className = "invisible btn btn-dark";
    document.getElementById("answer4").className = "invisible btn btn-dark";
    ans2Function()

}

function getAnswer3() {
    ans1 = 2;
    document.getElementById("answer1").className = "invisible btn btn-dark";
    document.getElementById("answer2").className = "invisible btn btn-dark";
    document.getElementById("answer3").className = "invisible btn btn-dark";
    document.getElementById("answer4").className = "invisible btn btn-dark";
    ans2Function()
}

function getAnswer4() {
    ans1 = 3;
    document.getElementById("answer1").className = "invisible btn btn-dark";
    document.getElementById("answer2").className = "invisible btn btn-dark";
    document.getElementById("answer3").className = "invisible btn btn-dark";
    document.getElementById("answer4").className = "invisible btn btn-dark";
    ans2Function()
}
function getAnswer5() {
    ans2 = 0;
    document.getElementById("answer5").className = "invisible btn btn-dark";
    document.getElementById("answer6").className = "invisible btn btn-dark";
    document.getElementById("answer7").className = "invisible btn btn-dark";
    document.getElementById("answer8").className = "invisible btn btn-dark";
    ans3Function()
}

function getAnswer6() {

    ans2 = 1;
    document.getElementById("answer5").className = "invisible btn btn-dark";
    document.getElementById("answer6").className = "invisible btn btn-dark";
    document.getElementById("answer7").className = "invisible btn btn-dark";
    document.getElementById("answer8").className = "invisible btn btn-dark";
    ans3Function()
}

function getAnswer7() {
    ans2 = 2;
    document.getElementById("answer5").className = "invisible btn btn-dark";
    document.getElementById("answer6").className = "invisible btn btn-dark";
    document.getElementById("answer7").className = "invisible btn btn-dark";
    document.getElementById("answer8").className = "invisible btn btn-dark";
    ans3Function()
}

function getAnswer8() {
    ans2 = 3;
    document.getElementById("answer5").className = "invisible btn btn-dark";
    document.getElementById("answer6").className = "invisible btn btn-dark";
    document.getElementById("answer7").className = "invisible btn btn-dark";
    document.getElementById("answer8").className = "invisible btn btn-dark";
    ans3Function()
}
function getAnswer9() {
    ans3 = 0;
    document.getElementById("answer9").className = "invisible btn btn-dark";
    document.getElementById("answer10").className = "invisible btn btn-dark";
    document.getElementById("answer11").className = "invisible btn btn-dark";
    document.getElementById("answer12").className = "invisible btn btn-dark";
    ans4Function()
}

function getAnswer10() {

    ans3 = 1;
    document.getElementById("answer9").className = "invisible btn btn-dark";
    document.getElementById("answer10").className = "invisible btn btn-dark";
    document.getElementById("answer11").className = "invisible btn btn-dark";
    document.getElementById("answer12").className = "invisible btn btn-dark";
    ans4Function()
}

function getAnswer11() {
    ans3 = 2;
    document.getElementById("answer9").className = "invisible btn btn-dark";
    document.getElementById("answer10").className = "invisible btn btn-dark";
    document.getElementById("answer11").className = "invisible btn btn-dark";
    document.getElementById("answer12").className = "invisible btn btn-dark";
    ans4Function()
}

function getAnswer12() {
    ans3 = 3;
    document.getElementById("answer9").className = "invisible btn btn-dark";
    document.getElementById("answer10").className = "invisible btn btn-dark";
    document.getElementById("answer11").className = "invisible btn btn-dark";
    document.getElementById("answer12").className = "invisible btn btn-dark";
    ans4Function()
}
function getAnswer13() {
    ans4 = 0;
    document.getElementById("answer13").className = "invisible btn btn-dark";
    document.getElementById("answer14").className = "invisible btn btn-dark";
    document.getElementById("answer15").className = "invisible btn btn-dark";
    document.getElementById("answer16").className = "invisible btn btn-dark";
}

function getAnswer14() {

    ans4 = 1;
    document.getElementById("answer13").className = "invisible btn btn-dark";
    document.getElementById("answer14").className = "invisible btn btn-dark";
    document.getElementById("answer15").className = "invisible btn btn-dark";
    document.getElementById("answer16").className = "invisible btn btn-dark";
}

function getAnswer15() {
    ans4 = 2;
    document.getElementById("answer13").className = "invisible btn btn-dark";
    document.getElementById("answer14").className = "invisible btn btn-dark";
    document.getElementById("answer15").className = "invisible btn btn-dark";
    document.getElementById("answer16").className = "invisible btn btn-dark";
}

function getAnswer16() {
    ans4 = 3;
    document.getElementById("answer13").className = "invisible btn btn-dark";
    document.getElementById("answer14").className = "invisible btn btn-dark";
    document.getElementById("answer15").className = "invisible btn btn-dark";
    document.getElementById("answer16").className = "invisible btn btn-dark";
}
