const { Link } = ReactRouterDOM

export class EmailPreview extends React.Component {
    state = {
        eMail: null,
        isStarred: null
    }
    
    componentDidMount() {
        this.setState({eMail: this.props.eMail})
    }
    render() {
        const {eMail} = this.state
        if (!eMail) return <div>Loading...</div> 
        const isReadClass = (eMail.isRead) ? 'read' : ''
        const isStarredClass = (eMail.isStarred) ? 'starred' : 'un-starred'

        return (
    
            <article className={`email-preview flex ${isReadClass}`} >
                <div className="img-container" >
                    <img src={`assets\\img\\mail\\${isStarredClass}.png`}  onClick={() => this.props.onSetIsStarred(eMail.id)} />
                    {/* <img src="assets\img\mail\starred.png"/> */}
                </div>
                <Link to={`/email/${eMail.id}`}>
    
                    <div className=" preview-content flex space-between" onClick={() => this.props.onSetIsRead(eMail.id)}>
                        <span className="subject">{eMail.subject}</span>
                        <span className="body">{eMail.body}</span>
                        <span>{eMail.to}</span>
                        <span>{eMail.sentAt}</span>
                    </div>
                </Link>
    
            </article>
        )
    }
}