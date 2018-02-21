const Letter = function(letterChoice){
    //To store the underlying character for the letter
    this.letterChoice = letterChoice;

    // A letter has been guessed yet
    this.letterGuessed = false;
    
    this.returnLetter = function(){
        if(this.letterGuessed){
            //If the letter has been guessed.
            return this.letterChoice; 
        }
            //If the letter has NOT been guess, yet.
            return " _ ";
    }

    this.check = function (guess){
        if(this.letterChoice === guess){
            this.letterGuessed === true;
            return true;
        };

    };
};

module.exports = Letter;