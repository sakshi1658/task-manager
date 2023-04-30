//const chalk = require('chalk')
//import ansiStyles from 'ansi-styles'
//const validator = require('validator')
const notes = require('./notes.js')
const yargs = require('yargs')

//const msg = getNotes()
//console.log(msg)
// using packages

//console.log(validator.isEmail('sakshi@gmail.com'))
//console.log(validator.isURL('https://aktu.in'))

//const getMsg = chalk.green.bold('Success!')
//console.log(getMsg)

const command = process.argv[2]

console.log(process.argv)

if (command === 'add'){
    console.log('Adding Note!')
}else if (command === 'remove'){
    console.log('Removing Note!')
}

//customize yargs version
yargs.version('1.1.0')

//create add  command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe: 'Note Body!',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        //console.log('Title:'+ argv.title)
        //
        //console.log('Body:' + argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
     
    },
    handler(argv) {
       // console.log('Removing the note')
       notes.removeNote(argv.title)
    }
})

//create read  command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler() {
        console.log('Reading a new note!')
    }
})

//create list  command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        //console.log('Listing out all notes')
        notes.listNotes()
    }
})
//add, remove, read, list 

yargs.parse()


//console.log(yargs.argv)




