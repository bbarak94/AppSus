
export function NotePreviewTxt({note}){
   return <div className="note-preview note-preview-txt">
   <h1 className="note-prev-title">{note.info.title}</h1>
   <pre>{note.info.txt}</pre>
   </div>
}