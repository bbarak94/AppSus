
export class NoteFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            txt: '',
        },
    }

    handleChange = ({ target }) => {
        //   const value = target.type === 'number' ? +target.value : target.value
        const value = target.value
        const field = target.name

        // console.log('target.name:', target.name)
        // console.log('target.value:', target.value)

        this.setState(
            (prevState) => ({
                filterBy: { ...prevState.filterBy, [field]: value },
            }),
            () => {
                this.props.onSetFilter(this.state.filterBy)
            }
        )
    }

    onFilter = (ev) => {
        ev.preventDefault()
          this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { title, txt } = this.state.filterBy

        return (
            <section className='note-filter flex column justify-center'>
                <form className="note-filter-form flex" onSubmit={this.onFilter}>
                    <div>

                    <label>Title: </label>
                    <input
                        type='text'
                        id='by-title'
                        placeholder='by title'
                        name='title'
                        value={title}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>

                    <label>Text: </label>
                    <input
                        type='text'
                        id='by-text'
                        placeholder='by text'
                        name='txt'
                        value={txt}
                        onChange={this.handleChange}
                    />
                    </div>
                    <button>FILTER!</button>
                </form>
                <div className="add-buttons">

                <button onClick={this.props.onAddNote} data-type='note-txt'>New Memo</button>
                <button onClick={this.props.onAddNote} data-type='note-todos'>New Mission</button>
                <button onClick={this.props.onAddNote} data-type='note-img'>New Image</button>
                <button onClick={this.props.onAddNote} data-type='note-vid'>New Video</button>
                </div>
            </section>
        )
    }
}
