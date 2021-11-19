import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { validateEmail } from '../../helpers/validator'
import { startRegister } from '../../actions/auth'

import '../../styles/auth/login_register.scss'
import login from '../../asset/images/login.svg'
import google from '../../asset/icons/google.svg'
import facebook from '../../asset/icons/facebook.svg'
import Alerts from '../ui/Alerts'
import Spinner from '../ui/spinner'

export default function Register () {
  const dispatch = useDispatch()
  const { msg: { ok: okError, msg }, auth: { loading } } = useSelector(state => state)

  const [errors, setErrors] = useState({})
  const [values, handleInputChange] = useForm({
    email: '',
    username: '',
    password: '',
    passwordTwo: ''
  })

  const validate = () => {
    const errors = {}
    if (values.username.trim().length === 0) {
      errors.username = 'Error en username'
    }

    if (!validateEmail(values.email)) {
      errors.email = 'Please enter valid email'
    }

    if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters'
    } else if (values.password !== values.passwordTwo) {
      errors.password = 'Password not match'
      errors.passwordTwo = 'Password not match'
    }

    return errors
  }

  const handlerRegister = (e) => {
    e.preventDefault()

    const errorsForm = validate()
    if (Object.keys(errorsForm).length > 0) {
      return setErrors(errorsForm)
    } else {
      setErrors({})
      dispatch(startRegister(
        values.username,
        values.email,
        values.password
      ))
    }
  }

  return (
    <div className='register'>
      <div className='content'>
        <div className='header'>
          <div className='labels'>
            <h5>Register</h5>
            <p>Get your free Quizme account now.</p>
          </div>
          <div className='image'>
            <img src={login} alt='imagen' />
          </div>
        </div>
        <div className='section'>
          {okError && <Alerts label={msg} danger />}
          <form onSubmit={handlerRegister}>
            <div className='input-group'>
              <label className='label'>Email</label>
              <input
                type='text'
                name='email'
                autoComplete='off'
                value={values.email}
                onChange={handleInputChange}
                className={classNames('input', { 'is-invalid': errors.email })}
              />
              {errors.email && <span className='msg error'>{errors.email}</span>}
            </div>
            <div className='input-group'>
              <label className='label'>Username</label>
              <input
                type='text'
                name='username'
                autoComplete='off'
                value={values.username}
                onChange={handleInputChange}
                className={classNames('input', { 'is-invalid': errors.username })}

              />
              {errors.username && <span className='msg error'>{errors.username}</span>}
            </div>
            <div className='input-group'>
              <label className='label'>Password</label>
              <input
                type='password'
                name='password'
                autoComplete='off'
                value={values.password}
                onChange={handleInputChange}
                className={classNames('input', { 'is-invalid': errors.password })}
              />
              {errors.password && <span className='msg'>{errors.password}</span>}
            </div>
            <div className='input-group'>
              <label className='label'>Password 2</label>
              <input
                type='password'
                name='passwordTwo'
                autoComplete='off'
                value={values.passwordTwo}
                onChange={handleInputChange}
                className={classNames('input', { 'is-invalid': errors.passwordTwo })}
              />
              {errors.passwordTwo && <span className='msg'>{errors.passwordTwo}</span>}
            </div>
            <button type='submit' className='btn'>Register</button>
          </form>
          <div className='sigin-with'>
            <h5>Sign in with</h5>
            <div className='icons'>
              {loading && <Spinner />}
              <img src={google} alt='google icon' width='26px' />
              <img src={facebook} alt='facebook icon' width='26px' />
            </div>
            <p>Already have an account ? <Link to='/login'> Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}
