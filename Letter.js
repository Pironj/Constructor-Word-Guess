// constructor function to display letters/blanks
var Letter = function(letter) {
  this.letter = letter,
  this.guess = false,
  this.character = function () {
    if (this.guess) {
      return this.letter;
    } else {
      return "_";
    }
  };
  this.checkLetter = function (letter) {
    if (this.letter === letter) {
      return this.guess = true;
    } else {
      return this.guess = false;
    }
  };

}
module.exports = Letter;
