const fs = require('fs')
const chalk = require('chalk');

const addNote=(title,body)=>{
    const notes= loadNotes()
    const duplicateNotes= notes.find((note)=>note.title=== title)

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added!!'));
    }else{
        console.log(chalk.red.inverse('Note Title Taken!!'));
    }
}

const listNotes=()=>{
    console.log(chalk.inverse('ALL Notes'));
    const notes= loadNotes()

    if(notes){
        notes.forEach(note => {
            console.log(note.title,note.body)
        });
    }{
        console.log(chalk.inverse('No Notes Avaible!! '));
    }
    

}

const readList=(title)=>{
    console.log(chalk.inverse('Title: '+title));
    const notes= loadNotes()
    const note=  notes.find((note)=> note.title=== title)
    
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(chalk.inverse(note.body));
    }else{
        console.log(chalk.red.inverse('note not found!'));
    }
    
}

const remove=(title)=>{
    console.log(chalk.inverse('Title: '+title));
    const notes= loadNotes()
    const findNote= notes.find((note)=>note.title== title)
    
    if(findNote){
        const note=  notes.filter((note)=> note.title!== title);
        saveNotes(note);
    }else{
        console.log(chalk.inverse("No Notes Found With This Title" ));
    } 
}

const removeAll=()=>{
    saveNotes([])
    console.log(chalk.red.inverse('Remove ALL Notes:'));
    
}

const saveNotes= (notes)=>{
    const dataJson= JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes=()=>{
    try{
        const dataBuffer= fs.readFileSync('notes.json')
        console.log(dataBuffer);
        const dataJson= dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }
}

module.exports={
    addNote:addNote,
    listNotes:listNotes,
    readList:readList,
    remove:remove,
    removeAll:removeAll
}