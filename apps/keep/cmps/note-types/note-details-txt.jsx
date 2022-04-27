export class NoteDetailsTxt extends React.Component {
    state = {
        note: {
            title: this.props.note.info.title,
            txt: this.props.note.info.txt,
        },
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        // this.setState((prevState) => ({
        //     note: { ...prevState.note, [field]: value },
        // }))
        this.setState((prevState) => ({note: { ...prevState.note, [field]: value}}), () => {
         this.props.onUpdateNote(this.state.note)
        })
    }

    render() {
        const { title, txt } = this.state.note
        return (
            <form
                className='details-txt-form flex column'
                onSubmit={this.props.onUpdateNote}
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
