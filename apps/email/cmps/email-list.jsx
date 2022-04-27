
export function EmailList({eMails}) {

    return (
        <section className="email-list">
            {eMails.map(eMail => 
                <div key={eMail.id}>
                    <span className="subject">{eMail.subject}</span>
                    <span className="body">{eMail.body}</span>
                    <span>{eMail.to}</span>
                    <span>{eMail.sentAt}</span>
                </div>
                )}
        </section>
    )

}