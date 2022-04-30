import { NoteDetailsTxt } from './note-types/note-details-txt.jsx'
import { NoteDetailsTodos } from './note-types/note-details-todos.jsx'
import { NoteDetailsImg } from './note-types/note-details-img.jsx'
import { NoteDetailsVid } from './note-types/note-details-vid.jsx'

export class NoteDetails extends React.Component {
    state = {
        note: this.props.note,
        type: this.props.note.type,
        id: this.props.note.type,
        style: {
            backgroundColor: this.props.note.style.backgroundColor,
        },
    }

    onReRenderNote = (note) => {
        this.setState({ note: note })
    }

    onUpdateNote = (note) => {
        this.props.updateNote(note)
    }
    onColorChange = (ev) => {
        var newNote = this.state.note
        newNote.style.backgroundColor = ev.target.value
        this.setState({
            note: newNote,
            style: {
                backgroundColor: ev.target.value,
            },
        })
    }
    render() {
        const { note,style } = this.state
        const { backgroundColor } = this.state.style
        const {onTogglePin} = this.props
        return (
            <div
                className='note-details'
                style={{ backgroundColor: this.state.style.backgroundColor }}
            >
                {this.state.type === 'note-txt' && (
                    <NoteDetailsTxt
                        backgroundColor={backgroundColor}
                        onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                {this.state.type === 'note-todos' && (
                    <NoteDetailsTodos
                        backgroundColor={backgroundColor}
                        onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                {this.state.type === 'note-img' && (
                    <NoteDetailsImg
                        backgroundColor={backgroundColor}
                        onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                {this.state.type === 'note-vid' && (
                    <NoteDetailsVid
                        backgroundColor={backgroundColor}
                        onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                {!note.isPinned && (
                        <button
                            onClick={onTogglePin}
                            className='pin-button not-pinned'
                            data-id={this.state.note.id}
                        >
                            Pin
                        </button>
                    )}
                    {note.isPinned && (
                        <button
                            onClick={onTogglePin}
                            className='pin-button pinned'
                            data-id={this.state.note.id}
                        >
                            UnPin
                        </button>
                    )}
                <button onClick={this.props.onRemoveNote}>Remove</button>
                <label>Color:</label>
                <input
                    onChange={this.onColorChange}
                    id='note-color'
                    type='color'
                    name='note-color'
                    value={style.backgroundColor}
                />
            </div>
        )
    }
}
