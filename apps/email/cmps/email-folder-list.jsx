const { Link } = ReactRouterDOM
export class EmailFolderList extends React.Component {

    onStatusFilter = (status) => {
        const filterBy = {
            status: status
        }
        this.props.onFilter(filterBy)
    }

    render() {

        return (
            <aside className="email-folder-list flex column">
                <div onClick={this.props.isAdd}>➕Compose</div>
                <section className="status-folders">
                    <Link to="/email"><div onClick={() => this.onStatusFilter('inbox')}>Inbox</div></Link>
                    <Link to="/email"><div onClick={() => this.onStatusFilter('starred')}>Starred</div></Link>
                    <Link to="/email"><div onClick={() => this.onStatusFilter('sent')}>Sent</div></Link>
                    <Link to="/email"><div onClick={() => this.onStatusFilter('trash')}>Trash</div></Link>
                </section>
            </aside>
        )

    }
}