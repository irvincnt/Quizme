import React, { useState } from 'react'
import EditableElement from '../helpers/EditableElement'
// import ContentEditable from 'react-contenteditable'

import editpencil from '../../asset/icons/paintbrush.svg'
import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'

import Configuration from './Configuration'

function Editor () {
  const [isEditable, setEdition] = useState(false)
  const handlerChange = (value) => {
    console.log('onChange keyUp', value)
  }

  const handlerOnBlur = (value) => {
    setEdition(!isEditable)
  }

  const handlerEdition = () => {
    setEdition(!isEditable)
  }
  return (
    <div className='card edition'>
      <div className='flex align-items-center gap-5'>
        <EditableElement
          onChange={handlerChange}
          onBlur={handlerOnBlur}
          disabled={isEditable}
        >
          <h4 className='title' id='title-card'>Sheet title </h4>
        </EditableElement>
        {!isEditable && <img src={editpencil} onClick={handlerEdition} alt='icon editable' />}
      </div>
      <p className='label'>Sheet editor</p>
      <Configuration />
      <div className='actions'>
        <a className='btn btn-outline-danger'>Cancelar</a>
        <a className='btn btn-primary'>Create sheet</a>
      </div>
    </div>
  )
}

export default Editor
