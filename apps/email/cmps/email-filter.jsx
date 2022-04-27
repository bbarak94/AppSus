
export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            txt: '',
            isRead: null,
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: target.value } }))
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.onFilter(this.state.filterBy)
    }

    render() {
        const { txt } = this.state.filterBy
        return (
            <section className="email-filter">
                <form onSubmit={this.handleSubmit}>
                    <div className="search-container">
                        <div><img src="assets\img\mail\search.svg" /></div>
                        <input type="search" name="txt" id="" placeholder="Search mail" autoComplete="off"
                            value={txt} onChange={this.handleChange} />
                        <select name="isRead" onChange={this.handleChange}>
                            <option value={'null'}>All</option>
                            <option value={'true'}>Read Mail</option>
                            <option value={'false'}>UnRead Mail</option>
                        </select>
                    </div>

                </form>
            </section>
        )
    }
}