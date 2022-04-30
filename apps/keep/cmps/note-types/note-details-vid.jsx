export class NoteDetailsVid extends React.Component {
    state = {
        note: this.props.note,
        info: this.props.note.info,
    }

    handleChange = ({ target }) => {
        var value = target.value
        const field = target.name
        this.setState((prevState) => ({
            info: { ...prevState.info, [field]: value },
        }))
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        var newNote = this.state.note
        newNote.info = this.state.info
        console.log('newNote.info.url:', newNote.info.url)
        if (newNote.type === 'note-vid') {
            var url = this.convertLinkToEmbed(newNote.info.url)
            newNote.info.url = url
            console.log('url:', url)
        }
        newNote.style.backgroundColor = this.props.backgroundColor
        this.props.onUpdateNote(newNote)
    }

    convertLinkToEmbed(urlFromUser) {
        if (urlFromUser.includes('embed')) return urlFromUser
        console.log('urlFromUser:', urlFromUser)
        let startIdx = urlFromUser.indexOf('?v=') + 3
        let videoUrl = 'https://www.youtube.com/embed/'
        const forbidenChars = '/!@#$%^&*()-_+={[}]|"\''
        for (let i = startIdx; i < urlFromUser.length; i++) {
            console.log('text')
            if (i === startIdx && urlFromUser.charAt(startIdx) === 'v') continue
            console.log('text')
            if (!forbidenChars.includes(urlFromUser.charAt(i)))
                console.log('text')
            videoUrl += urlFromUser.charAt(i)
        }
        console.log('urlFromFunc:', videoUrl)
        return videoUrl
    }

    render() {
        const { title, url } = this.state.info
        return (
            <form
                className='details-vid-form flex column'
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
                    placeholder='Video URL:'
                    name='url'
                    value={url}
                    onChange={this.handleChange}
                />
                <div className='note-details-vid-container'>
                    <iframe
                        src={url}
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
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
