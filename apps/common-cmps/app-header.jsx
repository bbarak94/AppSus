import { EmailFilter } from '../email/cmps/email-filter.jsx'
import { AppNav } from './app-nav.jsx'

export function AppHeader({selectedPage, onSetSelectedPage}) {
    return (
        <header className='app-header'>
            <img className='main-logo' src={`assets/img/common-imgs/${selectedPage}.png`} alt="" />
            {(selectedPage === 'email') && <EmailFilter />}
            <AppNav onSetSelectedPage={onSetSelectedPage}/>
        </header>
    )
}

 