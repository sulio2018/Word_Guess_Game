var keywordList = ["atmosphere", "biodiversity", "bioenergy", "biofuels", "conservation", "deforestation", "ecosystem", "emissions", "hanitat", "organic", "pesticides", "recycle", "reforestation", "reusable", "sustainability"]

//Create variables
var currentWord = "";
var currentLetters = [];
var blankSpaces = 0;
var answerArray = [];
var wrongGuesses = [];
var maxTries = 10;
var wins = 0;
var losses = 0;

//Game setup
function startGame() {

    currentWord = keywordList[Math.floor(Math.random() * keywordList.length)];

    currentLetters = currentWord.split("");

    blankSpaces = currentLetters.length;

    //Reset the game
    maxTries = 10;
    wrongGuesses = [];
    answerArray = [];

    //Fill in spaces with underscores
    for (i = 0; i < blankSpaces; i++) {
        answerArray.push("_");
    }

    //Setup display
    document.getElementById("wins-text").innerHTML = "Wins: " + " " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + " " + losses;
    document.getElementById("current-word").innerHTML = answerArray.join(" ");
    document.getElementById("remaining-guesses").innerHTML = "Number of Guesses Remaining: " + " " + maxTries;

}

//Reference guesses
function checkLetters(letter) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {

        var correctLetter = false;

        for (var i = 0; i < blankSpaces; i++) {
            if (currentWord[i] == letter) {
                correctLetter = true;
            }
        }

        if (correctLetter) {
            for (var i = 0; i < blankSpaces; i++) {
                if (currentWord[i] == letter) {
                    answerArray[i] = letter;
                }
            }
        }

        else {
            wrongGuesses.push(letter);
            maxTries--;
        }
    }
}


//Update a full round of a game
function fullRoundGame() {

    document.getElementById("remaining-guesses").innerHTML = "Number of Guesses Remaining: " + " " + maxTries;
    document.getElementById("current-word").innerHTML = answerArray.join(" ");
    document.getElementById("letters-guessed").innerHTML = "Letters Already Guessed:" + " " + wrongGuesses.join(" ");

    if (currentLetters.toString() == answerArray.toString()) {
        wins++;
        alert("CONTRATULATIONS! You guessed '" + currentWord + "' correctly. Try another word.");
        document.getElementById("wins-text").innerHTML = "Wins: " + " " + wins;

        //Start New Game
        startGame();
        document.getElementById("letters-guessed").innerHTML = "Letters Already Guessed:" + " " + " ";

    } else if (maxTries == 0) {
        losses++;
        alert("You have 0 guesses left. The correct word was '" + currentWord + "'. Do you want to try again?");
        document.getElementById("losses-text").innerHTML = "Losses: " + " " + losses;

        //Start New Game
        startGame();
        document.getElementById("letters-guessed").innerHTML = "Letters Already Guessed:" + " " + " ";
    }
}

//Start game for the first time
startGame();

document.onkeyup = function(event) {

    prompt("Type a letter");

    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(lettersGuessed);
    fullRoundGame();

}