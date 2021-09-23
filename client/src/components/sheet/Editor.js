import React, { useState } from 'react'
import EditableElement from '../helpers/EditableElement'

import editpencil from '../../asset/icons/paintbrush.svg'
import '../../styles/pages/sheet.scss'

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
    </div>
  )
}

export default Editor
