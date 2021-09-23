import React, { useState } from 'react'
import classNames from 'classnames'
import EditableElement from '../helpers/EditableElement'

import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'
import editpencil from '../../asset/icons/paintbrush.svg'
import viewColumns from '../../asset/icons/view-columns.svg'

function NewSheet () {
  const [isEditable, setEdition] = useState(false)
  const [showSheetItems, setShowSheetItems] = useState(true)

  const handlerChange = (value) => {
    console.log('onChange keyUp', value)
  }

  const handlerEdition = () => {
    setEdition(!isEditable)
  }

  const handlerOnBlur = (value) => {
    setEdition(!isEditable)
  }

  const handlerShowSheetItems = () => {
    setShowSheetItems(!showSheetItems)
  }

  return (
    <div className='container-fluid sheet'>
      <div className='flex align-items-center justify-content-between'>
        <h1>New sheert</h1>
        breadcrumb
      </div>
      <div className='card sheet-head'>
        <div className='card-title flex justify-content-between'>
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
          <div>
            <button className='btn' onClick={handlerShowSheetItems}>
              <img src={viewColumns} alt='items sheet' />
            </button>

          </div>
        </div>
      </div>
      <div className={classNames('card sheet-items', { 'is-disabled': showSheetItems })}>
        Items chartsheets
      </div>
      <div className='flex gap-12 sheet-content'>
        <div className='card edition'>
          Create
        </div>
        <div className='card preview'>
          Preview
        </div>

      </div>
    </div>
  )
}

export default NewSheet
