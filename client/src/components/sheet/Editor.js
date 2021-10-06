import React, { useState } from 'react'
import EditableElement from '../helpers/EditableElement'
// import ContentEditable from 'react-contenteditable'

import editpencil from '../../asset/icons/paintbrush.svg'
import '../../styles/pages/sheet.scss'

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
      {/* <ContentEditable
        tagName='pre'
        className='clasico'
        html='<p>Hello <b>World</b> !</p><p>Paragraph 2</p>'
      /> */}
    </div>
  )
}

export default Editor
