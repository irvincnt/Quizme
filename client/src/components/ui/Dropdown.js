import React, { useRef } from 'react'
import classNames from 'classnames'

import '../../styles/ui/dropdown.scss'
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick'

function Dropdown (props) {
  const { head, content, aligned } = props
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)

  function handlerClickDropdown (isActive) {
    setIsActive(!isActive)
  }

  return (
    <div className='dropdown' onClick={() => handlerClickDropdown(isActive)}>
      {head}
      <ul ref={dropdownRef} className={classNames(`content ${aligned}`, { 'active ': isActive })}>
        {content}
      </ul>
    </div>
  )
}

export default Dropdown
