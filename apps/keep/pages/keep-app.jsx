import { KeepHeader } from '../cmps/keep-header.jsx'
import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteDetails } from '../cmps/note-details.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'

export class KeepApp extends React.Component {
    state = {
        notes: [],
        filterBy: null,
        selectedNote: null,
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService
            .query(this.state.filterBy)
            .then((notes) => this.setState({ notes }))
    }

    updateNote = (note) => {
        // console.log('from keep-app: note.style.backgroundColor:',note.style.backgroundColor)
        
        noteService
            .replaceNote(note)
            .then((notes) =>
                this.setState({ notes: notes, selectedNote: null })
            )
        // console.log('this.state:', this.state)
    }

    onSelectNote = (noteId) => {
        // console.log('noteId:', noteId)
        noteService
            .getById(noteId)
            .then((selectedNote) => this.setState({ selectedNote }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            // console.log('filterBy from Keep App', this.state.filterBy)
            this.loadNotes()
        })
    }

    onRemoveNote = () => {
        // console.log('remove note:', this.state.selectedNote)
        noteService.remove(this.state.selectedNote.id).then(() => {
            this.loadNotes()
            this.onSelectNote(null)
        })
    }

    onAddNote = (ev) => {
        // console.log('ev.target.dataset.type:', ev.target.dataset.type)
        var noteType = ev.target.dataset.type
        noteService.createNote(noteType).then((newNoteId) => {
            this.loadNotes()
            this.onSelectNote(newNoteId)
        })
    }

    changeColor = (newColor) => {
        // console.log('newColor:', newColor)
    }

    // onDeSelect = () => {
    //     this.setState({selectedNote: null})
    // }
    // onDeSelect={this.onDeSelect}

    render() {
        const { notes, selectedNote } = this.state
        return (
            <section className='keep-app'>
                <KeepHeader />
                <NoteFilter
                    onAddNote={this.onAddNote}
                    onSetFilter={this.onSetFilter}
                />
                <NoteList
                    notes={notes}
                    onSelectNote={this.onSelectNote}
                    updateNote={this.updateNote}
                />
                {selectedNote && (
                    <NoteDetails
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
