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
        console.log('note:',note)
        console.log('note.id:',note.id)
        noteService.replaceNote(note).then((notes) => this.setState({notes}))
    }

    onSelectNote = (noteId) =>{
        console.log('noteId:',noteId)
        noteService.getById(noteId).then((selectedNote) => this.setState({selectedNote}))
    }

    onDeSelect = () => {
        this.setState({selectedNote: null})
    }



    render() {
        const { notes, selectedNote } = this.state
        return (
            <section className='keep-app'>
                <KeepHeader />
                <NoteList notes={notes} onSelectNote={this.onSelectNote} />
                {(selectedNote) && <NoteDetails onDeSelect={this.onDeSelect} updateNote={this.updateNote} note={selectedNote}/>}
            </section>
        )
    }
}
