import React from 'react'
import classNames from 'classnames'

import '../../styles/ui/dropdown.scss'

function Dropdown (props) {
  const { handlerClickDropdown, isActive, head, content, dropdownRef } = props

  return (
    <div className='dropdown' onClick={() => handlerClickDropdown(isActive)}>
      {head}
      <ul ref={dropdownRef} className={classNames('content', { 'active ': isActive })}>
        {content}
      </ul>
    </div>
  )
}

export default Dropdown
