import {NotePreview} from './note-preview.jsx'

// export function NoteList({notes}){
//    return <section className="note-list flex space-between">
//    {notes.map(note => <NotePreview note={note} key={note.id}/>)}
//    </section>
// }

export function NoteList({notes}){

   return <section className="note-list flex space-between">
   {notes.map(note => <NotePreview note={note} key={note.id}/>)}
   </section>
}