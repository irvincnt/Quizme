import React from 'react'
import Breadcrumb from '../ui/Breadcrumb'
import Sheet from '../sheet/Sheet'
import Spinner from '../ui/spinner'
import Controls from '../sheet/Controls'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { Warning } from 'phosphor-react'
import { createCheatsheet } from '../../actions/sheet'

import '../../styles/pages/cheatsheet.scss'
import '../../styles/ui/elements.scss'

const breadcrumbContent = [
  {
    label: 'Home',
    open: '/home'
  },
  {
    label: 'Cheatsheet'
  }
]

function ConfigCheatsheet () {
  const dispatch = useDispatch()
  const { currentCheatSheet, loadingEvent } = useSelector(state => state.sheet)
  const { title, description, section, tags } = currentCheatSheet

  const handlerCreateCheatsheet = () => {
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
        </div>
      ))
    } else {
      dispatch(createCheatsheet(currentCheatSheet))
    }
  }

  const validateConfig = () => {
    let errors = { ok: false, msg: [] }

    if (title === 'Documento sin título' || title === '') {
      errors = { ok: true, msg: [...errors.msg, 'Titulo'] }
    }

    if (description === 'Descripción' || description === '') {
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
    <div className='cheatsheet container-fluid'>
      <div className='head'>
        <h2>Configurar cheatsheet</h2>
        <Breadcrumb content={breadcrumbContent} />
      </div>
      <div className='wrapper'>
        <div className='elements'>
          <Controls />
          <button
            className='btn btn-primary'
            onClick={handlerCreateCheatsheet}
          >{loadingEvent ? <Spinner height={14} width={14} /> : 'Crear cheatsheet'}
          </button>
        </div>
        <Sheet />
      </div>
      <Toaster />
    </div>
  )
}

export default ConfigCheatsheet
