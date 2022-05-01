
export function EmailScreen() {
    return (
        <div className="email-screen" onClick={toggleMenu}></div>
    )
}

function toggleMenu(){
    document.body.classList.toggle('email-menu-open')
}