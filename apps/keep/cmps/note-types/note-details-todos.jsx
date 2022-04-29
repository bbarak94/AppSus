import {utilService} from '../../../../services/util.service.js'
import { noteService } from '../../services/note.service.js'

export class NoteDetailsTodos extends React.Component {
    state = {
        note: this.props.note,
        info: this.props.note.info,
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        // console.log('value:', value)
        // console.log('field:', field)
        var newNote = this.props.note
        if (field === 'title') newNote.info.title = value
        else newNote.info.todos[field]['txt'] = value
        this.setState({ note: newNote })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        var newNote = this.state.note
        this.props.onUpdateNote(newNote)
    }

    onToggleTask = (ev) => {
        // console.log('ev.target.dataset.status:', ev.target.dataset.status)
        // console.log('ev.target.dataset.id:', ev.target.dataset.id)
        // console.log('ev.target.dataset.idx:', ev.target.dataset.idx)
        var idx = ev.target.dataset.idx
        var status = ev.target.dataset.status
        var newNote = this.props.note
        newNote.info.todos[idx].doneAt = status === 'done' ? null : Date.now()
        // console.log('newNote:', newNote)
        this.setState({ note: newNote })
    }

    onRemoveTodo = (ev) => {
        console.log('ev.target.dataset.noteid:', ev.target.dataset.noteid)
        console.log('ev.target.dataset.todoid:', ev.target.dataset.todoid)
        var noteId = ev.target.dataset.noteid
        var todoId = ev.target.dataset.todoid
        var newNote = this.state.note
        newNote.info.todos.filter((todo)=> todoId===todo.id)
        this.setState({ note: newNote })




    }

    onAddNewTodo = () => {
        var newNote = this.state.note
        var newTodo = {
            id: utilService.makeId(),
            txt: '',
            doneAt: null
        }
        newNote.info.todos.push(newTodo)
        // this.props.onUpdateNote(newNote)
        this.setState({ note: newNote })
    }

    render() {
        const { title, todos } = this.state.info
        return (
            <div className="todos-container">

            <form
                className='details-txt-form flex column'
                onSubmit={this.handleSubmit}
                // onSubmit={this.props.onReRenderNote}
            >
                <input
                    className='details-txt-input'
                    type='text'
                    id='title'
                    placeholder='Title:'
                    name='title'
                    value={title}
                    onChange={this.handleChange}
                />

                {todos.map((todo, idx) => (
                    <div className="flex align-center" key={idx}>
                        {!todo.doneAt && (
                            <div className='todo-undone'>
                                <div
                                    className='todo-img-container'
                                    onClick={this.onToggleTask}
                                >
                                    <img
                                        data-status='undone'
                                        data-id={todo.id}
                                        data-idx={idx}
                                        className='todo-undone-img'
                                        src='assets\img\keep\todo-undone.svg'
                                    ></img>
                                </div>
                            </div>
                        )}
                        {todo.doneAt && (
                            <div className='todo-done'>
                                <div
                                    className='todo-img-container'
                                    onClick={this.onToggleTask}
                                >
                                    <img
                                        data-status='done'
                                        data-id={todo.id}
                                        data-idx={idx}
                                        className='todo-done-img'
                                        src='assets\img\keep\todo-done.svg'
                                    ></img>
                                </div>
                            </div>
                        )}
                        <input
                            // key={idx}
                            type='text'
                            id='txt'
                            placeholder='Add a task:'
                            name={idx}
                            value={todo.txt}
                            onChange={this.handleChange}
                        />
                <button onClick={this.onRemoveTodo} data-noteid={this.state.note.id} data-todoid={todo.id} >X</button>

                    </div>
                ))}
                <button>Save</button>
            </form>
                <button onClick={this.onAddNewTodo}>Add new task</button>
            </div>

        )
    }
}
