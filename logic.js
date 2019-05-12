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
        var char = word[i];

        if(char === letter) {
            return true;
        }

    }
    return false;  
}

//1.3 - getBlanks function
var getBlanks = function(blanks) {
    var blanks = [];
    for (var i = 0; i < blanks.length; i ++) {

    }
    return blanks[i] = "_";
 

    

}

//1.4 - fillBlanks function
var fillBlanks = function(word, puzzleState, letter) {

}

/* Game Logic Part 2 - Game Management Functions */

//1.5 - setupRound function
var setupRound = function(word) {
    var roundObj = {
        word: word,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: word = [],
    };
    return roundObj;
}

//1.6 - updateRound function
var updateRound = function(round, letter) {


}

//1.7 - hasWon function 
var hasWon = function(puzzleState) {
    return true;
 
}

//1.8 - hasLost function
var hasLost = function() {

}

//1.9 - isEndOfRound function
var isEndOfRound = function() {

}

//1.10 - setupGame function
var setupGame = function() {

}

//1.11 - startNewRound function
var startNewRound = function() {

}

//1.12 - myGame variable
// var myGame =  

// var roundObj = {
//     word: word,
//     guessesLeft: 9,
//     wrongGuesses: [],
//     puzzleState: word = [],
// };




