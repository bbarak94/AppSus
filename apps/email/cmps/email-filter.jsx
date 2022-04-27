
export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            txt: '',
        }
    }

    handleChange = ({ target }) => {
        console.log(target.value);
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, txt: target.value } }))
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.onFilter(this.state.filterBy)
    }

    render() {
        const {txt} = this.state.filterBy
        return (
            <section className="email-filter">
                <form onSubmit={this.handleSubmit}>
                    <input type="search" name="search" id="" placeholder="Search mail" 
                    value={txt} onChange={this.handleChange} />
                </form>

            </section>
        )
    }
}