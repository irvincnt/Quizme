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
import ConfigSheet from '../components/pages/ConfigSheet'
import ContentSheet from '../components/pages/contentSheet'

export const AppRouter = () => {
  const dispatch = useDispatch()
  const { id, checking } = useSelector(state => state.auth)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const token = localStorage.getItem('token')
    if (token || checking) {
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
        <PrivateRoute exact path='/cheatsheet/config' component={ConfigSheet} isAuthenticated={!!id} />
        <PrivateRoute exact path='/cheatsheet/content' component={ContentSheet} isAuthenticated={!!id} />

        <Redirect to='/home' />
      </Switch>
    </Router>
  )
}
