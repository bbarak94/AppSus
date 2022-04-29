const { Link } = ReactRouterDOM

export class EmailPreview extends React.Component {
    state = {
        windowWidth: window.innerWidth
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ windowWidth: window.innerWidth })
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => {
            this.setState({ windowWidth: window.innerWidth })
        })
    }

    bodyLong(body) {
        const { windowWidth } = this.state
        if (body.length > 70 && windowWidth > 1500) return body.slice(0, 90) + '...'
        else if (windowWidth > 1300) return body.slice(0, 55) + '...'
        else if (windowWidth > 1150) return body.slice(0, 30) + '...'
        else if (windowWidth > 980) return body.slice(0, 15) + '...'
        return body.slice(0, 7) + '...'
    }

    subjectLong(subject) {
        const { windowWidth } = this.state
        if (subject.length > 20 && windowWidth > 1500) return subject.slice(0, 20) + '...'
        else if (windowWidth > 1300) return subject.slice(0, 10) + '...'
        return subject.slice(0, 5) + '...'
        
    }

    render() {
        const { eMail, onSetIsRead, onSetIsStarred } = this.props
        const isReadClass = (eMail.isRead) ? 'read' : ''
        const isStarredClass = (eMail.isStarred) ? 'starred' : 'un-starred'

        return (
            <article className={`email-preview  ${isReadClass}`} onClick={() => onSetIsRead(eMail.id)}>
                <img src={`assets\\img\\mail\\${isStarredClass}.png`} onClick={() => onSetIsStarred(eMail.id)} />
                <Link to={`/email/${eMail.id}`}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={`preview-to ${isReadClass}`}>{eMail.to}</td>
                                <td className={`preview-subject ${isReadClass}`}>{this.subjectLong(eMail.subject)}</td>
                                <td className="preview-body">{this.bodyLong(eMail.body)}</td>
                                <td className="sent-at">{eMail.sentAt}</td>
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </article>
        )
    }
}