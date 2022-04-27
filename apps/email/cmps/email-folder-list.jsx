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
                <Link to={"/email/add"}><div>➕Compose</div></Link>
                <section className="status-folders">
                    <div onClick={() => this.onStatusFilter('inbox')}>Inbox</div>
                    <div onClick={() => this.onStatusFilter('starred')}>Starred</div>
                    <div onClick={() => this.onStatusFilter('sent')}>Sent</div>
                    <div onClick={() => this.onStatusFilter('trash')}>Trash</div>
                </section>
            </aside>
        )

    }
}