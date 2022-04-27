import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'


export const noteService = {
    query
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
    }

    return Promise.resolve(notes)
}

function getById(noteId) {
    const notes = _loadFromStorage()
    const note = notes.find((note) => noteId === note.id)
    return Promise.resolve(note)
}

function _saveToStorage(notes) {
    console.log('notes saved to storage:', notes)
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _createNotes() {
    const notes = [
        {
            id: 'n101',
            type: 'note-txt',
            isPinned: false,
            info: { title: 'barak is the king!',txt: 'Fullstack Me Baby!' },
            style: { backgroundColor: '#00d' },
        },
        {
            id: 'n102',
            type: 'note-img',
            isPinned: false,
            info: { url: 'https://media.istockphoto.com/photos/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-picture-id1154370446?k=20&m=1154370446&s=612x612&w=0&h=2AWvof66ovB87P3b7C_cu0pCZlZhDDFYUFr2KQ2UnwQ=', title: 'Bobi and Me' },
            style: { backgroundColor: '#00d' },
        },
        {
            id: 'n103',
            type: 'note-todos',
            isPinned: false,
            info: {
               title: 'Must do fast',
               label: 'Get my stuff together',
                todos: [
                    { id: 't101', txt: 'Driving liscence', doneAt: null },
                    { id: 't102', txt: 'Coding power', doneAt: 187111111 },
                ],
            },
        },{
            id: 'n104',
            type: 'note-txt',
            isPinned: false,
            info: { title: 'barak is the king!',txt: 'Fullstack Me Baby!' },
            style: { backgroundColor: '#00d' },
        },
        {
            id: 'n105',
            type: 'note-img',
            isPinned: false,
            info: { url: 'https://media.istockphoto.com/photos/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-picture-id1154370446?k=20&m=1154370446&s=612x612&w=0&h=2AWvof66ovB87P3b7C_cu0pCZlZhDDFYUFr2KQ2UnwQ=', title: 'Bobi and Me' },
            style: { backgroundColor: '#00d' },
        },
        {
            id: 'n106',
            type: 'note-todos',
            isPinned: false,
            info: {
               title: 'Must do fast',
               label: 'Get my stuff together',
                todos: [
                    { id: 't103', txt: 'Driving liscence', doneAt: null },
                    { id: 't104', txt: 'Coding power', doneAt: 187111111 },
                ],
            },
        },{
            id: 'n107',
            type: 'note-txt',
            isPinned: false,
            info: { title: 'barak is the king!',txt: 'Fullstack Me Baby!' },
            style: { backgroundColor: '#00d' },
        },
        {
            id: 'n108',
            type: 'note-img',
            isPinned: false,
            info: { url: 'https://media.istockphoto.com/photos/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-picture-id1154370446?k=20&m=1154370446&s=612x612&w=0&h=2AWvof66ovB87P3b7C_cu0pCZlZhDDFYUFr2KQ2UnwQ=', title: 'Bobi and Me' },
            style: { backgroundColor: '#00d' },
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
        }
    ]

    return notes
}
