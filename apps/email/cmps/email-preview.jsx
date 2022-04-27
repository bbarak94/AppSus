import { EmailDetails } from '../cmps/email-details.jsx'


export function EmailPreview({ eMail }) {

    const isRead = (eMail.isRead) ? 'isRead' : ''

    return (
            <article className={`email-preview flex space-between ${isRead}`} >
                <span className="subject">{eMail.subject}</span>
                <span className="body">{eMail.body}</span>
                <span>{eMail.to}</span>
                <span>{eMail.sentAt}</span>
            </article>
    )
}