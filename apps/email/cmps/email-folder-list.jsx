import { eventBusService } from "../../../services/event-bus-service.js"
export class EmailFolderList extends React.Component {
    state = {
        eMailsCount: '',
        activeFolder: '',
    }
    removeEvent
    onStatusFilter = (folder) => {
        const filterBy = {
            status: folder
        }
        this.props.onFilter(filterBy)
    }

    componentDidMount() {
        this.removeEvent = eventBusService.on('eMailsCount', (eMailsCount) => {
            this.setState({ eMailsCount })
        })
    }

    componentWillUnmount() {
        this.removeEvent()
    }

    render() {
        const { eMailsCount } = this.state
        return (
            <aside className="email-folder-list flex column">
                <div className="compose-btn" onClick={this.props.isAdd}>
                    <div className="img-container compose"><img src="assets\img\mail\compose.png"/></div>
                    Compose
                    </div>
                <section className="folders">
                    <div onClick={() => this.onStatusFilter('inbox')}>
                        <div className="img-container"><img src="assets\img\mail\inbox.png" /></div>
                        Inbox
                    </div>
                    <div onClick={() => this.onStatusFilter('starred')}>
                    <div className="img-container"><img src="assets\img\mail\starred.png" /></div>
                        Starred
                    </div>
                    <div onClick={() => this.onStatusFilter('sent')}>
                    <div className="img-container"><img src="assets\img\mail\sent.png" /></div>
                        Sent
                    </div>
                    <div onClick={() => this.onStatusFilter('trash')}>
                    <div className="img-container"><img src="assets\img\mail\trash.png" /></div>
                        Trash
                    </div>
                </section>
                {eMailsCount && <span>Emails Count: {eMailsCount}</span>}
            </aside>
        )

    }
}