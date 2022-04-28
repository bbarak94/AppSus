import { NoteDetailsTxt } from './note-types/note-details-txt.jsx'
import { NoteDetailsTodos } from './note-types/note-details-todos.jsx'
import { NoteDetailsImg } from './note-types/note-details-img.jsx'

export class NoteDetails extends React.Component {
    state = {
        note: this.props.note,
        type: this.props.note.type,
        id: this.props.note.type,
        style: {
            backgroundColor :this.props.note.style.backgroundColor
        }
    }

    onReRenderNote = (note) => {
        // ev.preventDefault()
        console.log('note:', note)
        this.setState({ note: note })
    }

    onUpdateNote = (note) => {
        console.log('FROM note-details - note:', note)
        // this.setState({ note: note }, this.props.updateNote(this.state.note))
        this.props.updateNote(note)
    }
    onColorChange = (ev) => {
        console.log('ev:',ev)
        

    }

    render() {
        const {style} = this.state
        return (
            <div className='note-details'>
                {this.state.type === 'note-txt' && (
                    <NoteDetailsTxt
                        onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                {this.state.type === 'note-todos' && (
                    <NoteDetailsTodos
                    onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                {this.state.type === 'note-img' && (
                    <NoteDetailsImg
                    onUpdateNote={this.onUpdateNote}
                        onReRenderNote={this.onReRenderNote}
                        note={this.state.note}
                    />
                )}
                <button onClick={this.props.onRemoveNote}>Delete Note</button>
                <label for="note-color">Color:</label>
                <input onChange={this.onColorChange} id="note-color" type="color" name="note-color" value={style.backgroundColor}/>
            </div>
        )
    }
}
