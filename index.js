var inquirer = require("inquirer");
var prompt = require("prompt");
//require objects/exports
var Word = require("./word.js");
var wordSelection = ["lighthouse","volcano","pinecone","stove","beach","kayak","penguin","chimney"];
var guessesLeft = 5;
  //Empty Array. This will hold letters that have been guessed already.
var guessedLetters = [];
var display = 0
var currentWord;

startGame();

  function startGame() {
    console.log("---------------------------------------------------------");
    console.log("");
    console.log("Welcome to Hangman Game!");
    console.log("");
    console.log("---------------------------------------------------------");

    if(guessedLetters.length > 0){
      guessedLetters = [];
    }
    inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "Ready to play?"
    }]).then(function(answer) {
      if(answer.play){
        newGame();
      } else {
        console.log("Okay. Maybe Next Time!");
      }
    })}

    function newGame() {
      if(guessesLeft === 5) {
        console.log("Get ready!");

        var randNum = Math.floor(Math.random() * wordSelection.length);
        currentWord = new Word(wordSelection[randNum]);
        currentWord.getLetters(); //initiats get letters function
        console.log(currentWord.wordRender());
        userPrompts();
      } else {
        resetGuesses();
        newGame();
      }
    }
    function resetGuesses() {
        guessesLeft = 5;
    }
    function userPrompts() {
      inquirer.prompt([{
        name: "chosenLtr",
        type: "input",
        message: "Choose a letter",
        
      }]).then(function(ltr) {
        var letterReturned = (ltr.chosenLtr);
        var guessedAlready = false;
          for(var i = 0; i < guessedLetters.length; i++){
            if(letterReturned === guessedLetters[i]){
              guessedAlready = true;
            }
          }
          if(guessedAlready === false){
            guessedLetters.push(letterReturned);

            var found = currentWord.letterCheck(letterReturned);

            if(found === 0){
              console.log("\x1b[31m%s\x1b[0m","INCORRECT!");
              guessesLeft--;
              display++;
              console.log("Guesses left: " + guessesLeft);
              //console.log([display-1]); //check this later

              console.log("\n***************");
              console.log(currentWord.wordRender());
              console.log("\n***************");

              console.log("Letters left: " + guessedLetters);
            }else{
              console.log("\x1b[32m","CORRECT!");

                if(currentWord.wordCheck() === true){
                  console.log(currentWord.wordRender());
                  console.log("\x1b[1m","\x1b[35m","Congrats! You won!");
                } else {
                  console.log("Guesses remianing: " + guessesLeft);
                  console.log(currentWord.wordRender());
                  console.log("\n***************");
                  console.log("Letters guessed: " + guessedLetters);
                }
            }
            if(guessesLeft > 0 && currentWord.wordFound === false) {
              userPrompts();
            }else if(guessesLeft === 0){
              console.log("Game over!");
              console.log("The word you were guessing was: " + currentWord.word);
            }
          } else {
              console.log("\x1b[35m%s\x1b[0m","You've guessed that letter already. Try again.");
              userPrompts();
          }
      })
    }