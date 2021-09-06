import React, { useState } from 'react'
import classNames from 'classnames'

import '../../styles/ui/dropdown.scss'
import profile from '../../asset/icons/profile.svg'
import settings from '../../asset/icons/settings.svg'
import logout from '../../asset/icons/log-out.svg'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'

function Dropdown (props) {
  const [isActive, setDropdown] = useState(false)
  const dispatch = useDispatch()

  const handlerLogout = () => {
    dispatch(startLogout())
  }

  return (
    <div className='dropdown' onClick={() => setDropdown(!isActive)}>
      {props.children}
      <ul className={classNames('content', { 'active ': isActive })}>
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
      </ul>
    </div>
  )
}

export default Dropdown
