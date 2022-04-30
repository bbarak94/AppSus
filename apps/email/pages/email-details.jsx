import { EmailService } from "../services/email.service.js"
import { eventBusService } from "../../../services/event-bus-service.js"
export class EmailDetails extends React.Component {
    state = {
        eMail: null
    }

    componentDidMount() {
        this.loadEmail()
    }

    loadEmail = () => {
        const { emailId } = this.props.match.params
        EmailService.getById(emailId)
            .then(eMail => { this.setState({ eMail }) })
    }

    onDeleteEmail = () => {
        const { eMail } = this.state
        EmailService.removeEmail(eMail.id)
            .then(() => {
                eventBusService.emit('user-msg', {
                    type: 'success', txt: 'Deleted eMail successfully'
                })
                this.props.history.push('/email')
            })
            .catch(() => {
                eventBusService.emit('user-msg', {
                    type: 'danger', txt: 'Could not delete eMail'
                })
            })
    }

    onCloseEmail = () => {
        this.props.history.push('/email')
    }
    render() {
        const { eMail } = this.state
        if (!eMail) return <div>Loading...</div>
        return (
            <React.Fragment>
                <section className="email-details flex space-between align-center column shadow">
                    <h2>{eMail.subject}</h2>
                    <span>{eMail.to}</span>
                    <span className="details-sent-at">{eMail.sentAt}</span>
                    <p>{eMail.body}</p>
                    <div>
                        <button onClick={this.onDeleteEmail}>Delete</button>
                        <button onClick={this.onCloseEmail}>Close</button>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}