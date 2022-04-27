
export class EmailCompose extends React.Component {

    state = {
        to: '',
        subject: '',
        body: '',
    }

    onHandleChange = ({target}) => {
        const key = target.name
        this.setState({[key]: target.value})
    }

    onAddEmail = (ev) => {
        ev.preventDefault()
        console.log(ev);
    }

    render() {
        const {to, subject, body} = this.state
        return (
            <section className="email-compose">
                <form onSubmit={this.onAddEmail}>

                    <input type="text" name="to" placeholder="To" required 
                    value={to} onChange={this.onHandleChange}/>

                    <input type="text" name="subject" placeholder="Subject" 
                    value={subject} onChange={this.onHandleChange}/>

                    <input type="text" name="body" value={body} onChange={this.onHandleChange}/>

                    <button onSubmit={this.onAddEmail}></button>
                </form>
            </section>
        )

    }
}