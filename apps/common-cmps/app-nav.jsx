const { Link, NavLink, withRouter } = ReactRouterDOM

class _AppNav extends React.Component {

    handleClick = ({ target }) => {
        this.props.onSetSelectedPage(target.id)
        this.toggleMenu()
    }

    toggleMenu = () => {
        document.body.classList.toggle('main-menu-open')
    }
    
    render() {

        if (!this.props) return <div>no props yet</div>
        return (
            <section>
                <img className="main-nav-img" src="assets/img/keep/nav.svg" onClick={this.toggleMenu} />
                <nav className='app-nav'>
                    <NavLink to="/" exact ><button id="home" onClick={this.handleClick}>Home</button></NavLink>
                    <NavLink to="/keep"><img id="keep" onClick={this.handleClick} src="assets/img/common-imgs/keep.png" /></NavLink>
                    <NavLink to="/email"><img id="email" onClick={this.handleClick} src="assets/img/common-imgs/email.png" /></NavLink>
                    <NavLink to="/about" ><button id="about" onClick={this.handleClick}>About</button></NavLink>
                </nav>
            </section>
        )
    }
}

export const AppNav = withRouter(_AppNav)
