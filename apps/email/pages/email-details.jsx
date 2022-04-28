import { EmailService } from "../services/email.service.js"

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
        EmailService.removeEmail(this.state.eMail.id)
            .then(() => {
                this.props.history.push('/email')
            })
    }
    render() {
        const { eMail } = this.state
        if (!eMail) return <div>Loading...</div>
        return (
            <React.Fragment>
                <section className="email-details">
                    <h2>{eMail.subject}</h2>
                    <span>{eMail.to}</span>
                    <span>{eMail.sentAt}</span>
                    <p>{eMail.body}</p>
                    <button onClick={this.onDeleteEmail}>Delete</button>
                </section>
                </React.Fragment>

        )
    }
}