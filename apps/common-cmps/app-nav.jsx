const { Link, NavLink, withRouter } = ReactRouterDOM

function _AppNav() {
    return (
        <div className='app-nav'>
            <h1>AppNav</h1>
            {/* <nav></nav> */}
        </div>
    )
}

export const AppNav = withRouter(_AppNav)
