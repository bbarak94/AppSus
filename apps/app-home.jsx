import { eventBusService } from '../services/event-bus-service.js'

export class AppHome extends React.Component {
    componentDidMount() {
        eventBusService.emit('selectedPage', 'main')
    }

    render() {
        return (
            <section className='app-home flex'>
                <div className='home-page-txt'>
                <h1 className='line-one'>Prepare to increase</h1>
                <h1 className='line-two'>Your productivity</h1>
                </div>



                <div className='home-img-container'>
                    <img
                        className='home-img'
                        src='assets\img\common-imgs\home-img.jpg'
                    ></img>
                </div>
            </section>
        )
    }
}
