import { EmailFilter } from '../email/cmps/email-filter.jsx'
import { AppNav } from './app-nav.jsx'

export class AppHeader extends React.Component {
    toggleMenu = () => {
        if (this.props.selectedPage === 'email') {
            document.body.classList.toggle('email-menu-open')
        }
    }
    render() {
        const { selectedPage, onSetSelectedPage } = this.props
        return (
            <header className='app-header'>
                <img className='main-logo' src={`assets/img/common-imgs/${selectedPage}.png`} onClick={this.toggleMenu} />
                {(selectedPage === 'email') && <EmailFilter />}
                <AppNav onSetSelectedPage={onSetSelectedPage} />
            </header>
        )
    }
}

