import {TodoPreviewLine} from './todo-preview-line.jsx'


export function NotePreviewTodos({note}){
   const {info} = note
   const {todos} = info
   return <div className="note-preview note-preview-todos">
   <h1>Title: {info.title}</h1>
   <div className='todos-preview flex column'>
   {todos.map(todo => <TodoPreviewLine todo={todo} key={todo.id} />)}
   {/* <TodoPreviewLine /> */}
   </div>
   </div>
}