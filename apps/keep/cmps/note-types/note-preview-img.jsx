export function NotePreviewImg({note}){
   const {info} = note
   return <div className="note-preview note-preview-img">
   <h1>Title: {info.title}</h1>
   <div className='note-preview-img-container'>
   <img className="preview-img" src={info.url}></img>
   </div>
   </div>
}