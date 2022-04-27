import {Todo} from './todo-preview.jsx'


export function NotePreviewTodos({note}){
   const {info} = note
   // const {todos} = info
   return <div className="note-preview note-preview-todos">
   <h1>i'm todo</h1>
   <h1>i have title: {info.title}</h1>
   <div className='Todos-preview'>
   {/* (todos) && {todos.map(todo => <Todo todo={todo} key={todo.id} />)} */}
   <Todo />
   </div>
   </div>
}