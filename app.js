const yargs = require('yargs')
const fs = require('fs')
const note= require('./note')

// To call using command Ex. node app.js add --title="Buy" --body="Note body here"
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
        note.addNote(argv.title,argv.body)
    }
})

// To call using command Ex. node app.js list  
yargs.command({
    command: 'list',
    describe: 'Show all notes',
    handler: function () {
        note.listNotes()
    }
})
// To call using command Ex. node app.js read --title="Buy"
yargs.command({
    command: 'read',
    describe: 'Read a Title',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        note.readList(argv.title)
    }
})

// To call using command Ex. node app.js remove --title="Buy" 
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        note.remove(argv.title)
    }
})

// To call using command Ex. node app.js removeAll
yargs.command({
    command: 'removeAll',
    describe: 'Remove all notes',
    builder: {
    },
    handler: function () {
        note.removeAll()
    }
})

console.log(yargs.argv)