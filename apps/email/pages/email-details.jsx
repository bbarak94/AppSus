import { EmailHeader } from "../cmps/email-header.jsx"
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
    render() {
        const { eMail } = this.state
        if (!eMail) return <div>Loading...</div>
        return (
            <div>
                <EmailHeader />
                <section className="email-details">
                    <h2>{eMail.subject}</h2>
                    <span>{eMail.to}</span>
                    <span>{eMail.sentAt}</span>
                    <p>{eMail.body}</p>
                </section>
            </div>
        )
    }
}