import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'
import Settings from '../sheet/Settings'
import { eventReset, sendSheet } from '../../actions/sheet'
import { Editor } from '../sheet/Editor'

import { Toaster } from 'react-hot-toast'
import Spinner from '../ui/spinner'

function NewSheet () {
  const history = useHistory()
  const dispatch = useDispatch()
  const { currentSheet, loadingEvent, successEvent } = useSelector(state => state.sheet)

  useEffect(() => {
    if (successEvent) {
      setTimeout(() => {
        history.push('/home')
        dispatch(eventReset())
      }, 2000)
    }
  }, [successEvent])

  const handlerSendSheet = () => {
    dispatch(sendSheet(currentSheet))
  }

  return (
    <div className='container-fluid sheet'>
      <div className='flex align-items-center justify-content-between'>
        <h1>New sheert</h1>
        <div className='flex gap-10'>
          <button className='btn btn-outline-primary' disabled>Atrás</button>
          <button
            className='btn btn-primary btn-custom'
            onClick={handlerSendSheet}
          >
            {loadingEvent ? <Spinner height={14} width={14} /> : 'Guardar y continuar'}
          </button>
        </div>
      </div>
      <div className='flex gap-12 sheet-content'>
        <Settings />
        <Editor />
      </div>
      <Toaster />
    </div>
  )
}

export default NewSheet
