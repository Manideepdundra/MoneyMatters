import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard'
import UserTransactions from './components/UserTransactions'
import Profile from './components/Profile'
import NotFound from './components/NotFound'

const MoneyMatters = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/admin-dashboard" component={AdminDashboard} />
    <Route exact path="/dashboard" component={UserDashboard} />
    <Route exact path="/transactions" component={UserTransactions} />
    <Route exact path="/profile" component={Profile} />
    <Route component={NotFound} />
  </Switch>
)

export default MoneyMatters
