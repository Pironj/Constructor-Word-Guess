var Letter = require("./Letter");

// Constructor function that depends on Letter constructor
var Word = function (currentWord) {

  console.log("I am creating a word");
  this.letterArr = [];

  for (i = 0; i < currentWord.length; i ++) {
    // console.log(currentWord[i]);
    var currentLetter = new Letter(currentWord[i]);
    // console.log(currentLetter);
    this.letterArr.push(currentLetter);
  }
  // console.log(newDisArr);
  this.toString = function() {
    var newArr = [];
    for (z = 0; z < this.letterArr.length; z ++) {
      newArr.push((this.letterArr[z].character()));
    }
    console.log(newArr.join(' '));
  }

  this.validate = function(userGuess) {
    for (x = 0; x < this.letterArr.length; x ++) {
      this.letterArr[x].checkLetter(userGuess);
    }
  }
} 
module.exports = Word;