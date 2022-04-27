import { KeepHeader } from '../cmps/keep-header.jsx'
import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'

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

    render() {
        const { notes } = this.state
        return (
            <section className='keep-app'>
                <KeepHeader />
                <NoteList notes={notes} />
            </section>
        )
    }
}
