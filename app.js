const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.addNote(argv.title, argv.body);
    } 
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.removeNote(argv.title);
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler()
    {
        notes.listNotes();
    }
})

yargs.parse();

//create read command
yargs.command({
    command: 'read',
    describe: 'Reading notes',
    handler()
    {
        console.log('Reading notes');
    }
})


//console.log(yargs.argv);




















/*
var msg = getNotes();
console.log(msg);

const greenMsg = chalk.green.inverse.bold('Success!');
console.log(greenMsg);
*/