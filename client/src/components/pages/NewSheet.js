import React, { useState } from 'react'
import EditableElement from '../helpers/EditableElement'

import '../../styles/pages/sheet.scss'
import editpencil from '../../asset/icons/paintbrush.svg'

function NewSheet () {
  const [isEditable, setEdition] = useState(false)
  const handlerChange = (value) => {
    console.log('onChange keyUp', value)
  }

  const handlerEdition = () => {
    setEdition(!isEditable)
  }

  const handlerOnBlur = (value) => {
    setEdition(!isEditable)
  }

  return (
    <div className='container-fluid'>
      <div className='flex align-items-center justify-content-between'>
        <h1>New sheert</h1>
        breadcrumb
      </div>
      <div className='card sheet'>
        <div className='card-title'>
          <div className='flex align-items-center gap-5'>
            <EditableElement
              onChange={handlerChange}
              onBlur={handlerOnBlur}
              disabled={isEditable}
            >
              <h4 className='title' id='title-card'>Untitled </h4>
            </EditableElement>
            {!isEditable && <img src={editpencil} onClick={handlerEdition} alt='icon editable' />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewSheet
