import React, { useState } from 'react'
import classNames from 'classnames'
import ContentEditable from '../helpers/ContentEditable'
import { useDispatch, useSelector } from 'react-redux'

import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'
import viewColumns from '../../asset/icons/view-columns.svg'
import Configuration from '../sheet/Configuration'
import { sendSheet, setChartsheetTitle } from '../../actions/sheet'
import { Editor } from '../sheet/Editor'

import { Toaster } from "react-hot-toast";

function NewSheet () {
  const [showSheetItems, setShowSheetItems] = useState(true)
  const dispatch = useDispatch()
  const { nameSection, currentSheet } = useSelector(state => state.sheet)

  const handlerChange = (evt) => {
    dispatch(setChartsheetTitle(evt.target.value))
  }

  const highlightAll = () => {
    setTimeout(() => {
      document.execCommand('selectAll', false, null)
    }, 0)
  }

  const handlerShowSheetItems = () => {
    setShowSheetItems(!showSheetItems)
  }

  const handlerSendSheet = () => {
    console.log('Send');
    dispatch(sendSheet(currentSheet))
  }


  return (
    <div className='container-fluid sheet'>
      <div className='flex align-items-center justify-content-between'>
        <h1>New sheert</h1>
        <div className='flex gap-10'>
          <button className='btn btn-outline-primary' disabled>Atrás</button>
          <button className='btn btn-primary' onClick={handlerSendSheet}>Guardar y continuar</button>
        </div>
      </div>
      {/* <div className='card sheet-head'>
        <div className='card-title flex justify-content-between'>
          <div className='flex align-items-center gap-5'>
            <ContentEditable
              className='title'
              tagName='h4'
              html={nameSection}
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
      </div> */}
      <div className='flex gap-12 sheet-content'>
        <Configuration />
        <Editor />
      </div>
      <Toaster />
    </div>
  )
}

export default NewSheet
