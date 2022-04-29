import { NotePreview } from './note-preview.jsx'

export class NoteList extends React.Component {
    render() {
        const { notes, onSelectNote, onTogglePin, onDuplicateNote } = this.props
        return (
            <div>
                <h1 className='flex justify-center'>Pinned Notes</h1>
                <section className='note-list grid'>
                    {notes.map(
                        (note) =>
                            note.isPinned && (
                                <NotePreview
                                    onTogglePin={onTogglePin}
                                    onDuplicateNote={onDuplicateNote}
                                    note={note}
                                    key={note.id}
                                    onSelectNote={onSelectNote}
                                    updateNote={this.props.updateNote}
                                />
                            )
                    )}
                </section>

                <h1 className='flex justify-center'>Non-Pinned Notes</h1>
                <section className='note-list grid'>
                    {notes.map(
                        (note) =>
                            !note.isPinned && (
                                <NotePreview
                                    onTogglePin={onTogglePin}
                                    onDuplicateNote={onDuplicateNote}
                                    note={note}
                                    key={note.id}
                                    onSelectNote={onSelectNote}
                                    updateNote={this.props.updateNote}
                                />
                            )
                    )}
                </section>
            </div>
        )
    }
}

// render(){
//    const {notes, onSelectNote} = this.props
//    // if(!notes) return <div>Loading...</div>
//    // console.log('notes:',notes)
//    // return <section className="note-list flex">
//    return <section className="note-list grid">
//    {notes.map(note => <NotePreview note={note} key={note.id} onSelectNote={onSelectNote} updateNote={this.props.updateNote}/>)}
//    </section>
// }
// }
