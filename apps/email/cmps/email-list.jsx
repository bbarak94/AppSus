import { EmailPreview } from '../cmps/email-preview.jsx'

export function EmailList({ eMails }) {


    return (
        <section className="email-list">
            {eMails.map(eMail =>
                    <EmailPreview eMail={eMail} key={eMail.id} />
            )}
        </section>
    )
}