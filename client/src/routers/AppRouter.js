import React from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import Year from './../components/Year'
import Login from './../components/Login'

const AppRouter = () => {
    return (
    <Router>
        <div>
          <Switch>
            <PublicRoute path = '/' component = {Login} exact/>
            <PrivateRoute path = '/home' component = {Year}/>
            <Route>
              <div>not found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter;
