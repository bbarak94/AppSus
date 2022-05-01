
export function NotePreviewTxt({note}){
   return <div className="note-preview note-preview-txt">
   <h1 className="note-prev-title">{note.info.title}</h1>
   <pre className="note-prev-txt">{note.info.txt}</pre>
   </div>
}