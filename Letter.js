const Letter = function(letterChoice){
    //To store the underlying character for the letter
    this.letterChoice = letterChoice;

    // A letter has been guessed yet
    this.letterGuessed = false;
    
    this.returnLetter = function(){
        if(this.letterChoice === " "){
            //If the letter has been guessed.
             this.letterGuessed === true   
            //If the letter has NOT been guess, yet.
            return " ";
        } if(this.letterGuessed === false){
            return " _ ";
        }else{
            return this.letterChoice;
        }

    };
};

module.exports = Letter;