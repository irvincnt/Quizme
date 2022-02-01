import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { Warning } from 'phosphor-react'

import { fetchWithToken } from '../../helpers/fetch'
import Breadcrumb from '../ui/Breadcrumb'
import Sheet from '../sheet/Sheet'
import Spinner from '../ui/spinner'
import Controls from '../sheet/Controls'
import { saveCheatsheet } from '../../actions/sheet'
import { sectionsType } from '../../dictionary/baseConfig'

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
  const [cheatsheetConfig, setCheatsheetConfig] = useState({
    title: 'Documento sin título',
    description: 'Descripción',
    favorite: false,
    private: true,
    section: {},
    tags: []
  })
  const dispatch = useDispatch()
  const history = useHistory()
  const { loadingEvent } = useSelector(state => state.sheet)
  const { title, description, section, tags } = cheatsheetConfig

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
      const myPromise = fetchCreateCheatsheet()
      toast.promise(myPromise, {
        loading: 'Cargando',
        success: 'Cheatsheet creado',
        error: 'Error al crear tu cheatsheet'
      })
    }
  }

  const fetchCreateCheatsheet = async () => {
    const resp = await fetchWithToken('cheatsheet/new', cheatsheetConfig, 'POST')
    const respJson = await resp.json()
    const { ok, data } = respJson
    if (ok) {
      const { cs } = data
      dispatch(saveCheatsheet(cs))
      setTimeout(() => {
        history.push(`/cheatsheet/${cs.id}`)
      }, 3000)
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

  const getCheatsheetConfig = (config) => {
    if (config.key === 'section') {
      const sectionType = sectionsType.find(type => type.value === config.value)
      config = { value: sectionType, key: 'section' }
    }

    setCheatsheetConfig({
      ...cheatsheetConfig,
      [config.key]: config.value
    })
  }

  return (
    <div className='cheatsheet container-fluid'>
      <div className='head'>
        <h2>Configurar cheatsheet</h2>
        <Breadcrumb content={breadcrumbContent} />
      </div>
      <div className='wrapper'>
        <div className='elements'>
          <Controls
            cheatsheetConfig={cheatsheetConfig}
            getCheatsheetConfig={getCheatsheetConfig}
          />
          <button
            className='btn btn-primary'
            onClick={handlerCreateCheatsheet}
          >{loadingEvent ? <Spinner height={14} width={14} /> : 'Crear cheatsheet'}
          </button>
        </div>
        <Sheet
          cheatsheetConfig={cheatsheetConfig}
          getCheatsheetConfig={getCheatsheetConfig}
        />
      </div>
      <Toaster />
    </div>
  )
}

export default ConfigCheatsheet
