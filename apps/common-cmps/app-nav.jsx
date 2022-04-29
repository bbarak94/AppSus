const { Link, NavLink, withRouter } = ReactRouterDOM

function _AppNav() {
    return (
        <div className='app-nav'>
            <NavLink to="/" exact>HomePage</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/email" activeClassName="my-active">Email-App</NavLink>
            <NavLink to="/keep" activeClassName="my-active">Keep-App</NavLink>
        </div>
    )
}

export const AppNav = withRouter(_AppNav)
