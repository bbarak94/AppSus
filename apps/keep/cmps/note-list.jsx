import { NotePreview } from './note-preview.jsx'

export class NoteList extends React.Component {
    render() {
        const {
            notes,
            onSelectNote,
            onTogglePin,
            onDuplicateNote,
            onRemoveNote,
        } = this.props
        return (
            <div className='lists-container'>
                <h1 className='pin-title flex justify-center'>
                <div className="note-list-pin">
                <img src='assets\img\keep\pin.svg' />
                   </div>             
                Pinned Notes
                   <div className="note-list-pin">
                <img src='assets\img\keep\pin.svg' />
                   </div>      
                :
                </h1>
                <section className='note-list grid'>
                    {notes.map(
                        (note) =>
                            note.isPinned && (
                                <NotePreview
                                    mailNote={this.props.mailNote}
                                    onRemoveNote={onRemoveNote}
                                    onColorPrevChange={
                                        this.props.onColorPrevChange
                                    }
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

                <h1 className='pin-title flex justify-center'>
                   <div className="note-list-pin">
                <img src='assets\img\keep\unpin.svg' />
                   </div>             
                Non-Pinned Notes
                   <div className="note-list-pin">
                <img src='assets\img\keep\unpin.svg' />
                   </div>             
                :
                </h1>
                <section className='note-list grid'>
                    {notes.map(
                        (note) =>
                            !note.isPinned && (
                                <NotePreview
                                    mailNote={this.props.mailNote}
                                    onRemoveNote={onRemoveNote}
                                    onColorPrevChange={
                                        this.props.onColorPrevChange
                                    }
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
