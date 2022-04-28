import { KeepHeader } from '../cmps/keep-header.jsx'
import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteDetails } from '../cmps/note-details.jsx'

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
        console.log('FROM keep-app - note:', note)
        noteService
            .replaceNote(note)
            .then((notes) =>
                this.setState({ notes: notes, selectedNote: null })
            )
        console.log('this.state:', this.state)
    }

    onSelectNote = (noteId) => {
        console.log('noteId:', noteId)
        noteService
            .getById(noteId)
            .then((selectedNote) => this.setState({ selectedNote }))
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
                <NoteList notes={notes} onSelectNote={this.onSelectNote} updateNote={this.updateNote} />
                {selectedNote && (
                    <NoteDetails
                        updateNote={this.updateNote}
                        note={selectedNote}
                    />
                )}
            </section>
        )
    }
}
