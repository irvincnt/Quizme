import React from 'react'
import '../../styles/ui/perfil.scss'
import login from '../../asset/images/login.svg'

import { Link } from 'react-router-dom'

const API_UIAVATARS = process.env.API_UIAVATARS

function PerfilCard () {
  // eslint-disable-next-line no-undef
  const { name, picture } = JSON.parse(localStorage.getItem('user') || '')
  const pictureUrl = (picture || `${API_UIAVATARS}/?name=${name}&background=random&color=fff`)
  return (
    <div className='perfil-card'>
      <div className='header'>
        <h5>Bienvenido!</h5>
        <img src={login} alt='image login' />
      </div>
      <div className='content'>
        <div className='info'>
          <img src={pictureUrl} className='avatar' alt='avatar' />
          <h4 className='name'>
            {name}
          </h4>
          <p className='speciality'>
            Frontend Developer
          </p>
        </div>
        <div className='section'>
          <div className='numbers'>
            <div className='item'>
              <h5>342</h5>
              <p>My sheets</p>
            </div>
            <div className='item'>
              <h5>3</h5>
              <p>Favorite</p>
            </div>
          </div>
          <Link to='/cheatsheet/config' className='btn btn-primary btn-sm'>Create sheet</Link>
        </div>
      </div>
    </div>
  )
}

export default PerfilCard
