var countryList = ["Andorra", "Azerbaijan", "Bahrain", "Bhutan", "Botswana", "Chad", "Comoros", "Djibouti", "Dominica", "Eritrea", "Eswatini", "Gabon", "Latvia", "Madagascar", "Moldova", "Rwanda", "Singapore", "Suriname", "Tanzania", "Zambia"]

//Create variables to hold references in the HTML
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("current-word");
var remainingGuesses = document.getElementById("remaining-guesses");
var lettersGuessed = document.getElementById("letters-guessed");

//Number of tries
const maxTries = 10;

//Create wins variable
var wins = 0;

//Set up variable to show how many remaining guesses
var remainingGuesses = countryList.length;

//Set up guessArray to show how many letters in the country name with an underscore
var guessArray = [];

for (var i = 0; i < countryList.length; i++) {
    guessArray[i] = "_";
}

//Set up variable to for index of current letter in array
var currentLetterIndex

//Pick random country
var randomCountry = countryList[Math.floor(Math.random() * countryList.length)];

//Set up game event
document.onkeyup = function (event) {
    var userGuess = event.key;

    //Set up logic of the game
    if (userGuess === )



    //Update game with the guess
    for (var j = 0; j < countryList; j++) {
        if (countryList[j] === userGuess) {
            guessArray[j] = userGuess;
            remainingGuesses--;
        }
    }

    //Set up displays
    directionsText.textContent = "Press any key to start playing!";
    winsText.textContent = "Wins: " + wins;
    currentWord.textContent = randomCountry;
    remainingGuesses.textContent = "Remaining Guesses: " + guessArray;
    lettersGuessed.textContent = lettersGuessed;

}



