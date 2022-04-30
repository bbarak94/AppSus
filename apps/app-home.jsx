import { eventBusService } from "../services/event-bus-service.js"

export class AppHome extends React.Component  {

    componentDidMount() {
        eventBusService.emit('selectedPage', 'home')
    }
    
    render() {

        return (
            <section className='app-home'>
               
                <div className="header-container"><h1>Wellcome To Barai</h1></div>
            </section>
        )
    }
}
