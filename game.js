// array with words - additional words can be added without affecting functionality
var words = ['SpaceShuttle','Jupiter','Saturn','Mars','Skylab','Apollo','Armstrong','Hubble','quasar','Venus','galaxy'];

// function to choose random word & export it
function selectAword(){
	exports.selectedWord = words[Math.floor(Math.random()*words.length)].toLowerCase();
}

// export function
exports.select=selectAword;


