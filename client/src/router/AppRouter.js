import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { PrivateRoute } from './PrivateRouter'
import { PublicRoute } from './PublicRoute'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Home from '../components/pages/Home'
import { startChecking } from '../actions/auth'

export const AppRouter = () => {
  const dispatch = useDispatch()
  const { checking, id } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path='/login'
          component={Login}
          isAuthenticated={!!id} // sin id (false)
        />
        <PublicRoute
          exact
          path='/register'
          component={Register}
          isAuthenticated={!!id} // sin id (false)
        />

        <PrivateRoute
          exact
          path='/dasboard'
          component={Home}
          isAuthenticated={!!id} // con id (true)
        />

        {/* <Redirect to='/home' /> */}

      </Switch>
    </Router>
  )
}
