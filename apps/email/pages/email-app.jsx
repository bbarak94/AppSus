import { EmailList } from '../cmps/email-list.jsx'
import { EmailFolderList } from '../cmps/email-folder-list.jsx'
import { EmailCompose } from '../cmps/email-compose.jsx'
import { eventBusService } from '../../../services/event-bus-service.js'
import { EmailScreen} from './email-screen.jsx'

import { EmailService } from '../services/email.service.js'
export class EmailApp extends React.Component {

    state = {
        eMails: [],
        filterBy: { status: 'inbox' },
        isAdd: false,
    }
    removeEvent;

    componentDidMount() {
        this.loadEmails()
        this.removeEvent = eventBusService.on('filterBy', (filterBy) => {
            this.onFilter(filterBy)
        })
        eventBusService.emit('selectedPage', 'email')
    }

    componentWillUnmount() {
        this.removeEvent()
    }

    loadEmails = () => {
        EmailService.query(this.state.filterBy)
            .then(eMails => {
                this.setState({ eMails })
            })

        EmailService.getLength()
            .then(eMailsCount => {
                eventBusService.emit('eMailsCount', eMailsCount)
            })
    }

    onFilter = (filterBy) => {
        this.setState({ filterBy }, () => { this.loadEmails() })
    }

    onAddEmail = (newEmail) => {
        EmailService.addEmail(newEmail)
            .then(() => {
                this.loadEmails()
                eventBusService.emit('user-msg', {
                    type: 'success', txt: 'Email added successfully'
                })
            })
            .catch(() => {
                eventBusService.emit('user-msg', {
                    type: 'danger', txt: 'Could not add email'
                })
            })
    }

    onSetIsAdd = () => {
        this.setState({ isAdd: true })
    }

    onSetIsRead = (eMailId) => {
        EmailService.setIsRead(eMailId)
    }

    onSetIsStarred = (eMailId) => {
        EmailService.setIsStarred(eMailId)
            .then(this.loadEmails)
    }

    render() {
        let { isAdd, eMails, filterBy } = this.state
        return (
            <section className='email-app'>
                <section className='email-body'>
                    <EmailFolderList onFilter={this.onFilter} isAdd={() => this.onSetIsAdd()} />
                    {isAdd && <EmailCompose
                        onAddEmail={this.onAddEmail}
                        isAdd={() => this.onSetIsAdd(false)}
                    />}
                    {<EmailList
                        eMails={eMails}
                        onSetIsRead={this.onSetIsRead}
                        onSetIsStarred={this.onSetIsStarred}
                        filterBy={filterBy}
                    />}
                    <EmailScreen />
                </section>
            </section>
        )
    }
}
