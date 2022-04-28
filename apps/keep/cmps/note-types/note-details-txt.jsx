export class NoteDetailsTxt extends React.Component {
    state = {
        note: this.props.note,
        info: this.props.note.info,
        // note: {
        //     id: this.props.note.id,
        //     title: this.props.note.info.title,
        //     txt: this.props.note.info.txt,
        // },
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        // console.log('value:', value)
        // console.log('field:', field)
        this.setState(
            (prevState) => ({ info: { ...prevState.info, [field]: value } }),
            () => {
                // console.log('this.state:', this.state)
                // (prevState) => ({ note: { ...prevState.note, [field]: value } }),
            }
        )
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        var newNote = this.state.note
        newNote.info = this.state.info
        // console.log('newNote:', newNote)
        this.props.onUpdateNote(newNote)
        // this.props.onUpdateNote(this.state.note)
    }

    render() {
        const { title, txt } = this.state.info
        return (
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
