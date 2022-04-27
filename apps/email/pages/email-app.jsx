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
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails()
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

    onAddEmail = () => {
        console.log('reached');
    }

    render() {

        return (
            <section className='email-app'>

                <EmailHeader onFilter={this.onFilter} />
                <section className='email-body flex'>
                    <EmailFolderList onFilter={this.onFilter}/>
                    <Switch>
                        <Route path='/email/add' component={EmailCompose} />
                        <Route path='/email/:emailId' component={EmailDetails} />
                        <Route path='/' component={EmailList} />
                    </Switch>
                </section>

            </section>

        )
    }
}
