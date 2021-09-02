import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log('🚀 --------------------------------------------------------------------------')
  console.log('🚀 -> file: PrivateRouter.js -> line 10 -> isAuthenticated', isAuthenticated)
  console.log('🚀 --------------------------------------------------------------------------')
  return (
    <Route
      {...rest}
      component={(props) => isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />}
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}
