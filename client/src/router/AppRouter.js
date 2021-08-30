import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path='/login'
          component={Login}
          isAuthenticated={false}
        />
        <PublicRoute
          exact
          path='/register'
          component={Register}
          isAuthenticated={false}
        />
      </Switch>
    </Router>
  )
}
