const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//console.log(process.argv);

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
    handler: function(argv)
    {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body)
    } 
})
yargs.parse();
//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function()
    {
        console.log('Remove a note');
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function()
    {
        console.log('Listing notes');
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Reading notes',
    handler: function()
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