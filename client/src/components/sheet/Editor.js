import React from 'react'
// import ContentEditable from 'react-contenteditable'

import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'
import { DesignOne } from './types/designOne'
import DesignThree from './types/designThree'
import DesignTwo from './types/designTwo'

function Editor () {
  return (
    <div className='card preview'>
      <h4 className='title'>Preview</h4>
      <p className='label'>Ve los cambios en tiempo real</p>
      <div className='content'>
        <DesignOne />
        <br />
        <DesignTwo />
        <br />
        <DesignThree />

      </div>
    </div>
  )
}

export default Editor