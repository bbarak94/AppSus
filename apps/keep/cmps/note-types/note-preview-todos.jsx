import { TodoPreviewLine } from './todo-preview-line.jsx'



export class NotePreviewTodos extends React.Component{


    render(){
        const { note, updateNote, onRemoveTodo } = this.props
        const { info } = note
        const { todos } = info
        
        return (
            <div className='note-preview note-preview-todos'>
            <h1>Title: {info.title}</h1>
            <div className='todos-preview flex column'>
                {todos.map((todo, idx) => (
                    <TodoPreviewLine updateNote={updateNote} idx={idx} note={note} todo={todo} key={todo.id} />
                ))}
                {/* <TodoPreviewLine /> */}
            </div>
        </div>
    )
}
}



// export function NotePreviewTodos({ note, updateNote, onRemoveTodo }) {
//     const { info } = note
//     const { todos } = info

//     return (
//         <div className='note-preview note-preview-todos'>
//             <h1>Title: {info.title}</h1>
//             <div className='todos-preview flex column'>
//                 {todos.map((todo, idx) => (
//                     <TodoPreviewLine onRemoveTodo={onRemoveTodo} updateNote={updateNote} idx={idx} note={note} todo={todo} key={todo.id} />
//                 ))}
//                 {/* <TodoPreviewLine /> */}
//             </div>
//         </div>
//     )
// }
