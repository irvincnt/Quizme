import React from 'react'

import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'
import { DesignOne } from './designOne'

function Editor () {
  return (
    <div className='card preview'>
      <h4 className='title'>Preview</h4>
      <p className='label'>Ve los cambios en tiempo real</p>
      <div className='content'>
        <DesignOne />
      </div>
    </div>
  )
}

export default Editor
