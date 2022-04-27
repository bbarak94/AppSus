
export function NotePreviewImg({note}){
   const {info} = note
   return <div className="note-preview note-preview-img">
   <h1>i'm img</h1>
   <h1>i have title: {info.title}</h1>
   <div className='note-preview-img-container'>
   <img src={info.url}></img>
   </div>
   </div>
}