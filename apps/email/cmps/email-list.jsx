import { EmailPreview } from '../cmps/email-preview.jsx'

export function EmailList({ eMails, onSetIsRead, onSetIsStarred, filterBy}) {

    return (
        <section className="email-list">
            {eMails.map(eMail =>
                <EmailPreview
                    eMail={eMail}
                    key={eMail.id}
                    onSetIsRead={onSetIsRead}
                    onSetIsStarred={onSetIsStarred}
                    filterBy={filterBy}
                />
            )}
        </section>
    )
}