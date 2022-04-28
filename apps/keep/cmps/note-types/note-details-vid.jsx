export class NoteDetailsVid extends React.Component {
    state = {
        note: this.props.note,
        info: this.props.note.info,
    }

    handleChange = ({ target }) => {
        var value = target.value
        const field = target.name
        //  if (field==='url'){
        //     value = this.convertLinkToEmbed(value)
        //  }
        console.log('value:', value)

        console.log('value:', value)
        console.log('field:', field)

        this.setState(
            (prevState) => ({ info: { ...prevState.info, [field]: value } }),
            () => {
                // console.log('this.state:', this.state)
            }
        )
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
        // console.log('this.props.backgroundColor:',this.props.backgroundColor)
        newNote.style.backgroundColor = this.props.backgroundColor
        // console.log('newNote:', newNote)
        this.props.onUpdateNote(newNote)
        // this.props.onUpdateNote(this.state.note)
    }

    convertLinkToEmbed(urlFromUser) {
        console.log('urlFromUser:', urlFromUser)
        let startIdx = urlFromUser.indexOf('?v=') + 3
        let videoUrl = 'https://www.youtube.com/embed/'
        const forbidenChars = '/!@#$%^&*()-_+={[}]|"\''
        // const forbidenChars = '/\!@#$%^&*()-_+={[}]|"\''
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
                    type='text'
                    id='url'
                    placeholder='IMG URL:'
                    name='url'
                    value={url}
                    onChange={this.handleChange}
                />
                <div className='note-details-vid-container'>
                    <iframe
                        // width='560'
                        // height='315'
                        src={url}
                        // src='https://www.youtube.com/embed/YdgoG8hTMUw'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>

                <button>Save</button>
            </form>
        )
    }
}
