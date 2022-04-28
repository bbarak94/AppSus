import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    getById,
    replaceNote,
    remove,
    createNote,
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
            } else if (note.type === 'note-img') {
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

function remove(noteId) {
    var notes = _loadFromStorage()
    notes = notes.filter((note) => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function replaceNote(noteToUpdate) {
    console.log('noteToUpdate:', noteToUpdate)
    let notes = _loadFromStorage()
    notes = notes.map((note) => {
        // console.log('noteToUpdate:', noteToUpdate)
        // console.log('note.id:', note.id)
        return note.id === noteToUpdate.id ? noteToUpdate : note
    })
    console.log('notes:', notes)

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
                url: 'https://media.istockphoto.com/photos/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-picture-id1154370446?k=20&m=1154370446&s=612x612&w=0&h=2AWvof66ovB87P3b7C_cu0pCZlZhDDFYUFr2KQ2UnwQ=',
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
                    { id: 't101', txt: 'Ready to give it a try?', doneAt: null },
                    { id: 't102', txt: 'To give it a try', doneAt: 187111111 },
                ],
            },
            style: { backgroundColor: '#61BD4F' },

        },
        {
            id: 'n104',
            type: 'note-txt',
            isPinned: false,
            info: { title: 'The whole app mad with React.', txt: 'You can try it on you phone too!' },
            style: { backgroundColor: '#F2D600' },
        },
        {
            id: 'n105',
            type: 'note-img',
            isPinned: false,
            info: {
                url: 'https://media.istockphoto.com/photos/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-picture-id1154370446?k=20&m=1154370446&s=612x612&w=0&h=2AWvof66ovB87P3b7C_cu0pCZlZhDDFYUFr2KQ2UnwQ=',
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
            isPinned: false,
            info: {
                url: 'https://media.istockphoto.com/photos/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-picture-id1154370446?k=20&m=1154370446&s=612x612&w=0&h=2AWvof66ovB87P3b7C_cu0pCZlZhDDFYUFr2KQ2UnwQ=',
                title: 'Bobi and Me',
            },
            style: { backgroundColor: '#eb5a46' },
        },
        {
            id: 'n109',
            type: 'note-todos',
            isPinned: false,
            info: {
                title: 'Must do fast',
                label: 'Get my stuff together',
                todos: [
                    { id: 't105', txt: 'Driving liscence', doneAt: null },
                    { id: 't106', txt: 'Coding power', doneAt: 187111111 },
                ],
            },
            style: { backgroundColor: '#0079BF' },

        },
    ]

    return notes
}
