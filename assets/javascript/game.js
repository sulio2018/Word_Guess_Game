var countryList = ["andorra", "azerbaijan", "bahrain", "bhutan", "botswana", "chad", "comoros", "djibouti", "dominica", "eritrea", "eswatini", "gabon", "latvia", "madagascar", "moldova", "rwanda", "singapore", "suriname", "tanzania", "zambia"]

//Create variables to hold references in the HTML
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("current-word");
var remainingGuesses = document.getElementById("remaining-guesses");
var lettersGuessed = document.getElementById("letters-guessed");


//Set up variables
const maxTries = 10

var guessedLetters = []
var guessedWord = []
var currentWord
var remainingGuesses
var pauseGame = false
var wins = 0

resetGame()

//Set up key function
document.onkeypress = function (event) {

    if (isAlpha(event.key) && !pauseGame) {
        checkForLetter(event.key.toUpperCase())
    }
}

function checkForLetter(letter) {
    var foundLetter = false

//Check for correctt/incorrect guesses
    for (var i = 0, j = currentWord.length; i < j; i++) {
        if (letter === currentWord[i]) {
            guessedWord[i] = letter
            foundLetter = true

            if (guessedWord.join("") === currentWord) {
                wins++
                pauseGame = true
                updateDisplay()
                setTimeout(resetGame, 5000)
            }
        }
    }

    if (!foundLetter) {
            if (!guessedLetters.includes(letter)) {
            guessedLetters.push(letter)
            remainingGuesses--
        }
        if (remainingGuesses === 0) {
            guessedWord = currentWord.split()
            pauseGame = true
            setTimeout(resetGame, 5000)
        }
    }

    updateDisplay()

}


function resetGame() {
    numGuess = maxGuess
    pauseGame = false

    // Get a new word
    wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase()
    console.log(wordToMatch)

    // Reset word arrays
    guessedLetters = []
    guessingWord = []

    // Reset the guessed word
    for (var i = 0, j = wordToMatch.length; i < j; i++) {
        // Put a space instead of an underscore between multi word "words"
        if (wordToMatch[i] === " ") {
            guessingWord.push(" ")
        } else {
            guessingWord.push("_")
        }
    }

    // Update the Display
    updateDisplay()
}

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins
    document.getElementById("currentWord").innerText = guessingWord.join("")
    document.getElementById("remainingGuesses").innerText = numGuess
    document.getElementById("guessedLetters").innerText = guessedLetters.join(" ")
}
})

//Set up displays
directionsText.textContent = "Press letter key to start playing!";
winsText.textContent = "Wins: " + wins;
currentWord.textContent = randomCountry;
remainingGuesses.textContent = "Remaining Guesses: " + guessArray;
lettersGuessed.textContent = lettersGuessed;

}



