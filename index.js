var inquirer = require('inquirer');
var prompt = require("prompt")

var Word = require('./word.js');
var wordSelection = ["lighthouse","volcano","pinecone","stove","beach","kayak","penguin","chimney"];
var guessLeft= 5;
 //Empty Array. This will hold letters that have been guessed already.
 var guessedLetters = [];
 var display=0;
 var currentWord;

 function 
