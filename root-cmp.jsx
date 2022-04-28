import { AppHome } from './apps/app-home.jsx'
import { EmailApp } from './apps/email/pages/email-app.jsx'
import { KeepApp } from './apps/keep/pages/keep-app.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
   return (
      <Router>
         
         <section className='app'>
            <Switch>
               <Route path='/email' component={EmailApp} />
               <Route path='/keep' component={KeepApp} />
               <Route path='/' component={AppHome} />
            </Switch>
         </section>
      </Router>
   )
}
