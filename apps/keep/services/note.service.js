import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    getById,
    replaceNote,
    remove,
    createNote,
    togglePin,
    duplicateNote,
    removeTodo,
    changeColor,
    sendNote
}

const KEY = 'keepDB'

function query(filterBy) {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = _createNotes()
        _saveToStorage(notes)
    }
    if (filterBy) {
        console.log('filterBy:', filterBy)
        let { title, txt } = filterBy
        notes = notes.filter((note) => {
            if (note.type === 'note-txt') {
                return (
                    note.info.txt.toLowerCase().includes(txt.toLowerCase()) &&
                    note.info.title.toLowerCase().includes(title.toLowerCase())
                )
            } else if (note.type === 'note-img' || note.type === 'note-vid') {
                return (
                    note.info.title
                        .toLowerCase()
                        .includes(title.toLowerCase()) && !txt
                )
            } else if (
                note.type === 'note-todos' &&
                note.info.todos.length > 0
            ) {
                if (!note.info.todos.length) return
                return (
                    note.info.title
                        .toLowerCase()
                        .includes(title.toLowerCase()) &&
                    note.info.todos.some((todo) =>
                        todo.txt.toLowerCase().includes(txt.toLowerCase())
                    )
                )
            }
        })
    }

    return Promise.resolve(notes)
}

function getById(noteId) {
    const notes = _loadFromStorage()
    const note = notes.find((note) => noteId === note.id)
    return Promise.resolve(note)
}

function sendNote(noteId){
    const notes = _loadFromStorage()
    const note = notes.find((note) => note.id === noteId)
    // console.log('note:',note)
    
    var subject = note.info.title
    var newMail = {
        subject: note.info.title,
        body:''
    }
    if (note.type==='note-txt'){
        newMail.body = note.info.txt
        
    }else if (note.type==='note-todos'){
        var body = `todos:`
        note.info.todos.map((note,idx) =>{
            body+= `\n ${idx+1} ${note.txt}`

        })
        
        newMail.body = note.info.todos.join('')
        
    }else if (note.type==='note-img'){
        newMail.body = note.info.url        
    }else if (note.type==='note-vid'){
        newMail.body = note.info.url        
    }
    
    var searchStr = `/email/compose?subject=${subject}&body=${newMail.body}`
    console.log('searchStr:',searchStr)
    
  

}

function remove(noteId) {
    var notes = _loadFromStorage()
    notes = notes.filter((note) => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function removeTodo(noteId, todoId) {
    var notes = _loadFromStorage()
    var note = notes.find((note) => noteId === note.id)
    var todos = note.info.todos
    todos = todos.filter((todo) => todo.id !== todoId)
    note.info.todos = todos
    _saveToStorage(notes)
    return Promise.resolve(note)
}
function togglePin(noteId) {
    var notes = _loadFromStorage()
    var selectedNote = notes.find((note) => noteId === note.id)
    selectedNote.isPinned = !selectedNote.isPinned
    notes = notes.filter((note) => note.id !== noteId)
    notes.unshift(selectedNote)
    _saveToStorage(notes)
    return Promise.resolve()
}

function changeColor(noteId, newColor) {
    var notes = _loadFromStorage()
    var selectedNote = notes.find((note) => noteId === note.id)
    selectedNote.style.backgroundColor = newColor
    _saveToStorage(notes)
    return Promise.resolve()
}

function duplicateNote(noteId) {
    var notes = _loadFromStorage()
    var selectedNote = notes.find((note) => noteId === note.id)
    selectedNote = { ...selectedNote }
    selectedNote.id = utilService.makeId()
    notes.unshift(selectedNote)
    _saveToStorage(notes)
    return Promise.resolve()
}

function replaceNote(noteToUpdate) {
    let notes = _loadFromStorage()
    notes = notes.map((note) => {
        return note.id === noteToUpdate.id ? noteToUpdate : note
    })

    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function createNote(noteType) {
    var info
    if (noteType === 'note-txt') info = { title: '', txt: '' }
    else if (noteType === 'note-img') info = { title: '', url: '' }
    else if (noteType === 'note-vid') info = { title: '', url: '' }
    // else if (noteType === 'note-vid') info = { title: '', url: 'https://www.youtube.com/embed/'}
    else if (noteType === 'note-todos') {
        info = {
            title: '',
            todos: [{ id: utilService.makeId(), txt: '', doneAt: null }],
        }
    }
    var newNote = {
        id: utilService.makeId(),
        type: noteType,
        isPinned: false,
        label: null,
        info: info,
        style: { backgroundColor: '#ffffff' },
    }
    var notes = _loadFromStorage()
    notes.unshift(newNote)
    _saveToStorage(notes)

    return Promise.resolve(newNote.id)
}

function _createNotes() {
    const notes = [
        {
            id: 'n100',
            type: 'note-vid',
            isPinned: false,
            info: {
                url: 'https://www.youtube.com/embed/lhepKcJzDR0',
                title: 'You can save any youtube video you like',
            },
            style: { backgroundColor: '#FF9F1A' },
        },

        {
            id: 'n101',
            type: 'note-txt',
            isPinned: false,
            label: 'Get my stuff together',
            info: { title: 'Wellcome to Our App!', txt: 'By Barak and Itay!' },
            style: { backgroundColor: '#eb5a46' },
        },
        {
            id: 'n102',
            type: 'note-img',
            isPinned: false,
            label: 'Get my stuff together',
            info: {
                url: 'https://wallpaperaccess.com/full/86289.jpg',
                title: 'You can upload your images',
            },
            style: { backgroundColor: '#0079BF' },
        },
        {
            id: 'n103',
            type: 'note-todos',
            isPinned: false,
            label: 'Get my stuff together',
            info: {
                title: 'And manage your tasks',
                todos: [
                    {
                        id: 't101',
                        txt: 'Ready to give it a try?',
                        doneAt: null,
                    },
                    { id: 't102', txt: 'To give it a try', doneAt: 187111111 },
                ],
            },
            style: { backgroundColor: '#61BD4F' },
        },
        {
            id: 'n104',
            type: 'note-txt',
            isPinned: false,
            info: {
                title: 'The whole app mad with React.',
                txt: 'You can try it on you phone too!',
            },
            style: { backgroundColor: '#F2D600' },
        },
        {
            id: 'n105',
            type: 'note-img',
            isPinned: false,
            info: {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgoK5LK150O1AzpX7dV4yfw9Zm-nLXtwTyA&usqp=CAUhttps://media.istockphoto.com/photos/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-picture-id1154370446?k=20&m=1154370446&s=612x612&w=0&h=2AWvof66ovB87P3b7C_cu0pCZlZhDDFYUFr2KQ2UnwQ=',
                title: 'Bobi and Me',
            },
            style: { backgroundColor: '#FF9F1A' },
        },

        {
            id: 'n106',
            type: 'note-todos',
            isPinned: false,
            label: 'Get my stuff together',
            info: {
                title: 'Must do fast',
                todos: [
                    { id: 't103', txt: 'Driving liscence', doneAt: null },
                    { id: 't104', txt: 'Coding power', doneAt: 187111111 },
                ],
            },
            style: { backgroundColor: '#C377E0' },
        },
        {
            id: 'n107',
            type: 'note-txt',
            isPinned: false,
            info: { title: 'barak is the king!', txt: 'Fullstack Me Baby!' },
            style: { backgroundColor: '#0098B7' },
        },
        {
            id: 'n108',
            type: 'note-img',
            isPinned: true,
            info: {
                url: 'https://media.istockphoto.com/photos/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-picture-id1154370446?k=20&m=1154370446&s=612x612&w=0&h=2AWvof66ovB87P3b7C_cu0pCZlZhDDFYUFr2KQ2UnwQ=',
                title: 'Welcome to our note-taking service! ',
            },
            style: { backgroundColor: '#eb5a46' },
        },
        {
            id: 'n109',
            type: 'note-todos',
            isPinned: true,
            info: {
                title: "Here's some tasks to help you start",
                label: 'Get my stuff together',
                todos: [
                    { id: 't105', txt: 'Unpin this note', doneAt: null },
                    {
                        id: 't106',
                        txt: 'Toggle between done tasks to undone',
                        doneAt: null,
                    },
                    { id: 't107', txt: 'Pin another note', doneAt: 187111111 },
                    { id: 't108', txt: 'Delete a note', doneAt: null },
                    {
                        id: 't109',
                        txt: 'Click a note to edit it',
                        doneAt: null,
                    },
                    {
                        id: 't110',
                        txt: 'Toggle between tasks from the main page',
                        doneAt: null,
                    },
                    {
                        id: 't111',
                        txt: "Add images and youtube videos by pasting their URL's",
                        doneAt: null,
                    },
                    { id: 't112', txt: 'Coding power', doneAt: null },
                ],
            },
            style: { backgroundColor: '#0079BF' },
        },
    ]

    return notes
}
