
export function MainScreen() {
    return (
        <div className="main-screen" onClick={toggleMenu}></div>
    )
}

function toggleMenu(){
    document.body.classList.toggle('email-menu-open')
}