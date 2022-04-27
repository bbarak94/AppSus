import { NoteDetailsTxt } from './note-types/note-details-txt.jsx'
import { NoteDetailsTodos } from './note-types/note-details-todos.jsx'
import { NoteDetailsImg } from './note-types/note-details-img.jsx'

export class NoteDetails extends React.Component {
    state = {
        note: this.props.note,
        type: this.props.note.type,
    }



    onUpdateNote = (note) => {
        // ev.preventDefault()
        console.log('note:', note)
        // this.setState({ note: note })
        this.setState({ note: note }, this.props.updateNote(this.state.note))
    }

    render() {
        return (
            <div className='note-details'>
                {this.state.type === 'note-txt' && (
                    <NoteDetailsTxt
                        onUpdateNote={this.onUpdateNote}
                        note={this.state.note}
                    />
                )}
                {this.state.type === 'note-todos' && (
                    <NoteDetailsTodos
                        onUpdateNote={this.onUpdateNote}
                        note={this.state.note}
                    />
                )}
                {this.state.type === 'note-img' && (
                    <NoteDetailsImg
                        onUpdateNote={this.onUpdateNote}
                        note={this.state.note}
                    />
                )}
            </div>
        )
    }
}
