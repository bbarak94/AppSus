import {NotePreview} from './note-preview.jsx'

// export function NoteList({notes}){
//    return <section className="note-list flex space-between">
//    {notes.map(note => <NotePreview note={note} key={note.id}/>)}
//    </section>
// }

export class NoteList extends React.Component{

render(){
   const {notes, onSelectNote} = this.props
   // if(!notes) return <div>Loading...</div>
   // console.log('notes:',notes)
   return <section className="note-list flex space-between">
   {notes.map(note => <NotePreview note={note} key={note.id} onSelectNote={onSelectNote}/>)}
   </section>
}
}