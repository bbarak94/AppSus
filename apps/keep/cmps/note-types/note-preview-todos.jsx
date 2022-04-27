import {TodoPreviewLine} from './todo-preview-line.jsx'


export function NotePreviewTodos({note}){
   const {info} = note
   const {todos} = info
   return <div className="note-preview note-preview-todos">
   <h1>i'm todo</h1>
   <h1>i have title: {info.title}</h1>
   <div className='todos-preview'>
   (todos) && {todos.map(todo => <TodoPreviewLine todo={todo} key={todo.id} />)}
   {/* <TodoPreviewLine /> */}
   </div>
   </div>
}