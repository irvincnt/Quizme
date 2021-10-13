import React, { useState } from 'react'
import classNames from 'classnames'
import ContentEditable from '../helpers/ContentEditable'

import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'
import viewColumns from '../../asset/icons/view-columns.svg'
import Configuration from '../sheet/Configuration'
import Editor from '../sheet/Editor'

function NewSheet () {
  const [title, setTitle] = useState('Titulo de la sección')
  const [showSheetItems, setShowSheetItems] = useState(true)

  const handlerChange = (evt) => {
    console.log(evt.target.value)
    setTitle(evt.target.value)
  }

  const highlightAll = () => {
    setTimeout(() => {
      document.execCommand('selectAll', false, null)
    }, 0)
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
            <ContentEditable
              className='title'
              tagName='h4'
              html={title}
              onChange={handlerChange}
              onFocus={highlightAll}
            />
          </div>
          <div>
            <button className='btnn' onClick={handlerShowSheetItems}>
              <img src={viewColumns} alt='items sheet' />
            </button>

          </div>
        </div>
      </div>
      <div className={classNames('card sheet-items', { 'is-disabled': showSheetItems })}>
        Items chartsheets
      </div>
      <div className='flex gap-12 sheet-content'>
        <Configuration />
        <Editor />
      </div>
    </div>
  )
}

export default NewSheet
