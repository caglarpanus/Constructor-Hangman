var inquirer = require('inquirer');
var prompt = require("prompt")

var Word = require('./word.js');
var wordSelection = ["lighthouse","volcano","pinecone","stove","beach","kayak","penguin","chimney"];














// var word = require("./Word.js");
// var inquirer = require("inquirer");
// 
// var letter= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var guesses= [];
// var computerPick;

// function random(){
//     var randomSelection = wordSelection[Math.floor(Math.random() * wordSelection.length)];
//     computerPick = new word(randomSelection);
//     computerPick.createLetters();
// };

// function showArray(){
//     var value = computerPick.returnString();
//     console.log(value + "\n");
// }

// random();
// showArray();

// inquirer.prompt([
//     {
//         type: "input",
//         name:"play",
//         message:"Guess A Letter"
//     }
// ]).then(function(answer){

//     var guess = answer.play.toLowerCase();

//     if(letter.indexOf(answer.play) >= 0 ){
//         if(guesses.indexOf(answer.play)< 0){
//             //search on google to printing colorful text in node js.
//             console.log('\x1b[36m%s\x1b[0m', '\nCORRECT!');
//             computerPick.wordCheck();
//         }
//         else{
//             console.log('\x1b[31m%s\x1b[0m', '\nINCORRECT!');
//         }
//     }
// })