/* Part 1: Building the Word Guess Game */

/* Game Logic Part 1 - Utility Functions */

// 1.0 - gameWords variable
var gameWords = ["illuminati", "templar", "warfare", "hunger", "disease", "surveillance", "cyberpunk", "agents", "hacker", "augmentation", "poverty", "homelessness", "nuke", "mutation", "pollution"];

//1.1 - randomWord function
var randomWord = function(wordList) {
    Math.floor(Math.random() * wordList.length);
    return gameWords;
}

//1.2 - isCorrectGuess function
var isCorrectGuess = function(word, letter) {
    for (var i = 0; i >= word.length; i++) {
        if (gameWords[i] === letter) {
          
        }
        return false;
    }
    return true;
}

//1.3 - getBlanks function
var getBlanks = function(blank) {

}

//1.4 - fillBlanks function

/* Game Logic Part 2 - Game Management Functions */

//1.5 - setupRound function

//1.6 - updateRound function

//1.7 - hasWon function 

//1.8 - hasLost function

//1.9 - isEndOfRound function

//1.10 - setupGame function

//1.11 - startNewRound function

//1.12 - myGame variable