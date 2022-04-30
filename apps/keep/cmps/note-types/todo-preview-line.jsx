export class TodoPreviewLine extends React.Component {
    state = {
        note: this.props,
        todo: this.props,
        txt: this.props.todo,
        doneAt: this.props.todo,
        idx: this.props.idx,
    }
    handleTogglePreview = (ev) => {
        console.log('ev.target.dataset.id:', ev.target.dataset.id)
        ev.stopPropagation()
        var idx = this.props.idx
        var status = ev.target.dataset.status
        var newNote = this.props.note
        newNote.info.todos[idx].doneAt = status === 'done' ? null : Date.now()
        console.log('newNote:', newNote)
        this.props.updateNote(newNote)
    }
    render() {
        const { id, txt, doneAt } = this.props.todo
        return (
            <div className='note-preview-todo'>
                {!doneAt && (
                    <div className='todo-undone flex align-center'>
                        <div
                            className='todo-img-container'
                            onClick={this.handleTogglePreview}
                        >
                            <img
                                data-id={id}
                                data-status='undone'
                                className='todo-undone-img'
                                src='assets\img\keep\todo-undone.svg'
                            ></img>
                        </div>
                        <h1 className="todo-txt" >{txt}</h1>
                    </div>
                )}
                {doneAt && (
                    <div className='todo-done flex align-center'>
                        <div
                            className='todo-img-container'
                            onClick={this.handleTogglePreview}
                        >
                            <img
                                data-id={id}
                                data-status='done'
                                className='todo-done-img'
                                src='assets\img\keep\todo-done.svg'
                            ></img>
                        </div>
                        <h1 className="todo-txt" >{txt}</h1>
                    </div>
                )}
            </div>
        )
    }
}
