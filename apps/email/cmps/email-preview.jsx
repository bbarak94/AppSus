const { Link } = ReactRouterDOM

export class EmailPreview extends React.Component {

    bodyLong(body) {
        if (body.length > 50) return body.slice(0, 50) + '...'
        return body
    }

    render() {
        const { eMail, onSetIsRead, onSetIsStarred } = this.props
        const isReadClass = (eMail.isRead) ? 'read' : ''
        const isStarredClass = (eMail.isStarred) ? 'starred' : 'un-starred'

        return (
            <article className={`email-preview  ${isReadClass}`} onClick={() => onSetIsRead(eMail.id)}>
                <div className="img-container" onClick={() => onSetIsStarred(eMail.id)}><img src={`assets\\img\\mail\\${isStarredClass}.png`} /></div>
                <Link to={`/email/${eMail.id}`}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={`preview-subject${isReadClass}`}>{eMail.subject}</td>
                                <td className="preview-body">{this.bodyLong(eMail.body)}</td>
                                <td className="preview-to">{eMail.to}</td>
                                <td className="sent-at">{eMail.sentAt}</td>
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </article>
        )
    }
}