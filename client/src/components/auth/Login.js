import React from 'react'
import { useForm } from '../../hooks/useForm'

import '../../styles/auth/login_register.scss'
import login from '../../asset/images/login.svg'
import google from '../../asset/icons/google.svg'
import facebook from '../../asset/icons/facebook.svg'

export default function Login () {
  const [values, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(values)
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
          <form onSubmit={handlerSubmit}>
            <div className='input-group'>
              <label className='label'>Email</label>
              <input type='text' name='email' value={values.email} className='input' onChange={handleInputChange} autoComplete='off' />
              {/* <span className='msg error'>Please enter valid email</span> */}
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
              <img src={google} alt='google icon' width='26px' />
              <img src={facebook} alt='facebook icon' width='26px' />
            </div>
            <p>¿Forgot your password?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
