console.log('starting notes.js');

const fs = require('fs');

var getNotesFromfile = (filePath) => {
    try{
        var notesData = fs.readFileSync(filePath);
        return JSON.parse(notesData);
    }
    catch(e){ return null; }
}

var saveNotesToFile = (data) => {
    try{
        fs.writeFileSync('./playground/notes.json', JSON.stringify(data));
    }
    catch(e){}
}

var addNote = (title, body) => {
    var notes = [], note = {title, body}, duplicate;
    notes = getNotesFromfile('./playground/notes.json');
    var duplicateNote = notes.filter(x => x.title === title);
    if(duplicateNote.length === 0){
        notes.push(note);
        debugger;
        saveNotesToFile(notes);
        return note;
    }
    else{
        console.log('duplciate note found');
        return undefined;
    }
}

var listtAllNotes = () => {  

    
}

var removeNote = (title) => {
    var notes = getNotesFromfile('./playground/notes.json');
    var newNotes = notes.filter(x => x.title !== title);
    if(notes.length === newNotes.length){
        console.log('note not found');
        return undefined;
    }
    else{
        saveNotesToFile(newNotes);
        return true;
    }
}

var fetchNote = (title) => {
    var notes = getNotesFromfile('./playground/notes.json');
    var serachResults = notes.filter(note => note.title === title);
    if(serachResults.length > 0){
        return serachResults;
    }
    else{
        console.log('no matching note found');
    }
    
}

module.exports = {
    addNote,
    listtAllNotes,
    removeNote,
    fetchNote
}