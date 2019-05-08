var Letter = require("./Letter");

// Constructor function that depends on Letter constructor
var Word = function (currentWord) {

  console.log("I am creating a word");
  this.letterArr = [];
  this.displayArr = [];

  this.toString = function() {
    for (i = 0; i < currentWord.length; i ++) {
      // console.log(currentWord[i]);
      var currentLetter = new Letter(currentWord[i]);
      console.log(currentLetter);
      this.letterArr.push(currentLetter.letter);
      // var newArr = this.letterArr.join(' ');
      
      var newArr = currentLetter.character();
      this.displayArr.push(newArr);
      var newDisArr = this.displayArr.join(' ');
      // console.log(currentLetter.character());
      // console.log(newArr);
    }
    console.log(newDisArr);
  }

  this.validate = function(userGuess) {
    userGuess.checkLetter();
  }

  // console.log(newArr);
  // console.log(this.letterArr);
  // function returns a string representing the word.  Will call character() from Letter.js
  // this.wordString = function () {
  //   this.letterArr = currentWord.split("");
  //   for (var i = 0; i < letterArr.length; i++) {
  //     this.letterArr[i].push(character());
  //   }
  // }
  // this.charArg = function (letter) {

  // }
}  
var currentWord = new Word("apple");
var userGuess = "a";
// console.log(currentWord);
// console.log(Letter);
// console.log(wordString);
// module.exports = Word;