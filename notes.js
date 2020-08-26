const fs = require('fs')
const chalk = require('chalk');

const getNotes = () =>
{
    var notes = "Your notes..";
    return notes;
}

const addNote = (title, body) =>
{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
/*    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    }) */

    if(duplicateNotes.length === 0)
    {
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes);
        const greenMsg = chalk.green.inverse('New note added!');
        console.log(greenMsg);
    }
    else
    {
        const redMsg = chalk.red.inverse('Note title is taken!');
        console.log(redMsg);
    } 
}

const saveNotes = (notes) => 
{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => 
{
    try
    {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return [];
    }
}

const removeNote = (title) =>
{
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)
/*
    const notesToKeep = notes.filter(function(note)
    {
        return note.title !== title;
    }) */

    if(notes.length > notesToKeep.length)
    {
        saveNotes(notesToKeep);
        const greenMsg = chalk.green.inverse('Note removed!');
        console.log(greenMsg);
    }
    else if(notes.length === notesToKeep.length)
    {
        const redMsg = chalk.red.inverse('No note found!');
        console.log(redMsg);
    }
}

const listNotes = () =>
{
    const msg = chalk.inverse('Your Notes');
    console.log(msg);

    const notes = loadNotes()
    notes.array.forEach((note) => {
        console.log(note.title)
    });
    /*const notesList = notes.filter((note) => 
    {
        console.log(note.title);
        return true;
    })
  
    if(notesList.length === 0)
    {
        const redMsg = chalk.green.inverse('No notes added yet!');
        console.log(redMsg);
    } */
}


module.exports =
{
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes
}