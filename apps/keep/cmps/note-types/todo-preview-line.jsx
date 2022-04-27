

export function TodoPreviewLine({todo}){
   const {id, txt, doneAt} = todo
   return <div className="note-preview note-preview-todo flex space-between">
   <div className="todo-undone">
   <img className="todo-undone-img" src="assets\img\keep\todo-undone.svg"></img>
   </div>
   <div className="todo-done">
   <img className="todo-done-img" src="assets\img\keep\todo-done.svg"></img>
   </div>
   <h1>i have txt: {txt}</h1>
   </div>
}