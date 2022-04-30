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
                <input
                    type='text'
                    id='txt'
                    placeholder='Text:'
                    name='txt'
                    value={txt}
                    onChange={this.handleChange}
                />
                <button>Save</button>
            </form>
        )
    }
}
