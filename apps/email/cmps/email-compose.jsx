import { EmailService } from "../services/email.service.js"
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
        EmailService.addEmail(newEmail)
        this.props.isAdd()
    }

    onCloseMassage = () => {
        this.props.isAdd()
    }

    render() {
        const { to, subject, body } = this.state
        return (
            <section className="email-compose shadow">
                <form className="flex column" onSubmit={this.onAddEmail}>
                    <div className="new-massage flex space-between">
                        New Massage
                        <button onClick={this.onCloseMassage}>X</button>
                        </div>
                    <div className="to">
                        <input type="text" name="to" placeholder="To" required
                            value={to} onChange={this.onHandleChange} />
                    </div>
                    <div className="subject">
                        <input type="text" name="subject" placeholder="Subject"
                            value={subject} onChange={this.onHandleChange} />
                    </div>
                    <textarea name="body" value={body} onChange={this.onHandleChange} id="" cols="60" rows="30"></textarea>
                    <div className="send-btn-div">
                        <button>Send</button>
                    </div>
                </form>
            </section>
        )

    }
}