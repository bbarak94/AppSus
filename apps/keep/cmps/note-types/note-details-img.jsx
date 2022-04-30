export class NoteDetailsImg extends React.Component {
    state = {
        note: this.props.note,
        info: this.props.note.info,
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({
            info: { ...prevState.info, [field]: value },
        }))
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        var newNote = this.state.note
        newNote.info = this.state.info
        newNote.style.backgroundColor = this.props.backgroundColor
        this.props.onUpdateNote(newNote)
    }
    render() {
        const { title, url } = this.state.info
        return (
            <form
                className='details-img-form flex column '
                onSubmit={this.handleSubmit}
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
                <input
                className="todo-text url-text"
                    type='text'
                    id='url'
                    placeholder='Image URL:'
                    name='url'
                    value={url}
                    onChange={this.handleChange}
                />
                <div className='note-details-img-container'>
                    <img className="details-img" src={url}></img>
                </div>
                {/* <button>Save</button> */}
                <div className='icon-details-container tooltip tooltip-save flex justify-center align-center'>
                        <img
                            onClick={this.handleSubmit}
                            className='keep-icon-details save-icon'
                            src='assets\img\keep\save.svg'
                        />
                        <span className='tooltiptext tooltip-save-text'>
                            Save Note
                        </span>
                    </div>
            </form>
        )
    }
}
