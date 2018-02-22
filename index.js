
var inquirer = require('inquirer');
var prompt = require("prompt");

var Word = require("./word.js");
var wordSelection = ["lighthouse","volcano","pinecone","stove","beach","kayak","penguin","chimney"];
var guessLeft= 5;
 //Empty Array. This will hold letters that have been guessed already.
 var guessedLetters = [];
 var display=0;
 var currentWord;

 game();

  function game() {
    console.log("---------------------------------------------------------")
    console.log("")
    console.log("Welcome to Hangman Game!")
    console.log("")
    console.log("---------------------------------------------------------")

    if(guessedLetters.length > 0){
      guessedLetters = []
    }
    inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "Ready to play?"
    }]).then(function(answer) {
      if(answer.play){

        startGame();
      
      } else {
        console.log("Okay. No one should be forced to do things they don't want to do. See ya!");
      }
    })
}

 function startGame(){
     if(guessLeft === 5){
         console.log("The Game is about to begin!");

         var randomNum = Math.floor(Math.random() * wordSelection.length);
         currentWord = new Word(wordSelection[randomNum]);
         currentWord.getLetters();
         console.log(currentWord.wordRender());
         playerPromt();
     }
     else{
        resetGuesses();
        startGame();
     }
 }

 function resetGuesses(){
     guessLeft=5;
 }

 function playerPromt(){
     inquirer.prompt([
         {
             name:"chosen",
             type:"input",
             message:"Choose a letter!"

         }
     ]).then(function(ltr){

        var returningLetter = (ltr.chosen);
        var currentGuess = false;

        for(var i = 0; i < guessedLetters.length; i++){

            if(returningLetter === guessedLetters[i]){
                currentGuess = true;
            }
        }

        if(currentGuess === false){
            guessedLetters.push(returningLetter);

            var x = currentWord.letterCheck(returningLetter);

            if(x === 0){
                console.log("Wrong Guess!");
                guessLeft--;
                console.log("Guess Left: " + guessLeft);
                display++;
                
                console.log("\n---------------")
                console.log(currentWord.wordRender());
                console.log("\n---------------");

                console.log("Guess Letters: " + guessedLetters);
            }
            else{
                console.log("You guessed correctly!!!");
            }
                if(currentWord.wordCheck() === true){
                    console.log(currentWord.wordRender())
                    console.log("Congradulation!!! You Won!!!");
                }
                else{
                    console.log("Guess Left: " + guessLeft);
                    console.log(currentWord.wordRender());
                    console.log("\n-------------");
                    console.log("Guess Letters: " + guessedLetters);
                }
       
         }
         if(guessLeft > 0 && currentWord.wordFound === false) {
            playerPromt();
          }
          else if(guessLeft === 0){
            console.log("Game over!");
            console.log("The word you were guessing was: " + currentWord.word);
          }
        
          else {
            console.log("You've guessed that letter already. Try again.");
            playerPromt();
        }  
     });
 };
