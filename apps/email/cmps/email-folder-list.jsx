import { eventBusService } from "../../../services/event-bus-service.js"
export class EmailFolderList extends React.Component {
    state = {
        emailCount: '',
        activeFolder: '',
        windowWidth: window.innerWidth
    }
    removeEvent;
    onStatusFilter = (folder) => {
        const filterBy = {
            status: folder
        }
        this.props.onFilter(filterBy)
        const { windowWidth } = this.state
        if (windowWidth < 720) document.body.classList.toggle('email-menu-open')
    }

    componentDidMount() {
        this.removeEvent = eventBusService.on('emailCount', (emailCount) => {
            this.setState({ emailCount })
        })
        window.addEventListener('resize', () => {
            this.setState({ windowWidth: window.innerWidth })
        })
    }

    componentWillUnmount() {
        this.removeEvent()
        window.removeEventListener('resize', () => {
            this.setState({ windowWidth: window.innerWidth })
        })
    }

    handleComposeClick = () => {
        const { windowWidth } = this.state
        if (windowWidth < 720) document.body.classList.toggle('email-menu-open')
        this.props.isAdd()
    }

    render() {
        const { emailCount } = this.state
        return (
            <aside className="email-folder-list">
                <div className="compose-btn-container" onClick={this.handleComposeClick}>
                    <div className="img-container compose"><img src="assets\img\mail\compose.png" /></div>
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
                <div className="email-count-container flex">
                    <div className="email-count">
                        <div style={{ width: `${emailCount}%` }}></div>
                    </div>
                        <div className="count-value">{emailCount}%</div>
                </div>
            </aside>
        )
    }
}