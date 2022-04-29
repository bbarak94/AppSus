const { Link } = ReactRouterDOM

export class EmailPreview extends React.Component {



    render() {
        const { eMail, onSetIsRead, onSetIsStarred } = this.props
        const isReadClass = (eMail.isRead) ? 'read' : ''
        const isStarredClass = (eMail.isStarred) ? 'starred' : 'un-starred'

        return (
            <article className={`email-preview flex  ${isReadClass}`} onClick={() => onSetIsRead(eMail.id)}>
                <img src={`assets\\img\\mail\\${isStarredClass}.png`} onClick={() => onSetIsStarred(eMail.id)}/>
                <Link to={`/email/${eMail.id}`}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={`preview-subject${isReadClass}`}>{eMail.subject}</td>
                                <td className="preview-bodybody">{eMail.body}</td>
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