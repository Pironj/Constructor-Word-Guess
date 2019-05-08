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
// var test = new Letter("a");
// console.log(test);
// // console.log(test.character());
// console.log(test.checkLetter("b"));
// console.log(test.checkLetter("a"));
module.exports = Letter;
//we make an object with three properties for each letter in the word.
  //the letter, an underscore, a boolean value.
  //if true, show letter.  else, show underscore.


  // "_ _ _ _ _"

  // "a _ _ _ _"
  // "a p p _ _"