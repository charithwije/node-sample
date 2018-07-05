

// const yargs = require('yargs');
// const notes = require('./playground/notes');

// var argv = yargs
// .command('add','adding a new note',{
// 	title:{
// 		describe: 'title of the note',
// 		demand: true,
// 		alias: 't'
// 	},
// 	body:{
// 		describe: 'body of the note',
// 		demand: true,
// 		alias: 'b'
// 	}}
// ).help()
// .argv;
// var command = argv._[0];

// var validateInput = (inputValue, valueName) => {
// 	if(inputValue === undefined){
// 		console.log('Please enter a valid input for value ', valueName);
// 		return false;
// 	}else{
// 		return true;
// 	}
// }

// if(command === 'add'){
// 	if(validateInput(argv.title,'title') && validateInput(argv.body,'body')){
// 		let note = notes.addNote(argv.title, argv.body);
// 		if(note){
// 			console.log(note);
// 		}
// 	}
// }
// else if(command === 'remove') {
// 	if(validateInput(argv.title,'title')){
// 		let result = notes.removeNote(argv.title);
// 		if(result){
// 			console.log('note removed successfully');
// 		}
// 	}
// }
// else if(command === 'fetch') {
// 	if(validateInput(argv.title,'title')){
// 		let result = notes.fetchNote(argv.title);
// 		if(result){
// 			console.log(result);
// 		}
// 	}
// }

// else if(command === 'listAll') {
// 	let result = notes.listtAllNotes(argv.title);
// }
// else{
// 	console.log('Invalid or no command !');
// }


var myPromise = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('promise is resolved !');
	},2000);
});

// myPromise.then((data)=>{
// 	console.log(data);
// }, 
// (data)=>{
// 	console.log(data);
// })


var asynchAdd = (a, b) => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a + b);
			}
			else{
				reject('inputs must be numbers only');
			}	
		},2000);
	});
}

asynchAdd(12, 123).then((result)=>{
	console.log('result is',result);
	return asynchAdd(result, 5);
}, 
(error)=>{
	console.log('result is',error);
}).then((res)=>{
	console.log('new result',res)
}, (error)=>{
	console.log(error);
});