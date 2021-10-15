import React, { useState } from 'react'
import ContentEditable from '../helpers/ContentEditable'

import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'

import Structure from './Structure'

function Configuration () {
  const [title, setTitle] = useState('Titulo del Sheet')

  const handlerChange = (evt) => {
    setTitle(evt.target.value)
  }

  const highlightAll = () => {
    setTimeout(() => {
      document.execCommand('selectAll', false, null)
    }, 0)
  }

  return (
    <div className='card edition'>
      <div className='flex align-items-center gap-5'>
        <ContentEditable
          className='title'
          tagName='h4'
          html={title}
          onChange={handlerChange}
          onFocus={highlightAll}
        />
      </div>
      <p className='label'>Configuración del Sheet</p>
      <Structure />
    </div>
  )
}

export default Configuration
