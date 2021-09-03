import React from 'react'
import { useSelector } from 'react-redux'

import '../../styles/navbar.scss'
import q from '../../asset/icons/quizme.svg'
import perfil from '../../asset/images/perfil.jpg'
import down from '../../asset/icons/down.svg'

function Navbar () {
  const { name } = useSelector(state => state.auth)

  return (
    <nav className='nabvar'>
      <div className='wrapper'>
        <img src={q} alt='icono quizme' width='50px' />
        <div className='user'>
          <span>{name}</span>
          <img src={perfil} className='avatar' alt='imagen perfil' />
          <img src={down} alt='arrow down' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
