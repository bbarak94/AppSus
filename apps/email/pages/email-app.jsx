import {EmailHeader} from '../cmps/email-header.jsx'

import {EmailService} from '../services/email.service'
export class EmailApp extends React.Component {
    render() {
        return (
            <section className='email-app'>
                <EmailHeader />
                Email App
            </section>
        )
    }
}
