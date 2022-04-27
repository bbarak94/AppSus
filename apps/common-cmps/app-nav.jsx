const { Link, NavLink, withRouter } = ReactRouterDOM

function _AppNav() {
    return (
        <div className='app-nav'>
            I am App Nav inside main app header
        </div>
    )
}

export const AppNav = withRouter(_AppNav)
