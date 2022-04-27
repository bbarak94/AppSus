import {EmailHeader} from '../cmps/email-header.jsx'
import {EmailList} from '../cmps/email-list.jsx'

import {EmailService} from '../services/email.service.js'
export class EmailApp extends React.Component {

    state = {
        eMails: [],
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails()
    }
    
    loadEmails = () => {
        EmailService.query()
            .then(eMails => {
                this.setState({eMails})
            })
    }

    render() {
        
        return (
            <section className='email-app'>
                Email App
                <EmailHeader />
                <EmailList eMails={this.state.eMails}/>
            </section>
        )
    }
}
