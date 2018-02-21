var Letter = require("./Letter.js")

const Word = function (word){
    this.word = word;
    this.letters = [];
    this.wordFound=false;

    this.getLetters = function(){
        //populating letters
        for(var i=0; i < this.word.length; i++){
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter)
        }
    };

    this.wordCheck = function () {
        if (this.letters.every(function (ltr) {
            return ltr.appear === true;
        })) {
            this.wordFound = true;
            return true;
        }
      }

      this.letterCheck = function(guessedLtr){
        var returnWhat = 0;
        this.letters.forEach(function(ltr){
            if(ltr.letter===guessedLtr){
                ltr.appear =true;
                returnWhat++; 
            }
        });
        return returnWhat;
      }

      this.render = function(){
          var display="";
          this.letters.forEach(function(ltr){
              var currentLetter = ltr.render();
              display+=currentLetter;
          });
          return display;
      }

};

module.exports = Word;