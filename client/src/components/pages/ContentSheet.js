import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { Warning } from 'phosphor-react'

import { eventReset, sendSheet } from '../../actions/sheet'

import '../../styles/pages/sheet.scss'
import '../../styles/ui/elements.scss'

import Settings from '../sheet/Settings'
import { Editor } from '../sheet/Editor'
import Spinner from '../ui/spinner'
import Dropdown from '../ui/Dropdown'

function ContentSheet () {
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
    const { ok, msg } = validateConfig()
    if (ok) {
      toast((t) => (
        <div>
          <Warning size={24} color='#ffcc2e' weight='fill' />
          {msg.length === 1 ? 'El siguiente campo es requerido' : 'Los siguientes campos son requeridos'}
          <ul>
            {msg.map((e, i) => {
              return <li key={i}>{e}</li>
            })}
          </ul>
          <span>Los encontrarás en configuración</span>
        </div>
      ))
    } else {
      dispatch(sendSheet(currentSheet))
    }
  }

  const validateConfig = () => {
    const { title, description, section, tags } = currentSheet
    let errors = { ok: false, msg: [] }

    if (title === 'To write title' || title === '') {
      errors = { ok: true, msg: [...errors.msg, 'Titulo del Cheatsheet'] }
    }

    if (description === '') {
      errors = { ok: true, msg: [...errors.msg, 'Descripción'] }
    }

    if (Object.keys(section).length === 0) {
      errors = { ok: true, msg: [...errors.msg, 'Sección'] }
    }

    if (tags.length === 0) {
      errors = { ok: true, msg: [...errors.msg, 'Tags'] }
    }

    return errors
  }

  return (
    <div className='container-fluid sheet'>
      <div className='flex align-items-center justify-content-between'>
        <h1>New sheert</h1>
        <div className='flex gap-10'>
          <button className='btn btn-outline-primary' disabled>Atrás</button>
          <Dropdown
            head={
              <button
                className='btn btn-primary btn-custom'
              >
                {loadingEvent ? <Spinner height={14} width={14} /> : 'Guardar ...'}
              </button>
            }
            content={
              <>
                <li>
                  <a>
                    <div className='item' onClick={handlerSendSheet}>
                      <span>como borrador</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a>
                    <div className='item'>
                      <span>y publicar</span>
                    </div>
                  </a>
                </li>
              </>
            }
          />
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

export default ContentSheet
