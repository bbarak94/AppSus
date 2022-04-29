import { EmailFilter } from './email-filter.jsx'

export class EmailHeader extends React.Component {

    toggleMenu = () => {
        document.body.classList.toggle('menu-open')
    }
    render() {

        return (
            <section className="email-header flex justify-center">
                <EmailFilter onFilter={this.props.onFilter} />
                <img className='nav-mobile' onClick={this.toggleMenu} src="assets\img\mail\nav-mobile.svg" />
            </section>
        )
    }
}

