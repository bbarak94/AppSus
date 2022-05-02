const { Link } = ReactRouterDOM

export function EmailPreview({ eMail, onSetIsRead, onSetIsStarred, filterBy }) {

    const isReadClass = (eMail.isRead) ? 'read' : 'un-read'
    const isStarredClass = (eMail.isStarred) ? 'yellow-star' : 'un-starred'

    return (
        <Link to={`/email/${eMail.id}`}>
            <section className={`preview-container ${isReadClass}`} onClick={() => onSetIsRead(eMail.id)}>
                <div className="inner-container">
                    <div className="star" ><img src={`assets/img/mail/${isStarredClass}.png`} id={eMail.id} onClick={onSetIsStarred} /></div>
                    {(filterBy.status === 'inbox' || filterBy.status === 'starred') && <div className={`preview-from ${isReadClass}`}>{eMail.from}</div>}
                    {(filterBy.status === 'sent') && <div className={`preview-to ${isReadClass}`}>{eMail.to}</div>}
                </div>
                <div className={`preview-subject ${isReadClass}`}>{eMail.subject}</div>
                <div className="preview-body">{eMail.body}</div>
                <div className="preview-sent-at"><pre className="preview-pre">{eMail.sentAt}</pre></div>
            </section>
        </Link>
    )
}