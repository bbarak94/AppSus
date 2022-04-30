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
        const { note, style } = this.state
        const { backgroundColor } = this.state.style
        const { onTogglePin } = this.props
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
                <div className='details-buttons flex '>
                    {!note.isPinned && (
                        <div className='icon-details-container tooltip tooltip-revmove-pin flex justify-center align-center'>
                            <img
                                onClick={onTogglePin}
                                className='keep-icon-details revmove-pin-icon'
                                src='assets\img\keep\unpin.svg'
                                data-id={note.id}
                            />
                            <span className='tooltiptext tooltiptext-new-note'>
                                Pin
                            </span>
                        </div>
                    )}
                    {note.isPinned && (
                        <div className='icon-details-container tooltip tooltip-revmove-pin flex justify-center align-center'>
                            <img
                                onClick={onTogglePin}
                                className='keep-icon-prev revmove-pin-icon'
                                src='assets\img\keep\pin.svg'
                                data-id={note.id}
                            />
                            <span className='tooltiptext tooltiptext-pin'>
                                Remove Pin
                            </span>
                        </div>
                    )}
                    {/* <button onClick={this.props.onRemoveNote}>Remove</button> */}
                    <div className='icon-details-container tooltip tooltip-remove flex justify-center align-center'>
                        <img
                            onClick={this.props.onRemoveNote}
                            className='keep-icon-details remove-icon'
                            src='assets\img\keep\remove-note.svg'
                            data-id={note.id}
                        />
                        <span className='tooltiptext tooltiptext-remove'>
                            Delete Note
                        </span>
                    </div>

                    <div className='icon-details-container tooltip tooltip-revmove-pin flex justify-center align-center'>
                        <input
                            onChange={this.onColorChange}
                            id='note-color'
                            type='color'
                            name='note-color'
                            value={style.backgroundColor}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

{
    /* <button
onClick={onTogglePin}
className='pin-button not-pinned'
data-id={this.state.note.id}
>
Pin
</button> */
}

{
    /* <button
onClick={onTogglePin}
className='pin-button pinned'
data-id={this.state.note.id}
>
UnPin
</button> */
}
