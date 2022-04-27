import { AppHeader } from './apps/common-cmps/app-header.jsx'
import {AppHome} from './apps/app-home.jsx'
import {EmailApp} from './apps/email/email-app.jsx'
import {KeepApp} from './apps/keep/keep-app.jsx'


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return (
    <Router>
       <AppHeader />
       <section className='app'>
          <Switch>
             <Route path='/keep' component={KeepApp} />
             <Route path='/email' component={EmailApp} />
             {/* <Route path='/books' component={BookApp} /> */}
             <Route path='/' component={AppHome} />
          </Switch>
       </section>

    </Router>
    )
}
