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
      // console.log("z: " + z);
      // console.log(this.letterArr[z].character());
      newArr.push((this.letterArr[z].character()));
    }
    console.log(newArr.join(' '));
  }

  this.validate = function(userGuess) {
    console.log(userGuess);
    let flag = false;
    for (x = 0; x < this.letterArr.length; x ++) {
      var check = this.letterArr[x].checkLetter(userGuess);
      console.log(check);
      // console.log(this.letterArr[x].character());
      // this.letterArr[x].checkLetter(userGuess);
      // console.log(this.letterArr[x].character());
      if (check === true) {
        flag = true;
      }
    }
    return flag;
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
// var currentWord = new Word("batman");
// var userGuess = "y";
// currentWord.toString();
// console.log("end result: " + currentWord.validate(userGuess));
// console.log("---------------");
// userGuess = "a";
// currentWord.toString();
// console.log("end result: " + currentWord.validate(userGuess));
// console.log("---------------");
// userGuess = "b";
// currentWord.toString();
// console.log("end result: " + currentWord.validate(userGuess));
// console.log("---------------");
// userGuess = "t";
// currentWord.toString();
// console.log("end result: " + currentWord.validate(userGuess));

// currentWord.validate(userGuess);
// currentWord.toString();
// console.log(currentWord);
// console.log(Letter);
// console.log(wordString);
module.exports = Word;