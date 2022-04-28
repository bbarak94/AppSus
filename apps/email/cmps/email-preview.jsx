const { Link } = ReactRouterDOM

export function EmailPreview({ eMail, onSetIsRead, onSetIsStarred }) {

    const isReadClass = (eMail.isRead) ? 'read' : ''
    const isStarredClass = (eMail.isStarred) ? 'starred' : 'un-starred'

    return (

        <article className={`email-preview  ${isReadClass}`} onClick={() => onSetIsRead(eMail.id)}>

            <Link to={`/email/${eMail.id}`}>
                <table>
                    <tbody>

                        <tr>
                            <td><img src={`assets\\img\\mail\\${isStarredClass}.png`} onClick={() => onSetIsStarred(eMail.id)} /></td>
                            <td className={`subject${isReadClass}`}>{eMail.subject}</td>
                            <td className="body">{eMail.body}</td>
                            <td className="to">{eMail.to}</td>
                            <td className="sent-at">{eMail.sentAt}</td>
                        </tr>
                    </tbody>
                </table>

            </Link>
        </article>
    )
    // }
}