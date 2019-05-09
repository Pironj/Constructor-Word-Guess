var Word = require("./Word");
var inquirer = require("inquirer");

var secretWords = ["spiderman", "batman", "wonderwoman", "flash", "superman", "catwoman"];
var currentWord = secretWords[Math.floor(Math.random() * secretWords.length)];
var remainingGuesses = 10;

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

    switch ("startGame") {
      case "Yes":
      this.toString(currentWord);
      promptUserGuess();
      break;
      case "No":
      console.log("Ok maybe another time.");
      startGame();
      break;
    }
  })
}
function promptUserGuess() {
  inquirer.prompt([
    {
      type: "text",
      name: "userGuess",
      message: "Guess a letter: ",
    }
  ]).then(function(res) {
    // this.validate(userGuess);
    // if (this.guess = false) {
    //   remainingGuesses--;
    // }
    // if (this.guess = true) {

    // }
  })
}
startGame();