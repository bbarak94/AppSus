import { eventBusService } from "../../services/event-bus-service.js"

export class About extends React.Component {
    componentDidMount() {
        eventBusService.emit('selectedPage', 'about')
    }
    render() {
        return (
            <section className="app-about">
                <div className="profile-pic">
                    <img src="assets/img/common-imgs/itai.jpg" alt="" />
                    <div className="profile-card shadow">
                        <h2>Itai Rotstein</h2>
                        <h3>Front-End Developer</h3>
                    </div>
                </div>
                <div className="profile-pic">
                    <img src="assets/img/common-imgs/barak.jpg" alt="" />
                    <div className="profile-card shadow">
                        <h2>Barak Braun</h2>
                        <h3>Front-End Developer</h3>
                    </div>
                </div>


            </section>
        )
    }
}