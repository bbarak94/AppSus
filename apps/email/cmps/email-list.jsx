// import { eventBusService } from '../../../services/event-bus-service.js'
import { EmailPreview } from '../cmps/email-preview.jsx'
// import { EmailService } from '../services/email.service.js'


export function EmailList({eMails, onSetIsRead, onSetIsStarred}) {

    
    // componentDidMount() {   
    //         this.setState({eMails})  
    // }

    
    
      
        return (
            <section className="email-list">
                {eMails.map(eMail =>
                    <EmailPreview eMail={eMail} key={eMail.id} onSetIsRead={onSetIsRead} onSetIsStarred={onSetIsStarred}/>
                )}
            </section>
        )
    
}