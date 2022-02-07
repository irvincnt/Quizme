import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { PrivateRoute } from './PrivateRouter'
import { PublicRoute } from './PublicRoute'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { startChecking } from '../actions/auth'
import Navbar from '../components/ui/Navbar'
import Home from '../pages/Home'
import CheatsheetConfig from '../pages/CheatsheetConfig'
import CheatsheetContent from '../pages/CheatsheetContent'
import Cheatsheet from '../pages/Cheatsheet'
// import ContentSheet from '../components/pages/contentSheet'
import Sheet from '../pages/Sheet'

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
        <PrivateRoute exact path='/cheatsheet/config' component={CheatsheetConfig} isAuthenticated={!!id} />
        <PrivateRoute exact path='/cheatsheet/:cheatsheetId' component={Cheatsheet} isAuthenticated={!!id} />
        <PrivateRoute exact path='/cheatsheet/:cheatsheetId/content' component={CheatsheetContent} isAuthenticated={!!id} />
        <PrivateRoute exact path='/cheatsheet/:cheatsheetId/content/:sheetId' component={Sheet} isAuthenticated={!!id} />

        <Redirect to='/home' />
      </Switch>
    </Router>
  )
}
