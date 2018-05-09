// var obj = {
//     name: "test1",
//     age: 25,
//     isRegistered: false
// }

// var jsonString = JSON.stringify(obj);

// console.log(typeof jsonString);
// console.log(jsonString);

// var personString = '{"name": "test1", "age": 25, "isRegistered": false}';

// console.log(typeof personString);
// console.log(personString);

// console.log(JSON.parse(personString));
// console.log(typeof JSON.parse(personString));

// const fs = require('fs');

// var originalNote = {
//     title: "title one", 
//     body: "body content"
// };

// var originalNoteString = JSON.stringify(originalNote);

// fs.writeFileSync('notes.json', originalNoteString);

// var retrievedNotesString = fs.readFileSync('notes.json');

// var readNotesObject  = JSON.parse(retrievedNotesString);

// console.log(readNotesObject.body);

const notes = require('./notes');


// var result = notes.addNote('title5', 'muwhahahahaha');

// if(result != null){
//     console.log('note added title = ', result.title);
// }
// else{
//     console.warn('Duplicate note, that already exixst');
// }

// var result  = notes.removeNote('title5');

var result = notes.fetchNote('title1asd');
if(result.length > 0){
    console.log(result);
}
else{
    console.log('Note not found');
}
