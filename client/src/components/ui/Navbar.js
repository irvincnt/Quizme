import React from 'react'
import { useSelector } from 'react-redux'

import '../../styles/navbar.scss'
import q from '../../asset/icons/quizme.svg'
import down from '../../asset/icons/down.svg'
import Dropdown from './Dropdown'

function Navbar () {
  const { name, picture } = useSelector(state => state.auth)
  // eslint-disable-next-line no-undef
  const user = JSON.parse(localStorage.getItem('user') || '')
  const pictureUrl = (picture || user?.picture)

  return (
    <nav className='nabvar'>
      <div className='wrapper'>
        <img src={q} alt='icono quizme' width='50px' />
        <Dropdown>
          <div className='user'>
            <span>{name}</span>
            <img src={pictureUrl} className='avatar' alt='imagen perfil' />
            <img src={down} alt='arrow down' />
          </div>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Navbar
