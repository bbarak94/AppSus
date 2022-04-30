import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteDetails } from '../cmps/note-details.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'

import { eventBusService } from '../../../services/event-bus-service.js'
export class KeepApp extends React.Component {
    state = {
        notes: [],
        filterBy: null,
        selectedNote: null,
    }

    componentDidMount() {
        this.loadNotes()
        eventBusService.emit('selectedPage', 'keep')
    }

    loadNotes = () => {
        noteService
            .query(this.state.filterBy)
            .then((notes) => this.setState({ notes }))
    }

    updateNote = (note) => {
        noteService
            .replaceNote(note)
            .then((notes) =>
                this.setState({ notes: notes, selectedNote: null })
            )
    }

    onDeSelectNote = () => {
        this.setState({ selectedNote: null })
    }

    onSelectNote = (noteId) => {
        noteService
            .getById(noteId)
            .then((selectedNote) => this.setState({ selectedNote }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadNotes()
        })
    }

    onRemoveNote = (ev) => {
        if (!this.state.selectedNote) {
            noteService.remove(ev.target.dataset.id).then(() => {
                this.loadNotes()
                this.onSelectNote(null)
            })
        } else {
            noteService.remove(this.state.selectedNote.id).then(() => {
                this.loadNotes()
                this.onSelectNote(null)
            })
        }
    }

    mailNote = (ev) => {
        ev.stopPropagation()
        ev.preventDefault()
        // console.log('ev.target.dataset.id:', ev.target.dataset.id)
        var noteId = ev.target.dataset.id
        // console.log('noteId:',noteId)        
        noteService.sendNote(noteId)        
    }

    onAddNote = (ev) => {
        var noteType = ev.target.dataset.type
        noteService.createNote(noteType).then((newNoteId) => {
            this.loadNotes()
            this.onSelectNote(newNoteId)
        })
    }

    onColorPrevChange = (state) => {
        console.log('state:', state)
        noteService
            .changeColor(state.note.id, state.backgroundColor)
            .then(() => {
                this.loadNotes()
                this.onSelectNote(null)
            })
    }

    onTogglePin = (ev) => {
        ev.stopPropagation()
        var noteId = ev.target.dataset.id
        noteService.togglePin(noteId).then(() => {
            this.loadNotes()
            this.onSelectNote(null)
        })
    }

    onDuplicateNote = (ev) => {
        ev.stopPropagation()
        var noteId = ev.target.dataset.id
        noteService.duplicateNote(noteId).then(() => {
            this.loadNotes()
        })
    }

    render() {
        const { notes, selectedNote } = this.state
        return (
            <section className='keep-app'>
                <NoteFilter
                    onAddNote={this.onAddNote}
                    onSetFilter={this.onSetFilter}
                />
                <NoteList
                    mailNote={this.mailNote}
                    onRemoveNote={this.onRemoveNote}
                    onColorPrevChange={this.onColorPrevChange}
                    onTogglePin={this.onTogglePin}
                    onDuplicateNote={this.onDuplicateNote}
                    notes={notes}
                    onSelectNote={this.onSelectNote}
                    updateNote={this.updateNote}
                />
                {selectedNote && (
                    <NoteDetails
                        onDeSelectNote={this.onDeSelectNote}
                        onTogglePin={this.onTogglePin}
                        onDuplicateNote={this.onDuplicateNote}
                        changeColor={this.changeColor}
                        onRemoveNote={this.onRemoveNote}
                        updateNote={this.updateNote}
                        note={selectedNote}
                    />
                )}
            </section>
        )
    }
}
