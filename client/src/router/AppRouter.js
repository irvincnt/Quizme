import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { PrivateRoute } from './PrivateRouter'
import { PublicRoute } from './PublicRoute'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Home from '../components/pages/Home'
import { startChecking } from '../actions/auth'
import Navbar from '../components/ui/Navbar'
import NewSheet from '../components/pages/newSheet'

export const AppRouter = () => {
  const dispatch = useDispatch()
  const { id, checking } = useSelector(state => state.auth)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(startChecking())
    }
  }, [dispatch])

  if (checking) {
    return <h5>Espere...</h5>
  }

  return (
    <Router>
      {id && <Navbar />}
      <Switch>
        <PublicRoute exact path='/login' component={Login} isAuthenticated={!!id} />
        <PublicRoute exact path='/register' component={Register} isAuthenticated={!!id} />

        <PrivateRoute exact path='/home' component={Home} isAuthenticated={!!id} />
        <PrivateRoute exact path='/new-sheet' component={NewSheet} isAuthenticated={!!id} />

        <Redirect to='/home' />
      </Switch>
    </Router>
  )
}
