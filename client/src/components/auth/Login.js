import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../../actions/auth'
import Alerts from '../ui/Alerts'

import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import '../../styles/auth/login_register.scss'
import login from '../../asset/images/login.svg'
import google from '../../asset/icons/google.svg'
import facebook from '../../asset/icons/facebook.svg'
import Spinner from '../ui/spinner'

const googleClient = process.env.GOOLE_CLIENT_ID
const facebookClient = process.env.FACEBOOK_CLIENT_ID

export default function Login () {
  const dispatch = useDispatch()
  const { msg: { ok: okError, msg }, auth: { loading } } = useSelector(state => state)

  const [values, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(startLogin(
      'auth/login',
      {
        email: values.email,
        password: values.password
      }
    ))
  }

  const googleSucces = async (res) => {
    const { tokenId: tokenGoogle } = res
    dispatch(startLogin(
      'auth/google-login',
      {
        token: tokenGoogle
      }
    ))
  }

  const googleError = (err) => {
    console.log('🚀 Error Google', err)
  }

  const responseFacebook = async (res) => {
    const { userID, accessToken } = res
    dispatch(startLogin(
      'auth/facebook-login',
      {
        userId: userID,
        accessToken

      }
    ))
  }

  return (
    <div className='login'>
      <div className='content'>
        <div className='header'>
          <div className='labels'>
            <h5>Welcome Back !</h5>
            <p>Sign in to continue to Skote</p>
          </div>
          <div className='image'>
            <img src={login} alt='imagen' />
          </div>
        </div>
        <div className='section'>
          {okError && <Alerts label={msg} danger />}
          <form onSubmit={handlerSubmit}>
            <div className='input-group'>
              <label className='label'>Email</label>
              <input type='text' name='email' value={values.email} className='input' onChange={handleInputChange} autoComplete='off' />
            </div>
            <div className='input-group'>
              <label className='label'>Password</label>
              <input type='password' name='password' value={values.password} className='input' onChange={handleInputChange} autoComplete='off' />
            </div>
            <button type='submit' className='btn'>Log in</button>
          </form>
          <div className='sigin-with'>
            <h5>Sign in with</h5>
            <div className='icons'>
              {loading && <Spinner />}
              {!loading && <>
                <GoogleLogin
                  clientId={googleClient}
                  render={renderProps => (
                  // eslint-disable-next-line react/jsx-handler-names
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      <img src={google} alt='facebook icon' width='26px' />
                    </button>
                  )}
                  onSuccess={googleSucces}
                  onFailure={googleError}
                  cookiePolicy='single_host_origin'
                />
                <FacebookLogin
                  appId={facebookClient}
                  autoLoad={false}
                  callback={responseFacebook}
                  render={renderProps => (
                    // eslint-disable-next-line react/jsx-handler-names
                    <button onClick={renderProps.onClick} disabled={renderProps.isDisabled}>
                      <img src={facebook} alt='facebook icon' width='26px' />
                    </button>
                  )}
                />
                           </>}
            </div>
            <p>¿Forgot your password?</p>
            <p>Don't have an account ? <Link to='/register'> Signup now </Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}
