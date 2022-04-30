export class NoteFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            txt: '',
        },
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
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
                <form
                    className='note-filter-form flex'
                    onSubmit={this.onFilter}
                >
                    <div className='title-search flex justify-center align-center'>
                        <div className='icon-container-search'>
                            <img
                                className='keep-icon-search'
                                src='assets\img\keep\search.svg'
                            />
                        </div>
                        <div>
                            {/* <label>Title: </label> */}
                            <input
                                className='search-input'
                                type='text'
                                id='by-title'
                                placeholder='Search by Title'
                                name='title'
                                value={title}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className='text-search flex justify-center align-center'>
                        <div className='icon-container-search'>
                            <img
                                className='keep-icon-search'
                                src='assets\img\keep\search.svg'
                            />
                        </div>
                        <div>
                            {/* <label>Text: </label> */}
                            <input
                                className='search-input'
                                type='text'
                                id='by-text'
                                placeholder='Search by Text'
                                name='txt'
                                value={txt}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    {/* <button>FILTER!</button> */}
                </form>
                <div className='add-buttons flex justify-center'>
                    {/* <button onClick={this.props.onAddNote} data-type='note-txt'>
                        New Memo
                    </button> */}
                    <div className='icon-container tooltip tooltip-new-note flex justify-center align-center'>
                        <img
                            className='keep-icon new-note-icon'
                            src='assets\img\keep\new-note.svg'
                            onClick={this.props.onAddNote}
                            data-type='note-txt'
                        />
                        <span className='tooltiptext tooltiptext-new-note'>
                            New Note
                        </span>
                    </div>
                    {/* <button
                        onClick={this.props.onAddNote}
                        data-type='note-todos'
                    >
                        New Todo-List
                    </button> */}
                    <div className='icon-container tooltip tooltip-new-todos flex justify-center align-center'>
                        <img
                            className='keep-icon new-todos-icon'
                            src='assets\img\keep\todo.svg'
                            onClick={this.props.onAddNote}
                            data-type='note-todos'
                        />
                        <span className='tooltiptext tooltiptext-new-todos'>
                            New Todo List
                        </span>
                    </div>
                    {/* <button onClick={this.props.onAddNote} data-type='note-img'>
                        New Image
                    </button> */}
                    <div className='icon-container tooltip tooltip-new-img flex justify-center align-center'>
                        <img
                            className='keep-icon new-img-icon'
                            src='assets\img\keep\img.svg'
                            onClick={this.props.onAddNote}
                            data-type='note-img'
                        />
                        <span className='tooltiptext tooltiptext-new-img'>
                            New Img URL
                        </span>
                    </div>
                    {/* <button onClick={this.props.onAddNote} data-type='note-vid'>
                        New Video
                    </button> */}
                    <div className='icon-container tooltip tooltip-new-vid flex justify-center align-center'>
                        <img
                            className='keep-icon new-img-icon'
                            src='assets\img\keep\vid.svg'
                            onClick={this.props.onAddNote}
                            data-type='note-vid'
                        />
                        <span className='tooltiptext tooltiptext-new-vid'>
                            New Video URL
                        </span>
                    </div>
                </div>
            </section>
        )
    }
}
