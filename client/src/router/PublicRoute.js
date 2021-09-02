import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log('🚀 ------------------------------------------------------------------------')
  console.log('🚀 -> file: PublicRoute.js -> line 10 -> isAuthenticated', isAuthenticated)
  console.log('🚀 ------------------------------------------------------------------------')
  return (
    <Route
      {...rest}
      component={(props) => isAuthenticated ? <Redirect to='/dasboard' /> : <Component {...props} />}
    />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}
