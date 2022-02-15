import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import '../../styles/navbar.scss'
import q from '../../asset/icons/logo.svg'
import down from '../../asset/icons/down.svg'
import profile from '../../asset/icons/profile.svg'
import settings from '../../asset/icons/settings.svg'
import logout from '../../asset/icons/log-out.svg'

import Dropdown from './Dropdown'

import { startLogout } from '../../actions/auth'

function Navbar () {
  const { name, picture } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // eslint-disable-next-line no-undef
  const user = JSON.parse(localStorage.getItem('user') || '')
  const pictureUrl = (picture || user?.picture)

  const handlerLogout = () => {
    dispatch(startLogout())
  }
  function headDropdown () {
    return (
      <div className='user'>
        <span>{name}</span>
        <img src={pictureUrl} className='avatar' alt='imagen perfil' />
        <img src={down} alt='arrow down' />
      </div>
    )
  }

  function contentDropdown () {
    return (
      <>
        <li>
          <a>
            <div className='item'>
              <img src={profile} alt='icon profile' />
              <span>Perfil</span>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div className='item'>
              <img src={settings} alt='icon settings' />
              <span>Settings</span>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div className='item' onClick={handlerLogout}>
              <img src={logout} alt='icon settings' />
              <span>Logout</span>
            </div>
          </a>
        </li>
      </>
    )
  }

  return (
    <nav className='nabvar'>
      <div className='wrapper'>
        <Link to='/home'>
          <img src={q} alt='logotipo' width='50px' />
        </Link>
        <Dropdown
          head={headDropdown()}
          content={contentDropdown()}
          aligned='is-right'
        />
      </div>
    </nav>
  )
}

export default Navbar
