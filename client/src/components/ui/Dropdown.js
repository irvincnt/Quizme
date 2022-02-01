import React, { useRef } from 'react'
import classNames from 'classnames'

import '../../styles/ui/dropdown.scss'
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick'

function Dropdown (props) {
  const { head, content, aligned, isBlocked, isEditionMode = true } = props
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false, isBlocked, content)

  function handlerClickDropdown (isActive) {
    if (isEditionMode) setIsActive(!isActive)
  }

  return (
    <div className='dropdown' onClick={() => handlerClickDropdown(isActive)}>
      {head}
      {
        isEditionMode &&
          <ul ref={dropdownRef} className={classNames(`content ${aligned}`, { 'active ': isActive })}>
            {content}
          </ul>
      }
    </div>
  )
}

export default Dropdown
