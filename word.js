// intitialize user guesses array which holds letters user has entered
var userGuesses=[];
// require 'letter.js' file to change dashes to letters & check if user has won
var correct=require('./letter.js');
// function checks if user has guesses a correct letter and if the user has guess
// all letters in the word
function checkUserGuess(userGuess){
	// look at only the first character and replace random characters with nothing
	// not really needed
	userGuess=userGuess.charAt(0);
	userGuess=userGuess.replace(/[!@#$%^&*()+=\[\]\{\}\:\;\'\",.<>?/\\|`~]/g,'');
	// loop thru guesses the user has already made & retun null if 
	// the user is making a duplicate guess - not really needed
	for (var i=0;i<userGuesses.length;i++){
		if (userGuess===userGuesses[i]){return null;}
	}
	// if userGuess is unique, push the letter to the userGuesses array
	userGuesses.push(userGuess);
	// loop thru word & if letter exists in word change it from a dash to
	// the actual letter by calling the changeLetter function in letter.js
	for (var i=0;i<correct.selection.answer.length;i++){
		if (userGuess===correct.selection.answer[i]){
			correct.selection.changeLetter(userGuess,i);
		}
	}
	// Check to see if user has guessed all leters, if so, return true
	for (var i=0;i<correct.selection.answer.length;i++){
		if (correct.selection.display[i]==='-'){return false;}
	}
	return true;
}
// reset user guesses array
function resetUserGuesses(){
	userGuesses=[];
}
// export functions
exports.check=checkUserGuess;
exports.reset=resetUserGuesses;