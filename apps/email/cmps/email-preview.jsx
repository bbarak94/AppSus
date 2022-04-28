const { Link } = ReactRouterDOM

export function EmailPreview({ eMail, onSetIsRead, onSetIsStarred }) {

    const isReadClass = (eMail.isRead) ? 'isRead' : ''


    return (

        <article className={`email-preview flex ${isReadClass}`} >
            <div className="img-container" >
                <img src="assets\img\mail\un-starred.png" onClick={() => onSetIsStarred(eMail.id)} />
                {/* <img src="assets\img\mail\starred.png"/> */}
            </div>
            <Link to={`/email/${eMail.id}`}>

                <div className=" preview-content flex space-between" onClick={() => onSetIsRead(eMail.id)}>
                    <span className="subject">{eMail.subject}</span>
                    <span className="body">{eMail.body}</span>
                    <span>{eMail.to}</span>
                    <span>{eMail.sentAt}</span>
                </div>
            </Link>

        </article>
    )
}