import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../ui/Breadcrumb'
import Controls from '../sheet/Controls'
import Sheet from '../sheet/Sheet'

import { fetchWithToken } from '../../helpers/fetch'
import { sectionsType } from '../../dictionary/baseConfig'
import '../../styles/pages/cheatsheet.scss'
import toast, { Toaster } from 'react-hot-toast'
import { Warning } from 'phosphor-react'

const breadcrumbContent = [
  {
    label: 'Home',
    open: '/home'
  },
  {
    label: 'Cheatsheet'
  }
]

function Cheatsheet () {
  const { cheatsheetId } = useParams()
  const [isEditionMode, setIsEditionMode] = useState(false)
  const [cheatsheetConfig, setCheatsheetConfig] = useState({
    title: 'Documento sin título',
    description: 'Descripción',
    favorite: false,
    private: true,
    section: {},
    tags: []
  })
  const [initialConfig, setInitialConfig] = useState(cheatsheetConfig)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchWithToken(`cheatsheet/${cheatsheetId}`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        setCheatsheetConfig(data.cheatsheet)
        setInitialConfig(data.cheatsheet)
      }
    }
    fetchData()
  }, [cheatsheetId])

  useEffect(() => {
    if (!isEditionMode) {
      setCheatsheetConfig(initialConfig)
    }
  }, [isEditionMode])

  const handlerEditCheatsheet = () => {
    setIsEditionMode(!isEditionMode)
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
      const myPromise = fetchUpdateCheatsheet()
      toast.promise(myPromise, {
        loading: 'Actualizando',
        success: 'Cheatsheet actualizado',
        error: 'Error al actualizar'
      })
    }
  }

  const validateConfig = () => {
    let errors = { ok: false, msg: [] }
    const { title, description, section, tags } = cheatsheetConfig

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

  const fetchUpdateCheatsheet = async () => {
    const resp = await fetchWithToken('cheatsheet/update', cheatsheetConfig, 'PUT')
    const respJson = await resp.json()
    const { ok, data } = respJson

    if (ok) {
      setCheatsheetConfig(data)
      setInitialConfig(data)
      handlerEditCheatsheet(!isEditionMode)
    }
  }

  return (
    <div className='cheatsheet container-fluid'>
      <div className='head'>
        <h2>Cheatsheet</h2>
        <Breadcrumb content={breadcrumbContent} />
      </div>
      <div className='wrapper'>
        <div className='elements'>
          <Controls
            isEditionMode={isEditionMode}
            cheatsheetConfig={cheatsheetConfig}
            getCheatsheetConfig={getCheatsheetConfig}
          />
          {
            !isEditionMode
              ? <button className='btn' onClick={handlerEditCheatsheet}>Editar</button>
              : <div className='buttons'>
                <button className='btn' onClick={handlerCreateCheatsheet}>Guardar</button>
                <button className='btn' onClick={handlerEditCheatsheet}>Cancelar</button>
                </div>
          }
        </div>
        <Sheet
          disabledSheet={isEditionMode}
          cheatsheetConfig={cheatsheetConfig}
          getCheatsheetConfig={getCheatsheetConfig}
        />
      </div>
      Cheatsheet
      <Toaster />
    </div>
  )
}

export default Cheatsheet
