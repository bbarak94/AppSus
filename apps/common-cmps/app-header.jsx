import { EmailFilter } from '../email/cmps/email-filter.jsx'
import { AppNav } from './app-nav.jsx'

export class AppHeader extends React.Component {

    state = {
        windowWidth: window.innerWidth,
        emailActive: null
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ windowWidth: window.innerWidth })
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => {
            this.setState({ windowWidth: window.innerWidth })
        })
    }

    toggleMenu = () => {
        if (this.props.selectedPage === 'email' && this.state.windowWidth < 720) {
            document.body.classList.toggle('email-menu-open')
            this.setState({})
        }
    }
    render() {
        const cursor = (this.state.windowWidth < 720) ? 'pointer' : 'auto'
        const { selectedPage, onSetSelectedPage } = this.props
        return (
            <header className='app-header'>
                <section className='header-container'>
                    <div>
                        <img className={`main-logo ${selectedPage}`}
                            style={{ cursor: cursor }}
                            src={`assets/img/common-imgs/${selectedPage}.png`}
                            onClick={this.toggleMenu}
                        />
                    </div>
                    {(selectedPage === 'email') && <EmailFilter />}
                    <AppNav onSetSelectedPage={onSetSelectedPage} />
                </section>
            </header>
        )
    }
}

