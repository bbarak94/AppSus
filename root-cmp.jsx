import { AppHome } from './apps/app-home.jsx'
import { EmailApp } from './apps/email/pages/email-app.jsx'
import { KeepApp } from './apps/keep/pages/keep-app.jsx'
import { EmailDetails } from './apps/email/pages/email-details.jsx'
import { UserMsg } from './apps/common-cmps/user-msg.jsx'
import { About } from './apps/common-cmps/about.jsx'
import { AppHeader } from "./apps/common-cmps/app-header.jsx"


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
   return (
      <Router>
         <AppHeader/>
         <section className='app'>
            <Switch>
               <Route path='/email/:emailId' component={EmailDetails} />
               <Route path='/email' component={EmailApp} />
               <Route path='/keep' component={KeepApp} />
               <Route path='/about' component={About} />
               <Route path='/' component={AppHome} />
            </Switch>
         </section>
         <UserMsg />
      </Router>
   )
}
