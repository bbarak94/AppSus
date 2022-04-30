import { NotePreviewTxt } from './note-types/note-preview-txt.jsx'
import { NotePreviewTodos } from './note-types/note-preview-todos.jsx'
import { NotePreviewImg } from './note-types/note-preview-img.jsx'
import { NotePreviewVid } from './note-types/note-preview-vid.jsx'

// Advanced Features:
// import {NotePreviewAudio} from './note-types/note-preview-audio.jsx'
// import {NotePreviewCanvas} from './note-types/note-preview-canvas.jsx'
// import {NotePreviewMap} from './note-types/note-preview-map.jsx'

export class NotePreview extends React.Component {
    state = {
        note: this.props.note,
        backgroundColor: this.props.note.style.backgroundColor,
    }

    clickedColor = (ev) => {
        ev.stopPropagation()
    }
    handleColorChange = (ev) => {
        ev.preventDefault()
        var newColor = ev.target.value
        var noteId = ev.target.dataset.id
        this.setState({ backgroundColor: ev.target.value }, () => {
            this.props.onColorPrevChange(this.state)
        })
    }
    render() {
        const {
            note,
            onSelectNote,
            updateNote,
            onTogglePin,
            onDuplicateNote,
            onRemoveNote,
        } = this.props

        return (
            <div
                style={{ backgroundColor: note.style.backgroundColor }}
                onClick={() => onSelectNote(note.id)}
                className='note-preview-container'
            >
                {note.type === 'note-txt' && <NotePreviewTxt note={note} />}
                {note.type === 'note-todos' && (
                    <NotePreviewTodos note={note} updateNote={updateNote} />
                )}
                {note.type === 'note-img' && <NotePreviewImg note={note} />}
                {note.type === 'note-vid' && <NotePreviewVid note={note} />}
                <div className='preview-buttons flex align-center justify-center'>
                    {!note.isPinned && (
                        <div className='icon-prev-container tooltip tooltip-revmove-pin flex justify-center align-center'>
                            <img
                                onClick={onTogglePin}
                                className='keep-icon-prev revmove-pin-icon'
                                src='assets\img\keep\unpin.svg'
                                data-id={note.id}
                            />
                            <span className='tooltiptext tooltiptext-new-note'>
                                Pin
                            </span>
                        </div>
                    )}
                    {note.isPinned && (
                        <div className='icon-prev-container tooltip tooltip-revmove-pin flex justify-center align-center'>
                            <img
                                onClick={onTogglePin}
                                className='keep-icon-prev revmove-pin-icon'
                                src='assets\img\keep\pin.svg'
                                data-id={note.id}
                            />
                            <span className='tooltiptext tooltiptext-new-note'>
                                Remove Pin
                            </span>
                        </div>
                    )}

                    <div className='icon-prev-container tooltip tooltip-duplicate flex justify-center align-center'>
                        <img
                            onClick={onDuplicateNote}
                            className='keep-icon-prev duplicate-icon'
                            src='assets\img\keep\duplicate.svg'
                            data-id={note.id}
                        />
                        <span className='tooltiptext tooltip-text-duplicate'>
                            Duplicate Note
                        </span>
                    </div>

                    <div className='icon-prev-container tooltip tooltip-remove flex justify-center align-center'>
                        <img
                            onClick={onRemoveNote}
                            className='keep-icon-prev remove-icon'
                            src='assets\img\keep\remove-note.svg'
                            data-id={note.id}
                        />
                        <span className='tooltiptext tooltip-text-remove'>
                            Delete Note
                        </span>
                    </div>

                    <input
                        onClick={this.clickedColor}
                        onChange={this.handleColorChange}
                        className='colorPrev-button'
                        id='note-color'
                        data-id={note.id}
                        type='color'
                        name='note-color'
                        value={note.style.backgroundColor}
                    />
                </div>
            </div>
        )
    }
}

// ;<button
//     onClick={onTogglePin}
//     className='pin-button not-pinned'
//     data-id={note.id}
// >
//     Pin
// </button>

// is pinned:
{
    /* <button
                            onClick={onTogglePin}
                            className='pin-button pinned'
                            data-id={note.id}
                        >
                            UnPin
                        </button> */
}

//     <button
//     onClick={onDuplicateNote}
//     className='duplicate-button'
//     data-id={note.id}
// >
//     Duplicate
// </button>

//     <button
//     onClick={onRemoveNote}
//     className='remove-button'
//     data-id={note.id}
// >
//     Remove
// </button>
