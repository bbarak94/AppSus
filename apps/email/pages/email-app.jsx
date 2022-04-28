import { EmailHeader } from '../cmps/email-header.jsx'
import { EmailList } from '../cmps/email-list.jsx'
import { EmailFolderList } from '../cmps/email-folder-list.jsx'
import { EmailCompose } from '../cmps/email-compose.jsx'
import { EmailDetails } from './email-details.jsx'
import { eventBusService } from '../../../services/event-bus-service.js'


import { EmailService } from '../services/email.service.js'

const { Route, Switch } = ReactRouterDOM
export class EmailApp extends React.Component {

    state = {
        eMails: [],
        filterBy: {status:'inbox'},
        isAdd: false,
    }
    removeEvent

    componentDidMount() {
        this.loadEmails()
        this.removeEvent = eventBusService.on('isStarred', (eMailId) => {
            // console.log('str from header', str)
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
        this.setState({isAdd: isAdd})
    }

    render() {
        let { isAdd } = this.state
        return (
            <section className='email-app'>
                <EmailHeader onFilter={this.onFilter} />
                <section className='email-body flex'>
                    <EmailFolderList onFilter={this.onFilter} isAdd={() =>this.onSetIsAdd (true)} />
                    {isAdd && <EmailCompose onAddEmail={this.onAddEmail} isAdd={() =>this.onSetIsAdd(false)}/>}
                    <Switch>
                        <Route path='/email/:emailId' component={EmailDetails} />
                        <Route path='/' component={EmailList} />
                    </Switch>
                </section>

            </section>

        )
    }
}
