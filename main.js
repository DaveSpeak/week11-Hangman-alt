// include 'inquirer' npm package to get user input
var inquirer=require('inquirer');
// letter.js has all the constructors and prototypes
var wordDisplay=require('./letter.js');
// set number of allowed guesses and initialize user guesses
var allowedGuesses=10;
var guesses=0;
// Start game
console.log('Hello - this is a Space Hangman Game!');
console.log('Start by guessing  a letter:');
console.log('Here\'s the word: ');
startTheGame();
// function to initiate game play
function startTheGame(){
	// set (or reset) user guesses to zero
	guesses=0;
	// call function to select random word (in letter.js)
	wordDisplay.wordselect();
	// reset array with user guesses in it
	wordDisplay.selection.reset();
	// start getting user guesses
	getUserGuess();
}

// function which takes input array with word letters and renders it
// to the console:
function displayTheword(word){
	var showIt='';
	// cycle thru word & add each letter to display variable 'showIt'
	for (var i=0;i<word.length;i++){
		showIt+=word[i];
	}
	console.log(showIt);
}
// obtain user input
function getUserGuess(){
	// first display the word to the console
	displayTheword(wordDisplay.selection.display);
	// if user hasn't exceeded allowable guesses, ask for input
	if (guesses<allowedGuesses){
		inquirer.prompt ([
			{
				type:"input",
				message:"Guess a letter:",
				name:"letter"
			}
		]).then(function(user){
			// check if the user has guessed correctly by calling the 'userCheck'
			// function from letter.js
			if (wordDisplay.selection.userCheck(user.letter.toLowerCase())){
				// user has won, console.log message, display entire word & ask if
				// the user wants to play again
				console.log('You Win!!');
				displayTheword(wordDisplay.selection.display);
				playAgain();
			}else {
				// increment number of guesses & call function recursively
				guesses++;
				getUserGuess();
			}
		});
	}else {
		// user has lost, display message, word and ask if the user wants to
		// play again
		console.log('You Lose. The word was: ');
		displayTheword(wordDisplay.selection.answer);
		playAgain();
	}
}
// ask if user wants to play again
function playAgain(){
	inquirer.prompt([
		{
			type:"confirm",
			message:"Do you want to play again?",
			name:"again"
		}
	]).then(function(play){
		if (play.again){
			startTheGame();
		}else {process.exit();}
	});
}

