/* Part 1: Building the Word Guess Game */

/* Game Logic Part 1 - Utility Functions */

// 1.0 - gameWords variable
var gameWords = ["illuminati", "templar", "warfare", "hunger", "disease", "surveillance", "cyberpunk", "agents", "hacker", "augmentation", "poverty", "homelessness", "nuke", "mutation", "pollution"];

//1.1 - randomWord function
var randomWord = function(wordList) {
    var randomIndex = Math.floor(Math.random() * wordList.length); 
    var randomElement = wordList[randomIndex];
    return randomElement;
}

//1.2 - isCorrectGuess function
var isCorrectGuess = function(word, letter) {
    for (var i = 0; i < word.length; i++) {
        
        var letterGuess = letter.toLowerCase().charAt(i);
        if(letterGuess = word[i]) {
            return true;
        }
        
        else {
            return false;
        }
    }  
}

//1.3 - getBlanks function
var getBlanks = function(blank) {
    var blanks = [];
    for (var i = 0; i < blanks.length; i ++) {

    }
    return blanks[i] = "_";
 

    

}

//1.4 - fillBlanks function
var fillBlanks = function(word, wordList, letter) {

}

/* Game Logic Part 2 - Game Management Functions */

//1.5 - setupRound function
var setupRound = function(word) {
    var roundObj = {
        word:
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState:
    }
}

//1.6 - updateRound function

//1.7 - hasWon function 

//1.8 - hasLost function

//1.9 - isEndOfRound function

//1.10 - setupGame function

//1.11 - startNewRound function

//1.12 - myGame variable



