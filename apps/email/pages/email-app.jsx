import { EmailHeader } from '../cmps/email-header.jsx'
import { EmailList } from '../cmps/email-list.jsx'
import { EmailFolderList } from '../cmps/email-folder-list.jsx'

import { EmailService } from '../services/email.service.js'
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
            })
    }

    onFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    render() {

        return (
            <section className='email-app'>
                <EmailHeader onFilter={this.onFilter} />
                <section className="page-body flex">
                    <EmailFolderList onFilter={this.onFilter} />
                    <EmailList eMails={this.state.eMails} />
                </section>
            </section>
        )
    }
}
