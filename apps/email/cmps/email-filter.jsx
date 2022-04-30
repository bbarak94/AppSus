import { eventBusService } from "../../../services/event-bus-service.js"
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
        eventBusService.emit('filterBy', this.state.filterBy)
    }

    render() {
        const { txt } = this.state.filterBy
        return (
            <section className="email-filter">
                <form onSubmit={this.handleSubmit}>
                    <div className="search-container">
                        <div onClick={this.handleSubmit} className="img-container"><img src="assets\img\mail\search.svg" /></div>
                        <input type="search" name="txt" id="email-search" placeholder="Search mail" autoComplete="off"
                            value={txt} onChange={this.handleChange} />
                            {/* <img className='nav-mobile' onClick={this.toggleMenu} src="assets\img\mail\nav-mobile.svg" /> */}
                        <select name="isRead" onChange={this.handleChange}>
                            <option value={null}>All</option>
                            <option value={true}>Read</option>
                            <option value={false}>UnRead</option>
                        </select>
                    </div>
                </form>
            </section>
        )
    }
}