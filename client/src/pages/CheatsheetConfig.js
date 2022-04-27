import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { Warning } from 'phosphor-react'

import Navbar from '../components/ui/Navbar'
import Breadcrumb from '../components/ui/Breadcrumb'
import CheatsheetHeader from '../components/cheatsheet/CheatsheetHeader'
import Controls from '../components/cheatsheet/Controls'
import { fetchPromises } from '../helpers/fetch'
import { sectionsType } from '../dictionary/baseConfig'
import { validateCheatsheetConfig } from '../helpers/validator'

import '../styles/pages/cheatsheet.scss'
import '../styles/ui/elements.scss'

const breadcrumbContent = [
  {
    label: 'Home',
    open: '/home'
  },
  {
    label: 'Cheatsheet'
  }
]

function CheatsheetConfig () {
  const [cheatsheetConfig, setCheatsheetConfig] = useState({
    title: 'Documento sin título',
    description: 'Descripción',
    favorite: false,
    private: true,
    section: {},
    tags: []
  })
  const history = useHistory()

  const handlerCreateCheatsheet = () => {
    const { ok, msg } = validateCheatsheetConfig(cheatsheetConfig)
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
    const resp = await fetchPromises('cheatsheet/new', cheatsheetConfig, 'POST')
    const respJson = await resp.json()
    const { ok, data } = respJson
    if (ok) {
      const { cs } = data
      setTimeout(() => {
        history.push(`/cheatsheet/${cs.id}`)
      }, 2000)
    }
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
    <>
      <Navbar />
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
            > Crear Cheatsheet </button>
          </div>
          <div className='ch'>
            <CheatsheetHeader
              isCreateContent={false}
              cheatsheetConfig={cheatsheetConfig}
              getCheatsheetConfig={getCheatsheetConfig}
            />
            <hr className='divider' />
            <span className='instruction'>Podrás agregar contenido después de agregar la configuración y crear el CheatSheet</span>

          </div>
        </div>
        <Toaster />
      </div>
    </>
  )
}

export default CheatsheetConfig
