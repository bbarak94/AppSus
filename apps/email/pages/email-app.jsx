import { EmailHeader } from '../cmps/email-header.jsx'
import { EmailList } from '../cmps/email-list.jsx'
import { EmailFolderList } from '../cmps/email-folder-list.jsx'
import { EmailCompose } from '../cmps/email-compose.jsx'
import { eventBusService } from '../../../services/event-bus-service.js'

import { EmailService } from '../services/email.service.js'
export class EmailApp extends React.Component {

    state = {
        eMails: [],
        filterBy: { status: 'inbox' },
        isAdd: false,
    }
    removeEvent

    componentDidMount() {
        this.loadEmails()
        this.removeEvent = eventBusService.on('isStarred', (eMailId) => {
            EmailService.setIsStarred(eMailId)
                .then(this.loadEmails())
        })
    }

    componentWillUnmount() {
        this.removeEvent()
    }

    loadEmails = () => {
        EmailService.query(this.state.filterBy)
            .then(eMails => {
                this.setState({ eMails })
                eventBusService.emit('eMails', eMails)
            })
    }

    onFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    onAddEmail = (newEmail) => {
        EmailService.addEmail(newEmail)
            .then(this.loadEmails)

    }

    onSetIsAdd = (isAdd) => {
        this.setState({ isAdd: isAdd })
    }

    
    onSetIsRead = (eMailId) => {
        EmailService.setIsRead(eMailId)
    }

    onSetIsStarred = (eMailId) => {
        eventBusService.emit('isStarred', eMailId)
    }

    render() {
        let { isAdd, eMails } = this.state
        return (
            <section className='email-app'>
                <EmailHeader onFilter={this.onFilter} />
                <section className='email-body flex'>
                    <EmailFolderList onFilter={this.onFilter} isAdd={() => this.onSetIsAdd(true)} />
                    {isAdd && <EmailCompose onAddEmail={this.onAddEmail} isAdd={() => this.onSetIsAdd(false)} />}
                    <EmailList eMails={eMails} onSetIsRead={this.onSetIsRead} onSetIsStarred={this.onSetIsStarred}/>
                </section>
            </section>

        )
    }
}
