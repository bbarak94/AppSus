import { EmailService } from "../services/email.service.js"

const { Link } = ReactRouterDOM
export class EmailCompose extends React.Component {

    state = {
        to: '',
        subject: '',
        body: '',
    }

    onHandleChange = ({ target }) => {
        const key = target.name
        this.setState({ [key]: target.value })
    }

    onAddEmail = (ev) => {
        ev.preventDefault()
        const newEmail = this.state
        // this.props.onAddEmail(newEmail)
        EmailService.addEmail(newEmail)
        this.props.isAdd()
    }

    render() {
        const { to, subject, body } = this.state
        return (
            <section className="email-compose">
                <form className="flex column" onSubmit={this.onAddEmail}>
                    <input type="text" name="to" placeholder="To" required
                        value={to} onChange={this.onHandleChange} />
                    <input type="text" name="subject" placeholder="Subject"
                        value={subject} onChange={this.onHandleChange} />
                    <input type="text" name="body" value={body} onChange={this.onHandleChange} />
                    <button>Send</button>
                </form>
            </section>
        )

    }
}