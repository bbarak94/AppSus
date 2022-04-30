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
        window.removeEventListener('resize', () => {})
    }

    bodyLong(body) {
        const { windowWidth } = this.state
        if (windowWidth > 1500) return body.slice(0, 70) + '...'
        else if (windowWidth > 1300) return body.slice(0, 60) + '...'
        else if (windowWidth > 1000) return body.slice(0, 30) + '...'
        else if (windowWidth > 720) return body.slice(0, 0) + '...'
        else return body.slice(0, 60) +'...'
    }

    subjectLong(subject) {
        const { windowWidth } = this.state
        if (subject.length > 20 && windowWidth > 1500) return subject.slice(0, 25) 
        else if (windowWidth > 1300) return subject.slice(0, 30)  
        return subject.slice(0, 5) + '...'

    }
  
    render() {
        const { eMail, onSetIsRead, onSetIsStarred } = this.props
        const isReadClass = (eMail.isRead) ? 'read' : ''
        const isStarredClass = (eMail.isStarred) ? 'starred' : 'un-starred'

        return (
            <article className={`email-preview  ${isReadClass}`} onClick={() => onSetIsRead(eMail.id)}>
                <img src={`assets/img/mail/${isStarredClass}.png`} onClick={() => onSetIsStarred(eMail.id)} />
                <Link to={`/email/${eMail.id}`}>
                    <section className="preview-container">
                        <div className={`preview-to ${isReadClass}`}>{eMail.to}</div>
                        <div className={`preview-subject ${isReadClass}`}>{this.subjectLong(eMail.subject)}</div>
                        <div className="preview-body">{this.bodyLong(eMail.body)}</div>
                        <div className="sent-at">{eMail.sentAt}</div>
                    </section>
                </Link>
            </article>
        )
    }
}