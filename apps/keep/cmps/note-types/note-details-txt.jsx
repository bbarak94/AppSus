export class NoteDetailsTxt extends React.Component {
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
        this.props.onUpdateNote(newNote)
    }

    render() {
        const { title, txt } = this.state.info
        return (
            <form
                className='details-txt-form flex column'
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
                <textarea
                    className='text-area'
                    rows='4'
                    cols='50'
                    type='text'
                    id='txt'
                    placeholder='Text:'
                    name='txt'
                    value={txt}
                    onChange={this.handleChange}
                />
                {/* button>Save</button> */}
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
