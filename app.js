const yargs = require('yargs');
const notes = require('./playground/notes');

var argv = yargs.argv;
var command = argv._[0];

var validateInput = (inputValue, valueName) => {
	if(inputValue === undefined){
		console.log('Please enter a valid input for value ', valueName);
		return false;
	}else{
		return true;
	}
}

if(command === 'add'){
	if(validateInput(argv.title,'title') && validateInput(argv.body,'body')){
		let note = notes.addNote(argv.title, argv.body);
		if(note){
			console.log(note);
		}
	}
}
else if(command === 'remove') {
	if(validateInput(argv.title,'title')){
		let result = notes.removeNote(argv.title);
		if(result){
			console.log('note removed successfully');
		}
	}
}
else if(command === 'fetch') {
	if(validateInput(argv.title,'title')){
		let result = notes.fetchNote(argv.title);
		if(result){
			console.log(result);
		}
	}
}

else if(command === 'listAll') {
	let result = notes.listtAllNotes(argv.title);
}
else{
	console.log('Invalid or no command !');
}
