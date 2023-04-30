const fs = require('fs')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title )

    // const duplicateNotes = notes.filter (function(note){
    //  return note.title === title
    //})

    if(duplicateNotes.length === 0) {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else{
        console.log('Note title taken!')
    }

    
}
const removeNote =(title) => {
     const notes = loadNotes()
     const notesToKeep = notes.filter((note) => note.title !== title)
     saveNotes(notesToKeep)
}

const listNotes = () =>{
    const notes = loadNotes()

    console.log('your notes')

    notes.foreach ((note) => {
        console.log(note.title)
    })


}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}

module.exports ={
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes
}
