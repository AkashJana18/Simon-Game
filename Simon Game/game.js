var gamePattern = [];
var userPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

//Starting the game
$(document).keydown(function () {
  if (!started) {
    nextSequence();
    $("h1").text("Level " + level);
    started = true;
  }
});

//User clicks for an answer
$(".btn").click(function () {
  var userClicked = $(this).attr("id");
  userPattern.push(userClicked);
  playSound(userClicked);
  animatePress(userClicked);
  checkAnswer(userPattern.length - 1);
});

//Checks answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (gamePattern.length === userPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

//Generates the sequence
function nextSequence() {
  userPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var colorChosen = buttonColors[randomNumber];

  gamePattern.push(colorChosen);
  $("#" + colorChosen).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(colorChosen);
}

//Plays sound
function playSound(color) {
  new Audio("sounds/" + color + ".mp3").play();
}

//Animates the colored squares
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//Restart game
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
