var Word = require("./Word");
var inquirer = require("inquirer");

var secretWords = ["spiderman", "batman", "wonderwoman", "flash", "superman", "catwoman"];
var currentWord = secretWords[Math.floor(Math.random() * secretWords.length)];
var remainingGuesses = 5;
var newWord;
function startGame() {
  inquirer.prompt([
    {
      type: "list",
      name: "startGame",
      choices: ["Yes", "No"],
      message: "Would you like to play a word guess game?"
    }
  ]).then(function(res){
    console.log(res.startGame);

    switch (res.startGame) {
      case "Yes":
      newWord = new Word(currentWord);
      console.log(newWord);
      console.log("\n");
      newWord.toString();
      console.log("\n");
      promptUserGuess(newWord);
      break;
      case "No":
      console.log("Ok maybe another time.");
      startGame();
      break;
    }
  })
}
function promptUserGuess(newWord) {
  // console.log(newWord);
  inquirer.prompt([
    {
      type: "input",
      name: "userGuess",
      message: "Guess a letter: ",
    }
  ]).then(function(res) {
    // console.log("I am the response: " + res);
    console.log("User Guess : " + res.userGuess);
    console.log(remainingGuesses);
    var didItWork = newWord.validate(res.userGuess);
    console.log(didItWork);
    if (didItWork === false) {
      remainingGuesses--;
      console.log(remainingGuesses);
    } 
    newWord.toString(res.userGuess);
    if (remainingGuesses > 0) {
      promptUserGuess(newWord);
    } else {
      console.log("Game Over!");
    }
    // for (m = 0; m < newWord.length; m++) {

    //   if (newWord[m].character(res.userGuess) === false) {
    //     remainingGuesses--;
    //     console.log("You have" + remainingGuesses + " guesses left.");
    //   }
    //   if (newWord[m].character(res.userGuess) === true) {
    //     console.log(res.userGuess);
    //     newWord.validate(res.userGuess);
    //     console.log
    //     promptUserGuess();
    //   }
    //   if (remainingGuesses < 0) {
    //     console.log("You have lost. Try again.")
    //     startGame();
    //   }
    // }
  })
}
startGame();