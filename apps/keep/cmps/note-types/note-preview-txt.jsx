
export function NotePreviewTxt({note}){
   return <div className="note-preview note-preview-txt">
   <h1>i'm txt</h1>
   <h1>i have title: {note.info.title}</h1>
   <h1>i have txt: {note.info.txt}</h1>
   </div>
}