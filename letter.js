// require game.js to obtain random word and word.js to
// check user guessed letters vs the chosen word
var wordIneed=require('./game.js');
var functionsIneed=require('./word.js');
// initialize selected word
var selectedWord=[];
// constructor to create word array from string which is passed in
function WordtoDisplay(word){
	var holder='';
	// loop thru word and create a string with the same number of dashes
	// as letters in the word
	for (var i=0;i<word.length;i++){
		holder+='-';
	}
	// display key has the word (letters or dashes) as it
	// will be displayed
	this.display=holder.split('');
	// answer key has the actual letters
	this.answer=word.split('');
	// userGuesses keeps track of which letters the user has guesses already
	this.userGuesses=[];
}

// Prototype to change the letter of the display key from a dash to a letter
WordtoDisplay.prototype.changeLetter=function(letter,position){
	this.display[position]=letter;
	return;
}
// Prototype calls function from 'word.js' to check if passed letter is in the word
WordtoDisplay.prototype.userCheck=function(user){return(functionsIneed.check(user));}
// Prototype calls the 'reset' function from 'word.js' to reset user guesses
WordtoDisplay.prototype.reset=function(){functionsIneed.reset();}
// function selects a random word by calling a function from game.js
function selectAword(){
	wordIneed.select();
	// create new instance of 'WordtoDisplay' & export it
	selectedWord = new WordtoDisplay(wordIneed.selectedWord);
	exports.selection=selectedWord;
}
// export function to select a random word & create a new 'WordtoDisplay' object
exports.wordselect=selectAword;
