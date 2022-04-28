import { NotePreviewTxt } from './note-types/note-preview-txt.jsx'
import { NotePreviewTodos } from './note-types/note-preview-todos.jsx'
import { NotePreviewImg } from './note-types/note-preview-img.jsx'

// Later:
// import {NotePreviewVideo} from './note-types/note-preview-video.jsx'

// Advanced Features:
// import {NotePreviewAudio} from './note-types/note-preview-audio.jsx'
// import {NotePreviewCanvas} from './note-types/note-preview-canvas.jsx'
// import {NotePreviewMap} from './note-types/note-preview-map.jsx'

export function NotePreview({ note, onSelectNote, updateNote }) {
    return (
        <div onClick={() => onSelectNote(note.id)} className='note-preview-container'>
            {note.type === 'note-txt' && <NotePreviewTxt note={note} />}
            {note.type === 'note-todos' && <NotePreviewTodos note={note} updateNote={updateNote}/>}
            {note.type === 'note-img' && <NotePreviewImg note={note} />}
        </div>
    )
}
