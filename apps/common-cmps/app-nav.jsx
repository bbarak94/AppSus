const { Link, NavLink, withRouter } = ReactRouterDOM

function _AppNav() {
    return (
        <div className='app-nav'>
            <NavLink to="/" exact>HomePage</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/email" activeClassName="my-active"><img src="assets\img\mail\Gmail-logo.png"/></NavLink>
            <NavLink to="/keep" activeClassName="my-active"><img src="assets\img\keep\BaraKeep.png"/></NavLink>
        </div>
    )
}

export const AppNav = withRouter(_AppNav)
