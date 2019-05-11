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
  this.checkLetter = function (ltr) {
    if (this.letter === ltr) {
      this.guess = true;
      return true;
    }
    // console.log(letter + ": " + this.guess);
    return false;
  };

}
module.exports = Letter;
// var test = new Letter("a");
// console.log(test.character());
// test.checkLetter("a");
// console.log(test.character());
// test.checkLetter("p");
// console.log(test.character());