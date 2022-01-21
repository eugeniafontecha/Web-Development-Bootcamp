
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(".btn").click( function () {
    var userChosenColor = this.id;

    animatePress(userChosenColor);

    playSelectedColorSound(userChosenColor);

    userClickedPattern.push(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
       
});

function nextSequence() {
    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    flashSelectedButton(randomChosenColor);

    playSelectedColorSound(randomChosenColor);

    userClickedPattern = [];
}

function flashSelectedButton(color) {
    $("#" + color).fadeOut(100).fadeIn(100);
}

function playSelectedColorSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(color) {
    $("#" + color).addClass("pressed");

    setTimeout(function () {
        $("#" + color).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if ( userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        if (currentLevel === level - 1) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
         
    } else {
        
        $("#level-title").text("Game Over, Press Any Key to Restart");

        $("body").addClass("game-over");

        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function startOver() {
    started = false;
    level = 0;
    gamePattern = [];
}


$(document).keydown(function () {
    if (!started) {
        setTimeout(function () {
            nextSequence();
        }, 100);

        started = true;
    }    
});





