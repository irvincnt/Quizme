import React from 'react'

import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'

import Structure from './Structure'

function Configuration () {
  return (
    <div className='card edition'>
      <div className='flex align-items-center gap-5'>
        <h4 className='title'> Edición </h4>
      </div>
      <p className='label'>Tunea tu Cheat Sheet</p>
      <Structure />
    </div>
  )
}

export default Configuration
