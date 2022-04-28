import { NoteDetailsTxt } from './note-types/note-details-txt.jsx'
import { NoteDetailsTodos } from './note-types/note-details-todos.jsx'
import { NoteDetailsImg } from './note-types/note-details-img.jsx'
import { NoteDetailsVid } from './note-types/note-details-vid.jsx'

export class NoteDetails extends React.Component {
    state = {
        note: this.props.note,
        type: this.props.note.type,
        id: this.props.note.type,
        style: {
            backgroundColor: this.props.note.style.backgroundColor,
        },
    }

    onReRenderNote = (note) => {
        // ev.preventDefault()
        // console.log('note:', note)
        this.setState({ note: note })
    }

    onUpdateNote = (note) => {
        // console.log('FROM note-details - note:', note)
        // console.log('note.style:',note.style)
        
        // this.setState({ note: note }, this.props.updateNote(this.state.note))
        this.props.updateNote(note)
    }
    onColorChange = (ev) => {
        // console.log('ev.target.value:',ev.target.value)
        // this.props.changeColor(ev.target.value)
        var newNote = this.state.note
        newNote.style.backgroundColor = ev.target.value

        this.setState({
            note: newNote,
            style: {
                backgroundColor: ev.target.value,
            },
        })
    }
    // this.setState({style: {
    //     backgroundColor :ev.target.value
    // }})

    render() {
        const { style } = this.state
        const { backgroundColor } = this.state.style
        return (
            <div
                className='note-details'
                style={{ backgroundColor: this.state.style.backgroundColor }}
            >
                {this.state.type === 'note-txt' && (
                    <NoteDetailsTxt
                        backgroundColor = {backgroundColor}
                        onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                {this.state.type === 'note-todos' && (
                    <NoteDetailsTodos
                        backgroundColor = {backgroundColor}
                        onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                {this.state.type === 'note-img' && (
                    <NoteDetailsImg
                        backgroundColor = {backgroundColor}
                        onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                {this.state.type === 'note-vid' && (
                    <NoteDetailsVid
                        backgroundColor = {backgroundColor}
                        onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                <button onClick={this.props.onRemoveNote}>Delete Note</button>
                <label>Color:</label>
                <input
                    onChange={this.onColorChange}
                    id='note-color'
                    type='color'
                    name='note-color'
                    value={style.backgroundColor}
                />
            </div>
        )
    }
}
