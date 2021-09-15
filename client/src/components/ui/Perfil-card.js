import React from 'react'
import '../../styles/ui/perfil.scss'
import login from '../../asset/images/login.svg'

function PerfilCard () {
  // eslint-disable-next-line no-undef
  const { name, picture } = JSON.parse(localStorage.getItem('user') || '')
  return (
    <div className='perfil-card'>
      <div className='header'>
        <span>Bienvenido de nuevo</span>
        <img src={login} alt='image login' />
      </div>
      <div className='content'>
        <div className='info'>
          <img src={picture} className='avatar' alt='avatar' />
          <h5 className='name'>
            {name}
          </h5>
          <p className='speciality'>
            Frontend Developer
          </p>
        </div>
        <div className='section'>
          sección
        </div>
      </div>
    </div>
  )
}

export default PerfilCard
