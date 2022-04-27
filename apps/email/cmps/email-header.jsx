import {EmailFilter} from './email-filter.jsx'

export function EmailHeader({onFilter}) {
    
    return (
        <section className="email-header flex justify-center">
            <EmailFilter onFilter={onFilter} />
        </section>
    )
}

