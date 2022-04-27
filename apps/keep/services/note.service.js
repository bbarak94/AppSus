import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

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
            info: { url: 'http://some-img/me', title: 'Bobi and Me' },
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
        },
    ]

    return notes
}
