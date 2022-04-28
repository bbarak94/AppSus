import { eventBusService } from '../../../services/event-bus-service.js'
import { EmailPreview } from '../cmps/email-preview.jsx'
import { EmailService } from '../services/email.service.js'


export class EmailList extends React.Component {

    state ={
        eMails: []
    }

    componentDidMount() {
        eventBusService.on('eMails', (eMails) => {
            this.setState({eMails})
        })    
    }

    onSetIsRead = (eMailId) => {
        EmailService.setIsRead(eMailId)
    }

    onSetIsStarred = (eMailId) => {
        eventBusService.emit('isStarred', eMailId)
        // EmailService.setIsStarred(eMailId)
    }
    
    render() {
        const eMails = this.state.eMails
        return (
            <section className="email-list">
                {eMails.map(eMail =>
                    <EmailPreview eMail={eMail} key={eMail.id} onSetIsRead={this.onSetIsRead} onSetIsStarred={this.onSetIsStarred}/>
                )}
            </section>
        )
    }
}