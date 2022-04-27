import { eventBusService } from '../../../services/event-bus-service.js'
import { EmailPreview } from '../cmps/email-preview.jsx'

export class EmailList extends React.Component {

    state ={
        eMails: []
    }

    componentDidMount() {
        eventBusService.on('eMails', (eMails) => {
            this.setState({eMails})
        })    
    }

    render() {
        const eMails = this.state.eMails
        return (
            <section className="email-list">
                {eMails.map(eMail =>
                    <EmailPreview eMail={eMail} key={eMail.id} />
                )}
            </section>
        )
    }
}