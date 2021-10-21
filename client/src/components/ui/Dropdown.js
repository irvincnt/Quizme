import React, { useState } from 'react'
import classNames from 'classnames'

import '../../styles/ui/dropdown.scss'

function Dropdown (props) {
  const [isActive, setDropdown] = useState(false)

  return (
    <div className='dropdown' onClick={() => setDropdown(!isActive)}>
      {props.head}
      <ul className={classNames('content', { 'active ': isActive })}>
        {props.content}
      </ul>
    </div>
  )
}

export default Dropdown
