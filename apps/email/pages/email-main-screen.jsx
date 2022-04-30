
export function MainScreen() {

    

    return (
        <div className="main-screen" onClick={toggleMenu}>I am main screen</div>
    )
}

function toggleMenu(){
    document.body.classList.toggle('email-menu-open')
}