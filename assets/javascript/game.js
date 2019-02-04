//Variables
var wordsList =           
    ["liverpool","chelsea","arsenal","acmilan","fcbarcelona","manchesterunited","realmadrid"];

var guessesLeft = 15;
var remainingGuesses = 0;
var numberWins = 0;
var numberofLetters;
var currentWordIndex;     
var userLetters = [];
var computerChoice = [];
var gameStarted = false;
var gameFinished = false;   


function resetGame() {
    remainingGuesses = guessesLeft;
    gameStarted = false;

    currentWordIndex = Math.floor(Math.random() * (wordsList.length));

    userLetters = [];
    computerChoice = [];

    for (var i = 0; i < wordsList[currentWordIndex].length; i++) {
        computerChoice.push("_");
    }
    numberofLetters = wordsList[currentWordIndex].length;
    document.getElementById("letter-count").innerText = numberofLetters;

    document.getElementById("Milan").style.cssText= "display: none";
    document.getElementById("Arsenal").style.cssText= "display: none";
    document.getElementById("Chelsea").style.cssText= "display: none";
    document.getElementById("Barcelona").style.cssText= "display: none";
    document.getElementById("Liverpool").style.cssText= "display: none";
    document.getElementById("Manchester").style.cssText= "display: none";
    document.getElementById("Real").style.cssText= "display: none";

    updateInformation();
};

function updateInformation() {

    document.getElementById("user-wins").innerText = numberWins;
    document.getElementById("current-word").innerText = "";
    for (var i = 0; i < computerChoice.length; i++) {
        document.getElementById("current-word").innerText += computerChoice[i];
    }
    document.getElementById("guess-left").innerText = remainingGuesses;
    document.getElementById("used-letters").innerText = userLetters;
    if(remainingGuesses <= 0) {
        gameFinished = true;
    }
};

document.onkeydown = function(event) {
    if(gameFinished) {
        resetGame();
        gameFinished = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        if (userLetters.indexOf(letter) === -1) {
            userLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    
    updateInformation();
    checkWin();
};

function evaluateGuess(letter) {
    var positions = [];

    for (var i = 0; i < wordsList[currentWordIndex].length; i++) {
        if(wordsList[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        remainingGuesses--;
    } else {
        for(var i = 0; i < positions.length; i++) {
            computerChoice[positions[i]] = letter;
        }
    }
};
function checkWin() {
    if(computerChoice.indexOf("_") === -1) {
        numberWins++;
        if (computerChoice === "liverpool"){
            document.getElementById("Liverpool").style.cssText= "display: block";
        } else if (computerChoice === "chelsea") {
            document.getElementById("Chelsea").style.cssText= "display: block";
        } else if (computerChoice === "arsenal") {
            document.getElementById("Arsenal").style.cssText= "display: block";
        } else if (computerChoice === "acmilan") {
            document.getElementById("Milan").style.cssText= "display: block";
        } else if (computerChoice === "fcbarcelona") {
            document.getElementById("Barcelona").style.cssText= "display: block";
        } else if (computerChoice === "manchesterunited") {
            document.getElementById("Manchester").style.cssText= "display: block";
        } else if (computerChoice === "realmadrid") {
            document.getElementById("Real").style.cssText= "display: block";
        }
        gameFinished = true;
    }
};


//First Trial
// // Variables
// var allowedGuesses;
// var correctGuesses;
// var wrongGuesses;
// var computerGuessElement = document.getElementById('current-word');
// var letterCountElement = document.getElementById('letter-count');
// var lettersGuessedElement = document.getElementById('used-letters');

// function initializeGame() {
// var gameWords = ["Liverpool","Chelsea","Arsenal","AC Milan","FC Barcelona","Manchester United FC"];
// var computerGuess = gameWords[Math.floor(Math.random() * gameWords.length)];
// guessesLeft = 15;
// wrongGuesses = [];
// correctGuesses = [];

// // initialize correctGuesses array with underscores
// for (var i = 0; i < computerGuess.length; i++) {
//     // correctGuesses.push('_');
//     // console.log(correctGuesses.push('_'));
// }

// computerGuessElement.innerHTML = correctGuesses.join(' ');
// letterCountElement.innerHTML = allowedGuesses;
// }

// function updateGuesses(letter) {
// guessesLeft--; 
// letterCountElement.innerHTML = allowedGuesses;

// if (computerGuess.indexOf(letter) === -1) { 
//     wrongGuesses.push(letter); 
//     lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
// } else { 
//     for (var i = 0; i < computerGuess.length; i++) {
//     if (computerGuess[i] === letter) {
//         correctGuesses[i] = letter;
//     }
//     }

//     computerGuessElement.innerHTML = correctGuesses.join(' ');
// }
// }

// function checkWin() {
// if (correctGuesses.indexOf('_') === -1) {
//     alert('You Won!');
// } else if (allowedGuesses === 0) {
//     alert('You Lost!');
// }
// }

// document.onkeyup = function (event) {
// var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// updateGuesses(letterGuessed);
// checkWin();
// };

// initializeGame();
        
