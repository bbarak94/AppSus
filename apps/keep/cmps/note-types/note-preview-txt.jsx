
export function NotePreviewTxt({note}){
   return <div className="note-preview note-preview-txt">
   <h1>Title: {note.info.title}</h1>
   <h1>Text: {note.info.txt}</h1>
   </div>
}