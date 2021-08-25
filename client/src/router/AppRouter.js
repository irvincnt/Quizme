import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../components/auth/Login'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path='/login'
            component={Login}
            isAuthenticated={false}
          />
        </Switch>
      </div>
    </Router>
  )
}
