import { NotePreview } from './note-preview.jsx'

export class NoteList extends React.Component {
    render() {
        const { notes, onSelectNote, onTogglePin, onDuplicateNote,onRemoveNote } = this.props
        return (
            <div className='lists-container'>
                <h1 className='flex justify-center'>Pinned Notes</h1>
                <section className='note-list grid'>
                    {notes.map(
                        (note) =>
                            note.isPinned && (
                                <NotePreview
                                onRemoveNote={onRemoveNote}
                                onColorPrevChange={this.props.onColorPrevChange}
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
                                onRemoveNote={onRemoveNote}
                                onColorPrevChange={this.props.onColorPrevChange}
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